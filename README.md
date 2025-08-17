# Odin's Dev Blog

## How to run
* `npm isntall` to install dependencies
* `npm run dev` to run locally in dev mode
* `npm run build` to create a production build

## Articles & how to add them
* Articles are just markdown files in `src/app/articles/{article_folder_name}/index.md`
* Images put into article folders will be copied to `/public/articles/{article_folder_name}` during a build step using `copy-article-images.js`
* You can reference images as if they were in the same folder as your article (which is where you should put them) and paths will be fixed automatically during build
* Markdown rendering to React is defined in `MarkdownComponents.tsx`

## Credits:
* heart-illustration-1-svgrepo-com - [svgrepo.com](https://www.svgrepo.com/svg/482873/heart-illustration-1)
* queen-svgrepo-com.svg - [svgrepo.com](https://www.svgrepo.com/svg/317157/queen)
* (favicon) leaf-svgrepo-com.svg - [svgrepo.com](https://www.svgrepo.com/svg/485199/leaf)
* Ankh provided by [Nerdbert](https://drive.google.com/drive/folders/166CN03nsT6VF-cjjttS0uBfvMZRoNqgK)
* bluesky/github/reddit svgs - [simpleicons](https://simpleicons.org)