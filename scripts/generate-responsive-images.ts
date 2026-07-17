import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

type ImageVariant = {
  input: string;
  quality: number;
  widths: number[];
};

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDirectory = path.join(projectRoot, "public");

const variants: ImageVariant[] = [
  {
    input: "profile_25.webp",
    quality: 80,
    widths: [256, 384],
  },
  ...["progeny", "hiveborn", "cozycrowns"].map((name) => ({
    input: `projects/${name}.jpg`,
    quality: 70,
    widths: [384, 608, 640, 960],
  })),
];

await Promise.all(
  variants.flatMap(({ input, quality, widths }) =>
    widths.map(async (width) => {
      const inputPath = path.join(publicDirectory, input);
      const parsedPath = path.parse(inputPath);
      const outputPath = path.join(parsedPath.dir, `${parsedPath.name}-${width}w.webp`);

      await mkdir(parsedPath.dir, { recursive: true });
      await sharp(inputPath)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality, effort: 6, smartSubsample: true })
        .toFile(outputPath);
    }),
  ),
);

console.log(
  `Generated ${variants.reduce((total, variant) => total + variant.widths.length, 0)} responsive image variants.`,
);
