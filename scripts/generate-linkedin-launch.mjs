import sharp from "sharp";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const W = 1200;
const H = 627;

const accent = "#0d9488";
const accentLight = "#2dd4bf";
const dark = "#0f172a";
const text = "#1e293b";
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
  <linearGradient id="bgr" x1="0" y1="0" x2="0.5" y2="1">
    <stop offset="0%" stop-color="${white}"/>
    <stop offset="100%" stop-color="#f0fdfa"/>
  </linearGradient>
  <linearGradient id="bar" x1="0" y1="1" x2="0" y2="0">
    <stop offset="0%" stop-color="${accent}" stop-opacity="0.3"/>
    <stop offset="100%" stop-color="${accentLight}"/>
  </linearGradient>
  <radialGradient id="glow" cx="55%" cy="45%" r="40%">
    <stop offset="0%" stop-color="${accentLight}" stop-opacity="0.06"/>
    <stop offset="100%" stop-color="${accentLight}" stop-opacity="0"/>
  </radialGradient>
</defs>

<!-- Background -->
<rect width="${W}" height="${H}" fill="url(#bgr)"/>
<rect width="${W}" height="${H}" fill="url(#glow)"/>

<!-- Dot grid -->
${Array.from({ length: 31 }, (_, c) =>
  Array.from({ length: 16 }, (_, r) =>
    `<circle cx="${c * 40 + 10}" cy="${r * 40 + 14}" r="0.7" fill="${border}" opacity="0.35"/>`
  ).join("")
).join("")}

<!-- Top accent line -->
<rect width="${W}" height="3" fill="url(#ag)"/>

<!-- Launch badge -->
<rect x="60" y="50" width="130" height="28" rx="14" fill="${accent}" fill-opacity="0.08" stroke="${accent}" stroke-width="0.6" stroke-opacity="0.2"/>
<text x="125" y="69" text-anchor="middle" font-family="${f}" font-size="11" font-weight="600" fill="${accent}">Launching RankSEO</text>

<!-- Logo -->
<rect x="60" y="100" width="44" height="44" rx="11" fill="url(#ag)"/>
<text x="82" y="130" text-anchor="middle" font-family="${f}" font-size="22" font-weight="bold" fill="${white}">R</text>
<text x="116" y="129" font-family="${f}" font-size="20" font-weight="600" fill="${dark}">RankSEO</text>

<!-- Headline -->
<text x="60" y="220" font-family="${f}" font-size="46" font-weight="bold" fill="${dark}">Make your website</text>
<text x="60" y="274" font-family="${f}" font-size="46" font-weight="bold" fill="${dark}">a traffic engine</text>

<!-- Subheadline -->
<text x="60" y="320" font-family="${f}" font-size="18" font-weight="normal" fill="${muted}">AI-powered SEO that grows your traffic automatically</text>

<!-- URL -->
<text x="60" y="560" font-family="${f}" font-size="15" font-weight="500" fill="${accent}">rankseoengine.com</text>

<!-- Workflow chips -->
<rect x="60" y="380" width="84" height="28" rx="14" fill="${accent}" fill-opacity="0.07" stroke="${accent}" stroke-width="0.5" stroke-opacity="0.15"/>
<text x="102" y="399" text-anchor="middle" font-family="${f}" font-size="11" font-weight="600" fill="${accent}">Discover</text>

<text x="152" y="399" font-family="${f}" font-size="11" fill="${accentLight}" opacity="0.5">&#x2192;</text>

<rect x="168" y="380" width="84" height="28" rx="14" fill="${accent}" fill-opacity="0.07" stroke="${accent}" stroke-width="0.5" stroke-opacity="0.15"/>
<text x="210" y="399" text-anchor="middle" font-family="${f}" font-size="11" font-weight="600" fill="${accent}">Generate</text>

<text x="260" y="399" font-family="${f}" font-size="11" fill="${accentLight}" opacity="0.5">&#x2192;</text>

<rect x="276" y="380" width="84" height="28" rx="14" fill="${accent}" fill-opacity="0.07" stroke="${accent}" stroke-width="0.5" stroke-opacity="0.15"/>
<text x="318" y="399" text-anchor="middle" font-family="${f}" font-size="11" font-weight="600" fill="${accent}">Optimize</text>

<text x="368" y="399" font-family="${f}" font-size="11" fill="${accentLight}" opacity="0.5">&#x2192;</text>

<rect x="384" y="380" width="76" height="28" rx="14" fill="${accent}" fill-opacity="0.07" stroke="${accent}" stroke-width="0.5" stroke-opacity="0.15"/>
<text x="422" y="399" text-anchor="middle" font-family="${f}" font-size="11" font-weight="600" fill="${accent}">Publish</text>

<text x="468" y="399" font-family="${f}" font-size="11" fill="${accentLight}" opacity="0.5">&#x2192;</text>

