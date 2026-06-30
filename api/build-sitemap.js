const fs = require('fs');
const path = require('path');

function listHtmlFiles(dir, baseUrl = 'https://educacioneverest.com', files = []) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (item.name.startsWith('.') || item.name === 'node_modules' || item.name === 'api') continue;
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      listHtmlFiles(fullPath, baseUrl, files);
    } else if (item.name.endsWith('.html')) {
      const rel = path.relative('.', fullPath).replace(/\\/g, '/');
      const url = baseUrl + '/' + rel;
      const priority = rel === 'index.html' ? '1.0' : rel.includes('index.html') ? '0.7' : '0.8';
      files.push({ url, priority, lastmod: '2026-06-10' });
    }
  }
  return files;
}

const files = listHtmlFiles('.');
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
xml += files.map(f => `  <url><loc>${f.url}</loc><lastmod>${f.lastmod}</lastmod><priority>${f.priority}</priority><changefreq>monthly</changefreq></url>`).join('\n');
xml += '\n</urlset>';
fs.writeFileSync('sitemap.xml', xml);
console.log('OK sitemap.xml with ' + files.length + ' URLs');
