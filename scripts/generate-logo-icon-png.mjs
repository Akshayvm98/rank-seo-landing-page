import sharp from "sharp";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const S = 1024;

// Full green canvas with centered white R, rounded corners
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}" viewBox="0 0 ${S} ${S}">
<defs>
  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#0d9488"/>
    <stop offset="100%" stop-color="#2dd4bf"/>
  </linearGradient>
</defs>
<rect width="${S}" height="${S}" rx="220" fill="url(#g)"/>
<text x="512" y="640" text-anchor="middle" font-family="system-ui,-apple-system,sans-serif" font-size="520" font-weight="bold" fill="#fff">R</text>
</svg>`;

async function generate() {
  const png = await sharp(Buffer.from(svg), { density: 150 })
    .resize(S, S, { fit: "fill" })
    .png({ quality: 100, compressionLevel: 6 })
    .toBuffer();

  writeFileSync(join(__dirname, "..", "public", "logo-icon.png"), png);

  const info = await sharp(png).metadata();
  console.log(`logo-icon.png: ${info.width}x${info.height}, ${(png.length / 1024).toFixed(1)} KB`);

  if (info.width !== S || info.height !== S) {
    console.error("ERROR: not 1024x1024");
    process.exit(1);
  }
  console.log("Verified: exact 1024x1024");
}

generate().catch((err) => { console.error(err); process.exit(1); });