<rect x="484" y="380" width="66" height="28" rx="14" fill="${accent}" fill-opacity="0.07" stroke="${accent}" stroke-width="0.5" stroke-opacity="0.15"/>
<text x="517" y="399" text-anchor="middle" font-family="${f}" font-size="11" font-weight="600" fill="${accent}">Track</text>

<!-- ══ RIGHT SIDE: Dashboard ══ -->

<!-- Card shadow -->
<rect x="624" y="54" width="520" height="520" rx="18" fill="#000" opacity="0.03"/>

<!-- Main card -->
<rect x="620" y="48" width="520" height="520" rx="16" fill="${white}" stroke="${border}" stroke-width="0.7"/>

<!-- Header -->
<rect x="620" y="48" width="520" height="42" rx="16" fill="${surface}"/>
<rect x="620" y="90" width="520" height="0.7" fill="${borderLight}"/>
<circle cx="646" cy="69" r="4.5" fill="#ef4444" opacity="0.35"/>
<circle cx="660" cy="69" r="4.5" fill="#f59e0b" opacity="0.35"/>
<circle cx="674" cy="69" r="4.5" fill="#22c55e" opacity="0.35"/>
<text x="696" y="73" font-family="${f}" font-size="11" font-weight="500" fill="${mutedLight}">SEO Dashboard</text>

<!-- Metric cards -->
<rect x="644" y="106" width="114" height="54" rx="9" fill="${surface}" stroke="${borderLight}" stroke-width="0.4"/>
<text x="658" y="124" font-family="${f}" font-size="8" font-weight="bold" fill="${mutedLight}">IMPRESSIONS</text>
<text x="658" y="148" font-family="${f}" font-size="22" font-weight="bold" fill="${dark}">142.8K</text>

<rect x="770" y="106" width="106" height="54" rx="9" fill="${surface}" stroke="${borderLight}" stroke-width="0.4"/>
<text x="784" y="124" font-family="${f}" font-size="8" font-weight="bold" fill="${mutedLight}">CLICKS</text>
<text x="784" y="148" font-family="${f}" font-size="22" font-weight="bold" fill="${dark}">8,412</text>

<rect x="888" y="106" width="106" height="54" rx="9" fill="${surface}" stroke="${borderLight}" stroke-width="0.4"/>
<text x="902" y="124" font-family="${f}" font-size="8" font-weight="bold" fill="${mutedLight}">AVG POSITION</text>
<text x="902" y="148" font-family="${f}" font-size="22" font-weight="bold" fill="${dark}">14.2</text>

<rect x="1006" y="106" width="100" height="54" rx="9" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="0.4"/>
<text x="1020" y="124" font-family="${f}" font-size="8" font-weight="bold" fill="${green}">GROWTH</text>
<text x="1020" y="148" font-family="${f}" font-size="22" font-weight="bold" fill="${green}">+24%</text>

<!-- Chart grid lines -->
<line x1="644" y1="210" x2="1040" y2="210" stroke="${borderLight}" stroke-width="0.4"/>
<line x1="644" y1="250" x2="1040" y2="250" stroke="${borderLight}" stroke-width="0.4"/>
<line x1="644" y1="290" x2="1040" y2="290" stroke="${borderLight}" stroke-width="0.4"/>
<line x1="644" y1="330" x2="1040" y2="330" stroke="${borderLight}" stroke-width="0.4"/>
<line x1="644" y1="370" x2="1040" y2="370" stroke="${borderLight}" stroke-width="0.4"/>

<!-- Chart bars -->
<rect x="660" y="330" width="30" height="40" rx="4" fill="${border}" opacity="0.35"/>
<rect x="700" y="310" width="30" height="60" rx="4" fill="${border}" opacity="0.4"/>
<rect x="740" y="296" width="30" height="74" rx="4" fill="${border}" opacity="0.45"/>
<rect x="780" y="306" width="30" height="64" rx="4" fill="url(#bar)" opacity="0.5"/>
<rect x="820" y="280" width="30" height="90" rx="4" fill="url(#bar)" opacity="0.65"/>
<rect x="860" y="258" width="30" height="112" rx="4" fill="url(#bar)" opacity="0.8"/>
<rect x="900" y="230" width="30" height="140" rx="4" fill="url(#ag)"/>

<!-- Trend line -->
<polyline points="675,325 715,305 755,291 795,301 835,275 875,253 915,225" fill="none" stroke="${accent}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.45"/>
<circle cx="915" cy="225" r="5" fill="${accent}" opacity="0.15"/>
<circle cx="915" cy="225" r="3" fill="${accent}"/>

