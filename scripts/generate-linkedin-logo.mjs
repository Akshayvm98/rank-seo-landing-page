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

// The logo: a bold "R" inside a rounded square with the brand gradient,
// plus an integrated upward arrow element suggesting growth/ranking.
// Designed to be recognizable at 48px.

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}" viewBox="0 0 ${S} ${S}">
<defs>
  <linearGradient id="bg-grad" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="${dark}"/>
    <stop offset="100%" stop-color="#1e293b"/>
  </linearGradient>
  <linearGradient id="accent-grad" x1="0" y1="1" x2="1" y2="0">
    <stop offset="0%" stop-color="${accent}"/>
    <stop offset="100%" stop-color="${accentLight}"/>
  </linearGradient>
  <linearGradient id="bar-grad" x1="0" y1="1" x2="0" y2="0">
    <stop offset="0%" stop-color="${accent}" stop-opacity="0.6"/>
    <stop offset="100%" stop-color="${accentLight}"/>
  </linearGradient>
</defs>

<!-- Background: dark rounded square -->
<rect width="${S}" height="${S}" rx="224" fill="url(#bg-grad)"/>

<!-- Subtle inner glow -->
<circle cx="512" cy="480" r="320" fill="${accentLight}" opacity="0.04"/>

<!-- Growth bars (behind the R, subtle) -->
<rect x="600" y="520" width="64" height="180" rx="12" fill="${accent}" opacity="0.15"/>
<rect x="680" y="440" width="64" height="260" rx="12" fill="${accent}" opacity="0.2"/>
<rect x="760" y="360" width="64" height="340" rx="12" fill="${accent}" opacity="0.25"/>

<!-- The main "R" letterform - bold, geometric -->
<g fill="url(#accent-grad)">
  <!-- Vertical stem -->
  <rect x="220" y="220" width="100" height="584" rx="16"/>

  <!-- Top horizontal bar -->
  <rect x="220" y="220" width="340" height="100" rx="16"/>

  <!-- Bowl curve (right side of R top) -->
  <rect x="480" y="220" width="100" height="280" rx="16"/>

  <!-- Middle horizontal connector -->
  <rect x="220" y="400" width="360" height="100" rx="16"/>

  <!-- Diagonal leg with upward arrow feel -->
  <polygon points="380,500 520,804 620,804 480,500"/>

  <!-- Arrow tip at the end of the leg -->
  <polygon points="540,700 620,804 700,740 620,720"/>
</g>

<!-- Small upward arrow accent (top right) -->
<g transform="translate(740, 180)">
  <line x1="40" y1="80" x2="40" y2="20" stroke="${accentLight}" stroke-width="12" stroke-linecap="round"/>
  <polyline points="16,44 40,16 64,44" fill="none" stroke="${accentLight}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
</g>

</svg>`;

async function generate() {
  // Generate PNG
  const pngBuffer = await sharp(Buffer.from(svg), { density: 150 })
    .resize(S, S, { fit: "fill" })
    .png({ quality: 100, compressionLevel: 6 })
    .toBuffer();

  const pngPath = join(__dirname, "..", "public", "linkedin-logo.png");
  writeFileSync(pngPath, pngBuffer);

  // Also save the SVG
  const svgPath = join(__dirname, "..", "public", "linkedin-logo.svg");
  writeFileSync(svgPath, svg);

  const info = await sharp(pngBuffer).metadata();
  console.log(`PNG: public/linkedin-logo.png`);
  console.log(`SVG: public/linkedin-logo.svg`);
  console.log(`Dimensions: ${info.width}x${info.height}`);
  console.log(`Size: ${(pngBuffer.length / 1024).toFixed(1)} KB`);

  if (info.width !== S || info.height !== S) {
    console.error(`ERROR: Expected ${S}x${S} but got ${info.width}x${info.height}`);
    process.exit(1);
  }
  console.log(`Verified: exact ${S}x${S} pixels`);
}

generate().catch((err) => { console.error(err); process.exit(1); });
