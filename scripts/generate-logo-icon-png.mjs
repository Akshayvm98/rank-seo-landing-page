import sharp from "sharp";
import { writeFileSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

// Read the existing SVG source
const svgSource = readFileSync(join(publicDir, "logo-icon.svg"), "utf-8");

// Upscale the SVG viewBox for crisp rendering at 1024px
// The original is 32x32 viewBox, we render at high density
const S = 1024;

async function exportPng(svgBuffer, size, filename) {
  const png = await sharp(svgBuffer, { density: 300 })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: 100, compressionLevel: 6 })
    .toBuffer();

  const outPath = join(publicDir, filename);
  writeFileSync(outPath, png);

  const info = await sharp(png).metadata();
  console.log(`${filename}: ${info.width}x${info.height}, ${(png.length / 1024).toFixed(1)} KB`);
  return info;
}

async function generate() {
  const svgBuf = Buffer.from(svgSource);

  // 1. Transparent background versions
  await exportPng(svgBuf, 1024, "logo-icon-transparent.png");

  // 2. With solid white background + padding
  const icon = await sharp(svgBuf, { density: 300 })
    .resize(760, 760, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const padded = await sharp({
    create: { width: 1024, height: 1024, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 255 } },
  })
    .composite([{ input: icon, gravity: "centre" }])
    .png({ quality: 100, compressionLevel: 6 })
    .toBuffer();

  writeFileSync(join(publicDir, "logo-icon.png"), padded);
  const info = await sharp(padded).metadata();
  console.log(`logo-icon.png: ${info.width}x${info.height}, ${(padded.length / 1024).toFixed(1)} KB`);

  // Verify
  if (info.width !== 1024 || info.height !== 1024) {
    console.error("ERROR: logo-icon.png is not 1024x1024");
    process.exit(1);
  }

  console.log("\nAll files generated successfully.");
}

generate().catch((err) => { console.error(err); process.exit(1); });
