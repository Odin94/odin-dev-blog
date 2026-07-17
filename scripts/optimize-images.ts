import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

type OptimizationResult = {
  before: number;
  after: number;
};

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = path.join(projectRoot, "dist");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function findImages(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const images: string[] = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      images.push(...(await findImages(entryPath)));
    } else if (supportedExtensions.has(path.extname(entry.name).toLowerCase())) {
      images.push(entryPath);
    }
  }

  return images;
}

async function optimizeImage(imagePath: string): Promise<OptimizationResult> {
  const extension = path.extname(imagePath).toLowerCase();
  const input = await readFile(imagePath);
  let image = sharp(input).rotate();

  if (extension === ".jpg" || extension === ".jpeg") {
    image = image.jpeg({ quality: 82, progressive: true, mozjpeg: true });
  } else if (extension === ".png") {
    image = image.png({ compressionLevel: 9, adaptiveFiltering: true });
  } else {
    image = image.webp({ quality: 82, effort: 6, smartSubsample: true });
  }

  const output = await image.toBuffer();

  if (output.length < input.length) {
    await writeFile(imagePath, output);
    return { before: input.length, after: output.length };
  }

  return { before: input.length, after: input.length };
}

const imagePaths = await findImages(outputDirectory);
const results = await Promise.all(imagePaths.map(optimizeImage));
const before = results.reduce((total, result) => total + result.before, 0);
const after = results.reduce((total, result) => total + result.after, 0);
const optimizedCount = results.filter((result) => result.after < result.before).length;
const savedPercentage = before === 0 ? 0 : Math.round(((before - after) / before) * 100);

console.log(
  `Optimized ${optimizedCount}/${imagePaths.length} images: saved ${formatBytes(before - after)} (${savedPercentage}%).`,
);

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KiB`;
}
