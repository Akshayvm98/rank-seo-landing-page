import sharp from "sharp";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const W = 1584;
const H = 396;

// Brand palette
const c = {
  accent: "#0d9488",
  accentLight: "#2dd4bf",
  dark: "#0f172a",
  text: "#1e293b",
  muted: "#64748b",
  mutedLight: "#94a3b8",
  border: "#e2e8f0",
  borderLight: "#f1f5f9",
  surface: "#f8fafc",
  bg: "#fafafa",
  white: "#ffffff",
  green: "#059669",
  greenBg: "#ecfdf5",
  greenBorder: "#a7f3d0",
};

// Font: system-ui renders as the best available sans-serif on the build machine
const f = "system-ui, sans-serif";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<defs>
  <linearGradient id="ag" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="${c.accent}"/>
    <stop offset="100%" stop-color="${c.accentLight}"/>
  </linearGradient>
  <linearGradient id="bg" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0%" stop-color="${c.white}"/>
    <stop offset="100%" stop-color="#f0fdfa"/>
  </linearGradient>
  <linearGradient id="bar" x1="0" y1="1" x2="0" y2="0">
    <stop offset="0%" stop-color="${c.accent}" stop-opacity="0.4"/>
    <stop offset="100%" stop-color="${c.accentLight}"/>
  </linearGradient>
  <radialGradient id="glow" cx="65%" cy="45%" r="40%">
    <stop offset="0%" stop-color="${c.accentLight}" stop-opacity="0.07"/>
    <stop offset="100%" stop-color="${c.accentLight}" stop-opacity="0"/>
  </radialGradient>
  <clipPath id="card-clip"><rect x="890" y="28" width="620" height="340" rx="16"/></clipPath>
</defs>

<!-- Background -->
<rect width="${W}" height="${H}" fill="url(#bg)"/>
<rect width="${W}" height="${H}" fill="url(#glow)"/>

<!-- Subtle grid dots -->
${Array.from({ length: 40 }, (_, col) =>
  Array.from({ length: 10 }, (_, row) =>
    `<circle cx="${col * 40 + 20}" cy="${row * 40 + 18}" r="0.7" fill="${c.border}" opacity="0.5"/>`
  ).join("")
).join("")}

<!-- Top accent bar -->
<rect width="${W}" height="3" fill="url(#ag)"/>

<!-- ══ LEFT: Text ══ -->

<!-- Logo mark -->
<rect x="96" y="65" width="42" height="42" rx="10" fill="url(#ag)"/>
<text x="117" y="94" text-anchor="middle" font-family="${f}" font-size="21" font-weight="bold" fill="${c.white}">R</text>

<!-- Brand name -->
<text x="150" y="93" font-family="${f}" font-size="19" font-weight="600" fill="${c.dark}">RankSEO</text>

<!-- Headline line 1 -->
<text x="96" y="186" font-family="${f}" font-size="48" font-weight="bold" fill="${c.dark}">Make your website</text>

<!-- Headline line 2 -->
<text x="96" y="242" font-family="${f}" font-size="48" font-weight="bold" fill="${c.dark}">a traffic engine</text>

<!-- Subheadline -->
<text x="96" y="286" font-family="${f}" font-size="18" font-weight="normal" fill="${c.muted}">AI-powered SEO that grows your traffic automatically</text>

<!-- URL -->
<text x="96" y="350" font-family="${f}" font-size="15" font-weight="500" fill="${c.accent}">rankseoengine.com</text>

<!-- ══ RIGHT: Dashboard card ══ -->

<!-- Card shadow -->
<rect x="894" y="34" width="620" height="340" rx="18" fill="#000" opacity="0.04"/>

<!-- Main card -->
<rect x="890" y="28" width="620" height="340" rx="16" fill="${c.white}" stroke="${c.border}" stroke-width="0.8"/>

<!-- Card header -->
<g clip-path="url(#card-clip)">
  <rect x="890" y="28" width="620" height="46" fill="${c.surface}"/>
