import sharp from "sharp";
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = join(process.cwd(), "public", "assets", "img", "portfolio");
const meta = {};

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full);
    } else if (full.toLowerCase().endsWith(".png")) {
      meta[full] = null;
    }
  }
}

walk(ROOT);

for (const png of Object.keys(meta)) {
  const webp = png.replace(/\.png$/i, ".webp");
  const image = sharp(png);
  const dims = await image.metadata();
  await image.webp({ quality: 82 }).toFile(webp);
  const rel = "/" + relative(join(process.cwd(), "public"), webp).replaceAll("\\", "/");
  meta[rel] = { width: dims.width, height: dims.height };
  delete meta[png];
  console.log(`${png} -> ${webp} (${dims.width}x${dims.height})`);
}

const ts = `// Generado por scripts/convert-portfolio.mjs — no editar a mano
export interface ImageMeta {
  width: number;
  height: number;
}

export const imageMeta: Record<string, ImageMeta> = ${JSON.stringify(meta, null, 2)};
`;

writeFileSync(join(process.cwd(), "src", "data", "imageMeta.ts"), ts);
console.log(`\nListo: ${Object.keys(meta).length} imágenes convertidas y imageMeta.ts generado.`);
