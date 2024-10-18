import * as fs from 'fs'
import * as path from 'path'

const DIST_DIR = './dist';

const exportsUpd = {};
function generateExports(dir, exportPath) {
  if (/^lib/.test(exportPath)) return

  fs.readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
    const fullPath = path.join(dir, dirent.name);
    const relativePath = path.relative('.', fullPath);
    const exportKey = exportPath ? `./${exportPath}` : '.';

    if (dirent.isDirectory()) {
      generateExports(fullPath, path.join(exportPath, dirent.name));
    } else if (dirent.isFile() && dirent.name === 'index.js') {
      exportsUpd[exportKey] = {
        "import": `./${relativePath}`,
        "require": `./${relativePath}`,
        "types": `./${relativePath.replace('.js', '.d.ts')}`,
      };
    }
  });
}
generateExports(DIST_DIR, '');

const sortedExports = Object.keys(exportsUpd)
  .sort((a, b) => b.split('/').length - a.split('/').length) // Sort by depth, deeper paths first
  .reduce((acc, key) => {
    acc[key] = exportsUpd[key];
    return acc;
  }, {});

const packageJsonPath = './package.json'
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
packageJson.exports = sortedExports;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf-8');

console.log('Exports field updated in package.json');