</g>
<line x1="890" y1="74" x2="1510" y2="74" stroke="${c.borderLight}" stroke-width="1"/>

<!-- Window controls -->
<circle cx="918" cy="50" r="5" fill="#ef4444" opacity="0.4"/>
<circle cx="936" cy="50" r="5" fill="#f59e0b" opacity="0.4"/>
<circle cx="954" cy="50" r="5" fill="#22c55e" opacity="0.4"/>
<text x="980" y="55" font-family="${f}" font-size="12" font-weight="500" fill="${c.mutedLight}">SEO Performance</text>

<!-- ── Metric cards ── -->

<!-- Impressions -->
<rect x="916" y="90" width="138" height="60" rx="10" fill="${c.surface}" stroke="${c.borderLight}" stroke-width="0.5"/>
<text x="932" y="110" font-family="${f}" font-size="9" font-weight="bold" fill="${c.mutedLight}">IMPRESSIONS</text>
<text x="932" y="137" font-family="${f}" font-size="24" font-weight="bold" fill="${c.dark}">142.8K</text>

<!-- Clicks -->
<rect x="1066" y="90" width="138" height="60" rx="10" fill="${c.surface}" stroke="${c.borderLight}" stroke-width="0.5"/>
<text x="1082" y="110" font-family="${f}" font-size="9" font-weight="bold" fill="${c.mutedLight}">CLICKS</text>
<text x="1082" y="137" font-family="${f}" font-size="24" font-weight="bold" fill="${c.dark}">8,412</text>

<!-- Position -->
<rect x="1216" y="90" width="120" height="60" rx="10" fill="${c.surface}" stroke="${c.borderLight}" stroke-width="0.5"/>
<text x="1232" y="110" font-family="${f}" font-size="9" font-weight="bold" fill="${c.mutedLight}">AVG POSITION</text>
<text x="1232" y="137" font-family="${f}" font-size="24" font-weight="bold" fill="${c.dark}">14.2</text>

<!-- Growth -->
<rect x="1348" y="90" width="120" height="60" rx="10" fill="${c.greenBg}" stroke="${c.greenBorder}" stroke-width="0.5"/>
<text x="1364" y="110" font-family="${f}" font-size="9" font-weight="bold" fill="${c.green}">GROWTH</text>
<text x="1364" y="137" font-family="${f}" font-size="24" font-weight="bold" fill="${c.green}">+24%</text>

<!-- ── Chart ── -->

<!-- Chart background lines -->
<line x1="916" y1="190" x2="1468" y2="190" stroke="${c.borderLight}" stroke-width="0.5"/>
<line x1="916" y1="220" x2="1468" y2="220" stroke="${c.borderLight}" stroke-width="0.5"/>
<line x1="916" y1="250" x2="1468" y2="250" stroke="${c.borderLight}" stroke-width="0.5"/>
<line x1="916" y1="280" x2="1468" y2="280" stroke="${c.borderLight}" stroke-width="0.5"/>
<line x1="916" y1="310" x2="1468" y2="310" stroke="${c.borderLight}" stroke-width="0.5"/>

<!-- Bars -->
<rect x="940"  y="276" width="34" height="34"  rx="4" fill="${c.border}" opacity="0.35"/>
<rect x="988"  y="258" width="34" height="52"  rx="4" fill="${c.border}" opacity="0.4"/>
<rect x="1036" y="244" width="34" height="66"  rx="4" fill="${c.border}" opacity="0.45"/>
<rect x="1084" y="252" width="34" height="58"  rx="4" fill="url(#bar)" opacity="0.55"/>
<rect x="1132" y="228" width="34" height="82"  rx="4" fill="url(#bar)" opacity="0.65"/>
<rect x="1180" y="210" width="34" height="100" rx="4" fill="url(#bar)" opacity="0.8"/>
<rect x="1228" y="194" width="34" height="116" rx="4" fill="url(#ag)"/>

