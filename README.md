# ImpostorFlash

Prerequisites
- Node 20+, npm

Quick start
1. Install: npm ci
2. Dev: npm run dev
3. Build: npm run build
4. Preview: npm run preview

Entry points
- [package.json](package.json) (scripts)
- [src/main.tsx](src/main.tsx)
- [`App`](src/App.tsx)

Data
- Default categories: [src/utils/storage.ts](src/utils/storage.ts)

### Online version
Also github pages is now available, so you can access the app [here](https://dh3b.github.io/imposter-flash/).

**Note:**
To keep the app configurable, it caches the categories using browser's website data. So every now and then this project updates, and you don't see any changes, it might just be that your browser is still loading the old version of the app from browser's cache.
