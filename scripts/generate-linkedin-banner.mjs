import sharp from "sharp";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const W = 1584;
const H = 396;

const accent = "#0d9488";
const accentLight = "#2dd4bf";
const dark = "#0f172a";
const muted = "#64748b";
const mutedLight = "#94a3b8";
const border = "#e2e8f0";
const borderLight = "#f1f5f9";
const bg = "#fafafa";
const white = "#ffffff";

// Use system font stack (quotes must use &quot; inside SVG XML)
const font = `Inter,Geist,SF Pro Display,system-ui,-apple-system,sans-serif`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="accent-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${accent}"/>
      <stop offset="100%" stop-color="${accentLight}"/>
    </linearGradient>
    <linearGradient id="bar-grad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="${accentLight}"/>
    </linearGradient>
    <linearGradient id="bg-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${white}"/>
      <stop offset="100%" stop-color="#f0fdfa"/>
    </linearGradient>
    <radialGradient id="glow" cx="70%" cy="50%" r="45%">
      <stop offset="0%" stop-color="${accentLight}" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="${accentLight}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="${border}" stroke-width="0.4" stroke-opacity="0.3"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg-grad)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- Top accent line -->
  <rect x="0" y="0" width="${W}" height="3" fill="url(#accent-grad)"/>

  <!-- ═══════════ LEFT SIDE ═══════════ -->

  <!-- Logo -->
  <rect x="88" y="68" width="38" height="38" rx="9" fill="url(#accent-grad)"/>
  <text x="107" y="94" text-anchor="middle" font-family="${font}" font-size="19" font-weight="700" fill="${white}">R</text>
  <text x="138" y="94" font-family="${font}" font-size="18" font-weight="600" fill="${dark}" letter-spacing="-0.5">RankSEO</text>

  <!-- Headline -->
  <text x="88" y="185" font-family="${font}" font-size="46" font-weight="700" fill="${dark}" letter-spacing="-1.8">Make your website</text>
  <text x="88" y="238" font-family="${font}" font-size="46" font-weight="700" fill="${dark}" letter-spacing="-1.8">a traffic engine</text>

  <!-- Subheadline -->
  <text x="88" y="282" font-family="${font}" font-size="17" font-weight="400" fill="${muted}" letter-spacing="-0.2">AI-powered SEO that grows your traffic automatically</text>

  <!-- URL -->
  <text x="88" y="348" font-family="${font}" font-size="14" font-weight="500" fill="${accent}" letter-spacing="0">rankseoengine.com</text>

  <!-- ═══════════ RIGHT SIDE ═══════════ -->

  <!-- Dashboard card -->
  <rect x="900" y="32" width="600" height="332" rx="16" fill="${white}" stroke="${border}" stroke-width="0.8"/>

  <!-- Header bar -->
  <rect x="900" y="32" width="600" height="44" rx="16" fill="${white}"/>
  <rect x="900" y="76" width="600" height="0.8" fill="${borderLight}"/>
  <!-- Dots -->
  <circle cx="926" cy="54" r="4.5" fill="#f87171" opacity="0.5"/>
  <circle cx="942" cy="54" r="4.5" fill="#fbbf24" opacity="0.5"/>
  <circle cx="958" cy="54" r="4.5" fill="#34d399" opacity="0.5"/>
  <text x="985" y="58" font-family="${font}" font-size="11" font-weight="500" fill="${mutedLight}">SEO Dashboard</text>

  <!-- Metric cards -->
  <rect x="928" y="92" width="130" height="56" rx="10" fill="${bg}" stroke="${borderLight}" stroke-width="0.5"/>
  <text x="944" y="112" font-family="${font}" font-size="9" font-weight="600" fill="${mutedLight}" letter-spacing="0.08em">IMPRESSIONS</text>
  <text x="944" y="136" font-family="${font}" font-size="22" font-weight="700" fill="${dark}" letter-spacing="-0.5">142.8K</text>

  <rect x="1070" y="92" width="130" height="56" rx="10" fill="${bg}" stroke="${borderLight}" stroke-width="0.5"/>
  <text x="1086" y="112" font-family="${font}" font-size="9" font-weight="600" fill="${mutedLight}" letter-spacing="0.08em">CLICKS</text>
  <text x="1086" y="136" font-family="${font}" font-size="22" font-weight="700" fill="${dark}" letter-spacing="-0.5">8,412</text>

  <rect x="1212" y="92" width="130" height="56" rx="10" fill="${bg}" stroke="${borderLight}" stroke-width="0.5"/>
  <text x="1228" y="112" font-family="${font}" font-size="9" font-weight="600" fill="${mutedLight}" letter-spacing="0.08em">AVG POSITION</text>
  <text x="1228" y="136" font-family="${font}" font-size="22" font-weight="700" fill="${dark}" letter-spacing="-0.5">14.2</text>

  <rect x="1354" y="92" width="118" height="56" rx="10" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="0.5"/>
  <text x="1370" y="112" font-family="${font}" font-size="9" font-weight="600" fill="#059669" letter-spacing="0.08em">GROWTH</text>
  <text x="1370" y="136" font-family="${font}" font-size="22" font-weight="700" fill="#059669" letter-spacing="-0.5">+24%</text>

  <!-- Bar chart -->
  <rect x="928" y="248" width="30" height="54" rx="5" fill="${border}" opacity="0.4"/>
  <rect x="968" y="228" width="30" height="74" rx="5" fill="${border}" opacity="0.4"/>
  <rect x="1008" y="208" width="30" height="94" rx="5" fill="${border}" opacity="0.5"/>
  <rect x="1048" y="218" width="30" height="84" rx="5" fill="url(#bar-grad)" opacity="0.6"/>
  <rect x="1088" y="188" width="30" height="114" rx="5" fill="url(#bar-grad)" opacity="0.7"/>
  <rect x="1128" y="168" width="30" height="134" rx="5" fill="url(#bar-grad)" opacity="0.85"/>
  <rect x="1168" y="160" width="30" height="142" rx="5" fill="url(#accent-grad)"/>

  <!-- Growth trend line -->
  <polyline points="943,243 983,223 1023,203 1063,213 1103,183 1143,163 1183,155" fill="none" stroke="${accent}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>

  <!-- Dot on latest point -->
  <circle cx="1183" cy="155" r="4" fill="${accent}" opacity="0.8"/>
  <circle cx="1183" cy="155" r="7" fill="${accent}" opacity="0.15"/>

  <!-- Workflow chips -->
  <rect x="928" y="318" width="76" height="24" rx="12" fill="${accent}" fill-opacity="0.07" stroke="${accent}" stroke-width="0.5" stroke-opacity="0.15"/>
  <text x="966" y="334" text-anchor="middle" font-family="${font}" font-size="10" font-weight="600" fill="${accent}">Discover</text>

  <rect x="1014" y="318" width="78" height="24" rx="12" fill="${accent}" fill-opacity="0.07" stroke="${accent}" stroke-width="0.5" stroke-opacity="0.15"/>
  <text x="1053" y="334" text-anchor="middle" font-family="${font}" font-size="10" font-weight="600" fill="${accent}">Generate</text>

  <rect x="1102" y="318" width="76" height="24" rx="12" fill="${accent}" fill-opacity="0.07" stroke="${accent}" stroke-width="0.5" stroke-opacity="0.15"/>
  <text x="1140" y="334" text-anchor="middle" font-family="${font}" font-size="10" font-weight="600" fill="${accent}">Optimize</text>

  <rect x="1188" y="318" width="68" height="24" rx="12" fill="${accent}" fill-opacity="0.07" stroke="${accent}" stroke-width="0.5" stroke-opacity="0.15"/>
  <text x="1222" y="334" text-anchor="middle" font-family="${font}" font-size="10" font-weight="600" fill="${accent}">Publish</text>

  <rect x="1266" y="318" width="60" height="24" rx="12" fill="${accent}" fill-opacity="0.07" stroke="${accent}" stroke-width="0.5" stroke-opacity="0.15"/>
  <text x="1296" y="334" text-anchor="middle" font-family="${font}" font-size="10" font-weight="600" fill="${accent}">Track</text>

  <!-- Connector arrows between chips -->
  <text x="1000" y="334" font-family="${font}" font-size="10" fill="${accentLight}" opacity="0.5">&#x2192;</text>
  <text x="1088" y="334" font-family="${font}" font-size="10" fill="${accentLight}" opacity="0.5">&#x2192;</text>
  <text x="1176" y="334" font-family="${font}" font-size="10" fill="${accentLight}" opacity="0.5">&#x2192;</text>
  <text x="1254" y="334" font-family="${font}" font-size="10" fill="${accentLight}" opacity="0.5">&#x2192;</text>
</svg>`;

async function generate() {
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
