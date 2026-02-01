
import { articles } from "../src/data/articles";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_PATH = path.resolve(__dirname, "../dist");
const ARTICLES_PATH = path.join(DIST_PATH, "garden/article");

function escapeHtml(unsafe: string) {
    if (!unsafe) return "";
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

async function generateMetaFiles() {
    console.log("🚀 Starting OG Tag Generation for Articles...");

    // Check if dist exists
    if (!fs.existsSync(DIST_PATH)) {
        console.error("❌ Error: 'dist' directory not found. Run 'npm run build' first.");
        process.exit(1);
    }

    // Read the main index.html template from dist
    const templatePath = path.join(DIST_PATH, "index.html");
    if (!fs.existsSync(templatePath)) {
        console.error("❌ Error: dist/index.html not found.");
        process.exit(1);
    }

    let template = fs.readFileSync(templatePath, "utf-8");

    // Ensure directory exists
    if (!fs.existsSync(ARTICLES_PATH)) {
        fs.mkdirSync(ARTICLES_PATH, { recursive: true });
    }

    let count = 0;

    for (const article of articles) {
        const articleSlug = article.slug;
        const articleDir = path.join(ARTICLES_PATH, articleSlug);

        // Ensure slug directory exists
        if (!fs.existsSync(articleDir)) {
            fs.mkdirSync(articleDir, { recursive: true });
        }

        // Prepare Meta Data
        const title = escapeHtml(article.title + " | IEAM");
        const description = escapeHtml(article.subtitle || article.content.substring(0, 150) + "...");
        const image = escapeHtml(article.heroImage || article.mainImage || "https://www.ieam.es/logo-og.png");
        const url = `https://www.ieam.es/garden/article/${articleSlug}`;

        // Replace Meta Tags in Template
        // We use a regex based replacement or simple string replacement if we know the placeholders.
        // Since we already added default tags, we will REPLACE them.

        let articleHtml = template;

        // Replace Title
        articleHtml = articleHtml.replace(
            /<title>.*?<\/title>/,
            `<title>${title}</title>`
        );

        // Replace OG Title
        articleHtml = articleHtml.replace(
            /<meta property="og:title" content=".*?" \/>/,
            `<meta property="og:title" content="${title}" />`
        );

        // Replace OG Description
        articleHtml = articleHtml.replace(
            /<meta property="og:description"[\s\S]*?\/>/,
            `<meta property="og:description" content="${description}" />`
        );

        // Replace OG Image
        // Handle relative paths for images by prepending domain if needed
        const fullImage = image.startsWith("http") ? image : `https://www.ieam.es${image}`;
        articleHtml = articleHtml.replace(
            /<meta property="og:image" content=".*?" \/>/,
            `<meta property="og:image" content="${fullImage}" />`
        );

        // Replace OG URL
        articleHtml = articleHtml.replace(
            /<meta property="og:url" content=".*?" \/>/,
            `<meta property="og:url" content="${url}" />`
        );

        // Add Twitter Cards specifically if missing (although og covers most)
        // Note: The template already has twitter:user generic, but we could enhance if needed.
        // For now, relying on the OG tags which Twitter respects.

        // Write the file
        fs.writeFileSync(path.join(articleDir, "index.html"), articleHtml);
        console.log(`✅ Generated meta tags for: ${articleSlug}`);
        count++;
    }

    console.log(`✨ Successfully generated ${count} article meta files.`);
}

generateMetaFiles();