<!-- Trend line -->
<polyline points="957,270 1005,252 1053,238 1101,246 1149,222 1197,204 1245,188" fill="none" stroke="${c.accent}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>

<!-- Endpoint dot -->
<circle cx="1245" cy="188" r="8" fill="${c.accent}" opacity="0.12"/>
<circle cx="1245" cy="188" r="4" fill="${c.accent}"/>

<!-- Month labels -->
<text x="949"  y="325" text-anchor="middle" font-family="${f}" font-size="9" fill="${c.mutedLight}">Jan</text>
<text x="997"  y="325" text-anchor="middle" font-family="${f}" font-size="9" fill="${c.mutedLight}">Feb</text>
<text x="1045" y="325" text-anchor="middle" font-family="${f}" font-size="9" fill="${c.mutedLight}">Mar</text>
<text x="1093" y="325" text-anchor="middle" font-family="${f}" font-size="9" fill="${c.mutedLight}">Apr</text>
<text x="1141" y="325" text-anchor="middle" font-family="${f}" font-size="9" fill="${c.mutedLight}">May</text>
<text x="1189" y="325" text-anchor="middle" font-family="${f}" font-size="9" fill="${c.mutedLight}">Jun</text>
<text x="1237" y="325" text-anchor="middle" font-family="${f}" font-size="9" fill="${c.mutedLight}">Jul</text>

<!-- Y-axis labels -->
<text x="930" y="194" text-anchor="end" font-family="${f}" font-size="8" fill="${c.mutedLight}">5K</text>
<text x="930" y="224" text-anchor="end" font-family="${f}" font-size="8" fill="${c.mutedLight}">4K</text>
<text x="930" y="254" text-anchor="end" font-family="${f}" font-size="8" fill="${c.mutedLight}">3K</text>
<text x="930" y="284" text-anchor="end" font-family="${f}" font-size="8" fill="${c.mutedLight}">2K</text>
<text x="930" y="314" text-anchor="end" font-family="${f}" font-size="8" fill="${c.mutedLight}">1K</text>

<!-- Chart title -->
<text x="1300" y="178" font-family="${f}" font-size="10" font-weight="500" fill="${c.accent}" text-anchor="end">Organic traffic</text>

<!-- Sidebar mini cards -->
<rect x="1300" y="210" width="168" height="42" rx="8" fill="${c.surface}" stroke="${c.borderLight}" stroke-width="0.5"/>
<circle cx="1318" cy="231" r="6" fill="${c.accent}" opacity="0.15"/>
<circle cx="1318" cy="231" r="3" fill="${c.accent}"/>
<text x="1332" y="227" font-family="${f}" font-size="9" font-weight="bold" fill="${c.mutedLight}">KEYWORDS</text>
<text x="1332" y="243" font-family="${f}" font-size="14" font-weight="bold" fill="${c.dark}">248 ranked</text>

<rect x="1300" y="260" width="168" height="42" rx="8" fill="${c.surface}" stroke="${c.borderLight}" stroke-width="0.5"/>
<circle cx="1318" cy="281" r="6" fill="${c.green}" opacity="0.15"/>
<circle cx="1318" cy="281" r="3" fill="${c.green}"/>
<text x="1332" y="277" font-family="${f}" font-size="9" font-weight="bold" fill="${c.mutedLight}">SEO SCORE</text>
<text x="1332" y="293" font-family="${f}" font-size="14" font-weight="bold" fill="${c.dark}">92 / 100</text>

</svg>`;

async function generate() {
  // Generate at exact dimensions
  const pngBuffer = await sharp(Buffer.from(svg), { density: 150 })
    .resize(W, H, { fit: "fill" })
    .png({ quality: 100, compressionLevel: 6 })
    .toBuffer();

  const outPath = join(__dirname, "..", "public", "linkedin-banner.png");
  writeFileSync(outPath, pngBuffer);

  // Verify exact dimensions
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

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
