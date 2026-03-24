import sharp from "sharp";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const W = 1584;
const H = 396;

// Brand colors
const accent = "#0d9488";
const accentLight = "#2dd4bf";
const dark = "#0f172a";
const muted = "#64748b";
const mutedLight = "#94a3b8";
const border = "#e2e8f0";
const bg = "#fafafa";
const white = "#ffffff";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="accent-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${accent}"/>
      <stop offset="100%" stop-color="${accentLight}"/>
    </linearGradient>
    <linearGradient id="bar-grad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="${accentLight}"/>
    </linearGradient>
    <radialGradient id="glow" cx="75%" cy="50%" r="40%">
      <stop offset="0%" stop-color="${accentLight}" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="${accentLight}" stop-opacity="0"/>
    </radialGradient>
    <!-- Grid pattern -->
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${border}" stroke-width="0.5" stroke-opacity="0.4"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="${bg}"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- Subtle top accent line -->
  <rect x="0" y="0" width="${W}" height="3" fill="url(#accent-grad)"/>

  <!-- LEFT SIDE: Text content -->

  <!-- Logo icon -->
  <rect x="80" y="60" width="40" height="40" rx="10" fill="url(#accent-grad)"/>
  <text x="100" y="87" text-anchor="middle" font-family="system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif" font-size="20" font-weight="700" fill="${white}">R</text>

  <!-- Brand name -->
  <text x="132" y="88" font-family="system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif" font-size="20" font-weight="600" fill="${dark}" letter-spacing="-0.02em">RankSEO</text>

  <!-- Main headline -->
  <text x="80" y="175" font-family="system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif" font-size="42" font-weight="700" fill="${dark}" letter-spacing="-0.03em">Turn your website into a</text>
  <text x="80" y="225" font-family="system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif" font-size="42" font-weight="700" fill="${dark}" letter-spacing="-0.03em">traffic engine</text>

  <!-- Supporting line -->
  <text x="80" y="270" font-family="system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif" font-size="18" font-weight="400" fill="${muted}">AI-powered SEO that grows your traffic automatically</text>

  <!-- URL -->
  <text x="80" y="340" font-family="system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif" font-size="15" font-weight="500" fill="${accent}">rankseoengine.com</text>

  <!-- RIGHT SIDE: Abstract UI visualization -->

  <!-- Main dashboard card -->
  <rect x="920" y="40" width="580" height="316" rx="16" fill="${white}" stroke="${border}" stroke-width="1"/>

  <!-- Card header bar -->
  <rect x="920" y="40" width="580" height="48" rx="16" fill="${white}"/>
  <rect x="920" y="72" width="580" height="1" fill="${border}"/>
  <!-- Window dots -->
  <circle cx="948" cy="64" r="5" fill="#f87171" opacity="0.6"/>
  <circle cx="966" cy="64" r="5" fill="#fbbf24" opacity="0.6"/>
  <circle cx="984" cy="64" r="5" fill="#34d399" opacity="0.6"/>
  <!-- Tab text -->
  <text x="1020" y="68" font-family="system-ui,sans-serif" font-size="12" font-weight="500" fill="${muted}">SEO Performance</text>

  <!-- Traffic chart area -->
  <!-- Chart bars -->
  <rect x="960" y="230" width="28" height="50" rx="4" fill="${border}" opacity="0.5"/>
  <rect x="996" y="210" width="28" height="70" rx="4" fill="${border}" opacity="0.5"/>
  <rect x="1032" y="190" width="28" height="90" rx="4" fill="${border}" opacity="0.5"/>
  <rect x="1068" y="200" width="28" height="80" rx="4" fill="url(#bar-grad)" opacity="0.7"/>
  <rect x="1104" y="170" width="28" height="110" rx="4" fill="url(#bar-grad)" opacity="0.8"/>
  <rect x="1140" y="145" width="28" height="135" rx="4" fill="url(#bar-grad)" opacity="0.9"/>
  <rect x="1176" y="120" width="28" height="160" rx="4" fill="url(#accent-grad)"/>

  <!-- Growth line -->
  <polyline points="974,225 1010,205 1046,185 1082,195 1118,165 1154,140 1190,115" fill="none" stroke="${accent}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"/>

  <!-- Metric cards row -->
  <rect x="960" y="95" width="120" height="58" rx="8" fill="${bg}" stroke="${border}" stroke-width="0.5"/>
  <text x="975" y="115" font-family="system-ui,sans-serif" font-size="10" font-weight="500" fill="${mutedLight}" letter-spacing="0.05em">IMPRESSIONS</text>
  <text x="975" y="140" font-family="system-ui,sans-serif" font-size="20" font-weight="700" fill="${dark}">142.8K</text>

  <rect x="1092" y="95" width="120" height="58" rx="8" fill="${bg}" stroke="${border}" stroke-width="0.5"/>
  <text x="1107" y="115" font-family="system-ui,sans-serif" font-size="10" font-weight="500" fill="${mutedLight}" letter-spacing="0.05em">CLICKS</text>
  <text x="1107" y="140" font-family="system-ui,sans-serif" font-size="20" font-weight="700" fill="${dark}">8,412</text>

  <rect x="1224" y="95" width="120" height="58" rx="8" fill="${bg}" stroke="${border}" stroke-width="0.5"/>
  <text x="1239" y="115" font-family="system-ui,sans-serif" font-size="10" font-weight="500" fill="${mutedLight}" letter-spacing="0.05em">AVG POSITION</text>
  <text x="1239" y="140" font-family="system-ui,sans-serif" font-size="20" font-weight="700" fill="${dark}">14.2</text>

  <!-- Workflow chips at bottom of card -->
  <rect x="960" y="300" width="80" height="26" rx="13" fill="${accent}" fill-opacity="0.08" stroke="${accent}" stroke-width="0.5" stroke-opacity="0.2"/>
  <text x="1000" y="317" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="600" fill="${accent}">Discover</text>

  <rect x="1050" y="300" width="80" height="26" rx="13" fill="${accent}" fill-opacity="0.08" stroke="${accent}" stroke-width="0.5" stroke-opacity="0.2"/>
  <text x="1090" y="317" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="600" fill="${accent}">Generate</text>

  <rect x="1140" y="300" width="80" height="26" rx="13" fill="${accent}" fill-opacity="0.08" stroke="${accent}" stroke-width="0.5" stroke-opacity="0.2"/>
  <text x="1180" y="317" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="600" fill="${accent}">Optimize</text>

  <rect x="1230" y="300" width="80" height="26" rx="13" fill="${accent}" fill-opacity="0.08" stroke="${accent}" stroke-width="0.5" stroke-opacity="0.2"/>
  <text x="1270" y="317" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="600" fill="${accent}">Publish</text>

  <rect x="1320" y="300" width="70" height="26" rx="13" fill="${accent}" fill-opacity="0.08" stroke="${accent}" stroke-width="0.5" stroke-opacity="0.2"/>
  <text x="1355" y="317" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="600" fill="${accent}">Track</text>

  <!-- Growth arrow indicator -->
  <rect x="1370" y="95" width="85" height="58" rx="8" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="0.5"/>
  <text x="1385" y="115" font-family="system-ui,sans-serif" font-size="10" font-weight="500" fill="#059669" letter-spacing="0.05em">GROWTH</text>
  <text x="1385" y="140" font-family="system-ui,sans-serif" font-size="20" font-weight="700" fill="#059669">+24%</text>
</svg>`;

async function generate() {
  // Light version
  const pngBuffer = await sharp(Buffer.from(svg))
    .resize(W, H)
    .png({ quality: 95, compressionLevel: 6 })
    .toBuffer();

  const outPath = join(__dirname, "..", "public", "linkedin-banner.png");
  writeFileSync(outPath, pngBuffer);

  const info = await sharp(pngBuffer).metadata();
  console.log(`Created: public/linkedin-banner.png`);
  console.log(`Size: ${info.width}x${info.height}`);
  console.log(`File: ${(pngBuffer.length / 1024).toFixed(1)} KB`);
}

generate().catch(console.error);
