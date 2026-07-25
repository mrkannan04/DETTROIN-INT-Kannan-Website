import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else if (f.endsWith('.jsx') || f.endsWith('.js')) {
      callback(dirPath);
    }
  });
}

const replacements = [
  { search: /bg-\[\#F7F9FC\]/g, replace: 'bg-bg-primary' },
  { search: /bg-slate-50/g, replace: 'bg-bg-accent-section' },
  { search: /bg-slate-100/g, replace: 'bg-bg-accent-section' },
  { search: /bg-gray-50/g, replace: 'bg-bg-accent-section' },
  { search: /bg-gray-100/g, replace: 'bg-bg-accent-section' },
  { search: /border-slate-200/g, replace: 'border-border-hairline' },
  { search: /border-slate-300/g, replace: 'border-border-hairline' },
  { search: /border-gray-200/g, replace: 'border-border-hairline' },
  { search: /border-gray-300/g, replace: 'border-border-hairline' },
  { search: /text-slate-800/g, replace: 'text-navy-deep' },
  { search: /text-slate-700/g, replace: 'text-body' },
  { search: /text-slate-600/g, replace: 'text-text-body' },
  { search: /text-slate-500/g, replace: 'text-navy-muted' },
  { search: /text-gray-800/g, replace: 'text-navy-deep' },
  { search: /text-gray-700/g, replace: 'text-body' },
  { search: /text-gray-600/g, replace: 'text-text-body' },
  { search: /text-gray-500/g, replace: 'text-navy-muted' },
];

const srcDir = path.join(process.cwd(), 'src');

walkDir(srcDir, (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  replacements.forEach(({ search, replace }) => {
    content = content.replace(search, replace);
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated theme tokens in: ${path.relative(process.cwd(), filePath)}`);
  }
});