<!-- Month labels -->
<text x="675" y="388" text-anchor="middle" font-family="${f}" font-size="9" fill="${mutedLight}">Jan</text>
<text x="715" y="388" text-anchor="middle" font-family="${f}" font-size="9" fill="${mutedLight}">Feb</text>
<text x="755" y="388" text-anchor="middle" font-family="${f}" font-size="9" fill="${mutedLight}">Mar</text>
<text x="795" y="388" text-anchor="middle" font-family="${f}" font-size="9" fill="${mutedLight}">Apr</text>
<text x="835" y="388" text-anchor="middle" font-family="${f}" font-size="9" fill="${mutedLight}">May</text>
<text x="875" y="388" text-anchor="middle" font-family="${f}" font-size="9" fill="${mutedLight}">Jun</text>
<text x="915" y="388" text-anchor="middle" font-family="${f}" font-size="9" fill="${mutedLight}">Jul</text>

<!-- Chart label -->
<text x="970" y="200" font-family="${f}" font-size="10" font-weight="500" fill="${accent}" text-anchor="end">Organic traffic</text>

<!-- Sidebar stats -->
<rect x="960" y="250" width="146" height="44" rx="8" fill="${surface}" stroke="${borderLight}" stroke-width="0.4"/>
<circle cx="978" cy="272" r="5" fill="${accent}" opacity="0.15"/>
<circle cx="978" cy="272" r="2.5" fill="${accent}"/>
<text x="990" y="268" font-family="${f}" font-size="8" font-weight="bold" fill="${mutedLight}">KEYWORDS</text>
<text x="990" y="283" font-family="${f}" font-size="13" font-weight="bold" fill="${dark}">248 ranked</text>

<rect x="960" y="302" width="146" height="44" rx="8" fill="${surface}" stroke="${borderLight}" stroke-width="0.4"/>
<circle cx="978" cy="324" r="5" fill="${green}" opacity="0.15"/>
<circle cx="978" cy="324" r="2.5" fill="${green}"/>
<text x="990" y="320" font-family="${f}" font-size="8" font-weight="bold" fill="${mutedLight}">SEO SCORE</text>
<text x="990" y="335" font-family="${f}" font-size="13" font-weight="bold" fill="${dark}">92 / 100</text>

<rect x="960" y="354" width="146" height="44" rx="8" fill="${surface}" stroke="${borderLight}" stroke-width="0.4"/>
<circle cx="978" cy="376" r="5" fill="#8b5cf6" opacity="0.15"/>
<circle cx="978" cy="376" r="2.5" fill="#8b5cf6"/>
<text x="990" y="372" font-family="${f}" font-size="8" font-weight="bold" fill="${mutedLight}">ARTICLES</text>
<text x="990" y="387" font-family="${f}" font-size="13" font-weight="bold" fill="${dark}">12 published</text>

<!-- Content list section -->
<text x="644" y="424" font-family="${f}" font-size="10" font-weight="600" fill="${mutedLight}">Recent content</text>

<rect x="644" y="436" width="460" height="36" rx="7" fill="${surface}" stroke="${borderLight}" stroke-width="0.3"/>
<circle cx="662" cy="454" r="4" fill="${accent}" opacity="0.2"/>
<text x="676" y="458" font-family="${f}" font-size="11" font-weight="500" fill="${text}">How to Find Low Competition Keywords</text>
<text x="1068" y="458" font-family="${f}" font-size="10" font-weight="600" fill="${green}" text-anchor="end">92</text>

<rect x="644" y="478" width="460" height="36" rx="7" fill="${surface}" stroke="${borderLight}" stroke-width="0.3"/>
<circle cx="662" cy="496" r="4" fill="${accent}" opacity="0.2"/>
<text x="676" y="500" font-family="${f}" font-size="11" font-weight="500" fill="${text}">Content Optimization Guide for SEO</text>
<text x="1068" y="500" font-family="${f}" font-size="10" font-weight="600" fill="${green}" text-anchor="end">88</text>

<rect x="644" y="520" width="460" height="36" rx="7" fill="${surface}" stroke="${borderLight}" stroke-width="0.3"/>
<circle cx="662" cy="538" r="4" fill="${accent}" opacity="0.2"/>
<text x="676" y="542" font-family="${f}" font-size="11" font-weight="500" fill="${text}">Internal Linking Best Practices</text>
<text x="1068" y="542" font-family="${f}" font-size="10" font-weight="600" fill="${accent}" text-anchor="end">85</text>

</svg>`;

async function generate() {
  const buf = await sharp(Buffer.from(svg), { density: 150 })
    .resize(W, H, { fit: "fill" })
    .jpeg({ quality: 95 })
    .toBuffer();

  const out = join(__dirname, "..", "public", "linkedin-launch.jpg");
  writeFileSync(out, buf);

  const info = await sharp(buf).metadata();
  console.log(`File: public/linkedin-launch.jpg`);
  console.log(`Dimensions: ${info.width}x${info.height}`);
  console.log(`Size: ${(buf.length / 1024).toFixed(1)} KB`);

  if (info.width !== W || info.height !== H) {
    console.error(`ERROR: Expected ${W}x${H}`);
    process.exit(1);
  }
  console.log(`Verified: exact ${W}x${H}`);
}

generate().catch((e) => { console.error(e); process.exit(1); });
