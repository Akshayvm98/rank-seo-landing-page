import sharp from "sharp";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const W = 1128;
const H = 191;

// Brand palette
const accent = "#0d9488";
const accentLight = "#2dd4bf";
const dark = "#0f172a";
const muted = "#64748b";
const mutedLight = "#94a3b8";
const border = "#e2e8f0";
const borderLight = "#f1f5f9";
const surface = "#f8fafc";
const white = "#ffffff";
const green = "#059669";

const f = "system-ui, sans-serif";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<defs>
  <linearGradient id="ag" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="${accent}"/>
    <stop offset="100%" stop-color="${accentLight}"/>
  </linearGradient>
  <linearGradient id="bgr" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0%" stop-color="${white}"/>
    <stop offset="100%" stop-color="#f0fdfa"/>
  </linearGradient>
  <linearGradient id="bar" x1="0" y1="1" x2="0" y2="0">
    <stop offset="0%" stop-color="${accent}" stop-opacity="0.3"/>
    <stop offset="100%" stop-color="${accentLight}"/>
  </linearGradient>
  <radialGradient id="glow" cx="60%" cy="50%" r="35%">
    <stop offset="0%" stop-color="${accentLight}" stop-opacity="0.06"/>
    <stop offset="100%" stop-color="${accentLight}" stop-opacity="0"/>
  </radialGradient>
</defs>

<!-- Background -->
<rect width="${W}" height="${H}" fill="url(#bgr)"/>
<rect width="${W}" height="${H}" fill="url(#glow)"/>

<!-- Dot grid -->
${Array.from({ length: 29 }, (_, col) =>
  Array.from({ length: 5 }, (_, row) =>
    `<circle cx="${col * 40 + 14}" cy="${row * 40 + 16}" r="0.6" fill="${border}" opacity="0.4"/>`
  ).join("")
).join("")}

<!-- Top accent line -->
<rect width="${W}" height="2" fill="url(#ag)"/>

<!-- ═══ LEFT SIDE ═══ -->

<!-- Logo -->
<rect x="36" y="28" width="28" height="28" rx="7" fill="url(#ag)"/>
<text x="50" y="48" text-anchor="middle" font-family="${f}" font-size="15" font-weight="bold" fill="${white}">R</text>
<text x="72" y="47" font-family="${f}" font-size="13" font-weight="600" fill="${dark}">RankSEO</text>

<!-- Headline -->
<text x="36" y="96" font-family="${f}" font-size="28" font-weight="bold" fill="${dark}">Make your website a traffic engine</text>

<!-- Subheadline -->
<text x="36" y="122" font-family="${f}" font-size="12" font-weight="normal" fill="${muted}">AI-powered SEO that grows your traffic automatically</text>

<!-- URL -->
<text x="36" y="168" font-family="${f}" font-size="11" font-weight="500" fill="${accent}">rankseoengine.com</text>

<!-- ═══ RIGHT SIDE: Compact dashboard ═══ -->

<!-- Card -->
<rect x="698" y="14" width="406" height="163" rx="10" fill="${white}" stroke="${border}" stroke-width="0.6"/>

<!-- Card header -->
<rect x="698" y="14" width="406" height="28" rx="10" fill="${surface}"/>
<rect x="698" y="42" width="406" height="0.6" fill="${borderLight}"/>
<circle cx="716" cy="28" r="3.5" fill="#ef4444" opacity="0.35"/>
<circle cx="728" cy="28" r="3.5" fill="#f59e0b" opacity="0.35"/>
<circle cx="740" cy="28" r="3.5" fill="#22c55e" opacity="0.35"/>
<text x="756" y="31" font-family="${f}" font-size="9" font-weight="500" fill="${mutedLight}">SEO Performance</text>

<!-- Mini metric row -->
<rect x="714" y="50" width="84" height="32" rx="6" fill="${surface}" stroke="${borderLight}" stroke-width="0.4"/>
<text x="722" y="63" font-family="${f}" font-size="7" font-weight="bold" fill="${mutedLight}">IMPRESSIONS</text>
<text x="722" y="76" font-family="${f}" font-size="13" font-weight="bold" fill="${dark}">142.8K</text>

<rect x="806" y="50" width="72" height="32" rx="6" fill="${surface}" stroke="${borderLight}" stroke-width="0.4"/>
<text x="814" y="63" font-family="${f}" font-size="7" font-weight="bold" fill="${mutedLight}">CLICKS</text>
<text x="814" y="76" font-family="${f}" font-size="13" font-weight="bold" fill="${dark}">8,412</text>

