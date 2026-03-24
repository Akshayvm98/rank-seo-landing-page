import sharp from "sharp";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const S = 1024;

const accent = "#0d9488";
const accentLight = "#2dd4bf";
const dark = "#0f172a";
const white = "#ffffff";
const f = "system-ui, sans-serif";

// Clean, minimal layout: centered R icon + "RankSEO" text below
// Designed to look good in LinkedIn's circular crop
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}" viewBox="0 0 ${S} ${S}">
<defs>
  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="${accent}"/>
    <stop offset="100%" stop-color="${accentLight}"/>
  </linearGradient>
</defs>

<!-- Background -->
<rect width="${S}" height="${S}" fill="${white}"/>

<!-- R icon (centered, matching website exactly) -->
<rect x="362" y="280" width="300" height="300" rx="72" fill="url(#g)"/>
<text x="512" y="478" text-anchor="middle" font-family="${f}" font-size="180" font-weight="bold" fill="${white}">R</text>

<!-- Brand name below -->
<text x="512" y="690" text-anchor="middle" font-family="${f}" font-size="80" font-weight="600" fill="${dark}">RankSEO</text>
</svg>`;

async function generate() {
  const pngBuffer = await sharp(Buffer.from(svg), { density: 150 })
    .resize(S, S, { fit: "fill" })
    .png({ quality: 100, compressionLevel: 6 })
    .toBuffer();

  const outPath = join(__dirname, "..", "public", "linkedin-logo.png");
  writeFileSync(outPath, pngBuffer);

  const info = await sharp(pngBuffer).metadata();
  console.log(`File: public/linkedin-logo.png`);
  console.log(`Dimensions: ${info.width}x${info.height}`);
  console.log(`Size: ${(pngBuffer.length / 1024).toFixed(1)} KB`);

  if (info.width !== S || info.height !== S) {
    console.error(`ERROR: Expected ${S}x${S}`);
    process.exit(1);
  }
  console.log(`Verified: exact ${S}x${S}`);
}

generate().catch((err) => { console.error(err); process.exit(1); });
