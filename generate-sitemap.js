const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const path = require('path');

// بيانات الـ slugs
const serviceSlugs = [
  'web-development',
  'app-development',
  'tailored-software-solutions',
  'project-analysis'
];

const projectSlugs = [
  'msader',
  'academian',
  'clickluck',
  'tildemadrid',
  'academiaarabe',
  'formacionanapat',
  'damaskus-restaurant',
  'semastore',
  'p3ly'
];

// رابط الموقع الأساسي
const baseUrl = 'https://t-coda.com';

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: baseUrl });

  // روابط أساسية
  sitemap.write({ url: '/', changefreq: 'monthly', priority: 1.0 });
  sitemap.write({ url: '/services', changefreq: 'monthly', priority: 0.9 });
  sitemap.write({ url: '/projects', changefreq: 'monthly', priority: 0.9 });
  sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.9 });
  sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.9 });

  // روابط الخدمات
  serviceSlugs.forEach(slug => {
    sitemap.write({ url: `/services/details/${slug}`, changefreq: 'monthly', priority: 0.7 });
  });

  // روابط المشاريع
  projectSlugs.forEach(slug => {
    sitemap.write({ url: `/projects/details/${slug}`, changefreq: 'monthly', priority: 0.8 });
  });

  sitemap.end();

  const xml = await streamToPromise(sitemap).then(data => data.toString());

  // حفظ الملف في public حتى يُنسخ تلقائياً عند build
  fs.writeFileSync(path.resolve(__dirname, './dist/sitemap.xml'), xml);
  console.log('✅ sitemap.xml created');
}

generateSitemap();