<rect x="886" y="50" width="72" height="32" rx="6" fill="${surface}" stroke="${borderLight}" stroke-width="0.4"/>
<text x="894" y="63" font-family="${f}" font-size="7" font-weight="bold" fill="${mutedLight}">POSITION</text>
<text x="894" y="76" font-family="${f}" font-size="13" font-weight="bold" fill="${dark}">14.2</text>

<rect x="966" y="50" width="68" height="32" rx="6" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="0.4"/>
<text x="974" y="63" font-family="${f}" font-size="7" font-weight="bold" fill="${green}">GROWTH</text>
<text x="974" y="76" font-family="${f}" font-size="13" font-weight="bold" fill="${green}">+24%</text>

<!-- Chart bars -->
<rect x="714" y="132" width="18" height="20" rx="3" fill="${border}" opacity="0.3"/>
<rect x="738" y="124" width="18" height="28" rx="3" fill="${border}" opacity="0.35"/>
<rect x="762" y="118" width="18" height="34" rx="3" fill="${border}" opacity="0.4"/>
<rect x="786" y="122" width="18" height="30" rx="3" fill="url(#bar)" opacity="0.5"/>
<rect x="810" y="112" width="18" height="40" rx="3" fill="url(#bar)" opacity="0.65"/>
<rect x="834" y="104" width="18" height="48" rx="3" fill="url(#bar)" opacity="0.8"/>
<rect x="858" y="96"  width="18" height="56" rx="3" fill="url(#ag)"/>

<!-- Trend line -->
<polyline points="723,128 747,120 771,114 795,118 819,108 843,100 867,92" fill="none" stroke="${accent}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.45"/>
<circle cx="867" cy="92" r="3" fill="${accent}"/>

<!-- Side stats -->
<rect x="900" y="92" width="96" height="26" rx="5" fill="${surface}" stroke="${borderLight}" stroke-width="0.4"/>
<circle cx="912" cy="105" r="3" fill="${accent}"/>
<text x="920" y="102" font-family="${f}" font-size="7" font-weight="bold" fill="${mutedLight}">KEYWORDS</text>
<text x="920" y="113" font-family="${f}" font-size="10" font-weight="bold" fill="${dark}">248 ranked</text>

<rect x="900" y="124" width="96" height="26" rx="5" fill="${surface}" stroke="${borderLight}" stroke-width="0.4"/>
<circle cx="912" cy="137" r="3" fill="${green}"/>
<text x="920" y="134" font-family="${f}" font-size="7" font-weight="bold" fill="${mutedLight}">SEO SCORE</text>
<text x="920" y="145" font-family="${f}" font-size="10" font-weight="bold" fill="${dark}">92 / 100</text>

<!-- Chart x-axis labels -->
<text x="723" y="162" text-anchor="middle" font-family="${f}" font-size="6" fill="${mutedLight}">Jan</text>
<text x="747" y="162" text-anchor="middle" font-family="${f}" font-size="6" fill="${mutedLight}">Feb</text>
<text x="771" y="162" text-anchor="middle" font-family="${f}" font-size="6" fill="${mutedLight}">Mar</text>
<text x="795" y="162" text-anchor="middle" font-family="${f}" font-size="6" fill="${mutedLight}">Apr</text>
<text x="819" y="162" text-anchor="middle" font-family="${f}" font-size="6" fill="${mutedLight}">May</text>
<text x="843" y="162" text-anchor="middle" font-family="${f}" font-size="6" fill="${mutedLight}">Jun</text>
<text x="867" y="162" text-anchor="middle" font-family="${f}" font-size="6" fill="${mutedLight}">Jul</text>

</svg>`;

async function generate() {
  const pngBuffer = await sharp(Buffer.from(svg), { density: 150 })
    .resize(W, H, { fit: "fill" })
    .png({ quality: 100, compressionLevel: 6 })
    .toBuffer();

  const outPath = join(__dirname, "..", "public", "linkedin-banner.png");
  writeFileSync(outPath, pngBuffer);

  const info = await sharp(pngBuffer).metadata();
  console.log(`File: public/linkedin-banner.png`);
  console.log(`Dimensions: ${info.width}x${info.height}`);
  console.log(`Size: ${(pngBuffer.length / 1024).toFixed(1)} KB`);

  if (info.width !== W || info.height !== H) {
    console.error(`ERROR: Expected ${W}x${H} but got ${info.width}x${info.height}`);
    process.exit(1);
  }
  console.log(`Verified: exact ${W}x${H} pixels`);
}

generate().catch((err) => { console.error(err); process.exit(1); });
