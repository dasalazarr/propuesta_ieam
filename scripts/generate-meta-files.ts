
import { articles } from "../src/data/articles";
import { events } from "../src/data/events";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_PATH = path.resolve(__dirname, "../dist");
const BASE_URL = "https://ieam.es";

function escapeHtml(unsafe: string) {
    if (!unsafe) return "";
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function processItems(items: any[], baseOutPath: string, urlPrefix: string, template: string) {
    let count = 0;
    const fullOutPath = path.join(DIST_PATH, baseOutPath);

    if (!fs.existsSync(fullOutPath)) {
        fs.mkdirSync(fullOutPath, { recursive: true });
    }

    for (const item of items) {
        const slug = item.slug;
        const itemDir = path.join(fullOutPath, slug);

        if (!fs.existsSync(itemDir)) {
            fs.mkdirSync(itemDir, { recursive: true });
        }

        const title = escapeHtml(item.title + " | IEAM");
        const description = escapeHtml(item.subtitle || item.summary || (item.content ? item.content.substring(0, 150) + "..." : "IEAM - Instituto Español de Análisis Migratorio"));
        const image = escapeHtml(item.heroImage || item.mainImage || "/ieam-logo-new.png");
        const url = `${BASE_URL}/${urlPrefix}/${slug}`;

        let html = template;

        // Replace basic meta tags
        html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
        html = html.replace(/<meta property="og:title"[\s\S]*?\/>/, `<meta property="og:title" content="${title}" />`);
        html = html.replace(/<meta property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${description}" />`);

        const fullImage = image.startsWith("http") ? image : `${BASE_URL}${image}`;
        html = html.replace(/<meta property="og:image"[\s\S]*?\/>/, `<meta property="og:image" content="${fullImage}" />`);
        html = html.replace(/<meta property="og:url"[\s\S]*?\/>/, `<meta property="og:url" content="${url}" />`);
        html = html.replace(/<meta property="og:type"[\s\S]*?\/>/, `<meta property="og:type" content="article" />`);

        // Add comprehensive image and Twitter tags before </head>
        const additionalTags = `
  <meta property="og:image:secure_url" content="${fullImage}" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${title}" />
  <meta property="og:site_name" content="IEAM" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${fullImage}" />
  <meta name="twitter:image:alt" content="${title}" />
</head>`;

        // Remove existing og:image:secure_url and related tags if they exist, then add the new comprehensive set
        html = html.replace(/<meta property="og:image:secure_url"[\s\S]*?<\/head>/, additionalTags);
        if (!html.includes('og:image:secure_url')) {
            html = html.replace(/<\/head>/, additionalTags);
        }

        fs.writeFileSync(path.join(itemDir, "index.html"), html);
        count++;
    }
    return count;
}

async function generateMetaFiles() {
    console.log("🚀 Starting OG Tag Generation...");

    if (!fs.existsSync(DIST_PATH)) {
        console.error("❌ Error: 'dist' directory not found. Run 'npm run build' first.");
        process.exit(1);
    }

    const templatePath = path.join(DIST_PATH, "index.html");
    if (!fs.existsSync(templatePath)) {
        console.error("❌ Error: dist/index.html not found.");
        process.exit(1);
    }

    const template = fs.readFileSync(templatePath, "utf-8");

    const articleCount = processItems(articles, "garden/article", "garden/article", template);
    console.log(`✅ Generated meta tags for ${articleCount} articles.`);

    const eventCount = processItems(events, "eventos", "eventos", template);
    console.log(`✅ Generated meta tags for ${eventCount} events.`);

    console.log(`✨ Successfully generated ${articleCount + eventCount} meta files.`);
}

generateMetaFiles();

