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
  { search: /bg-white rounded-/g, replace: 'bg-bg-secondary rounded-' },
  { search: /bg-white p-/g, replace: 'bg-bg-secondary p-' },
  { search: /bg-white border-/g, replace: 'bg-bg-secondary border-' },
  { search: /bg-white shadow-/g, replace: 'bg-bg-secondary shadow-' },
  { search: /bg-white font-medium/g, replace: 'bg-bg-secondary font-medium' },
  { search: /bg-white text-body/g, replace: 'bg-bg-secondary text-body' },
  { search: /bg-white hover:bg-bg-accent-section/g, replace: 'bg-bg-secondary hover:bg-bg-accent-section' }
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
    console.log(`Converted white backgrounds to bg-bg-secondary in: ${path.relative(process.cwd(), filePath)}`);
  }
});
