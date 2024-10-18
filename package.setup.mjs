import * as fs from 'fs'
import * as path from 'path'

const DIST_DIR = './dist';

let exportsUpd = {};
function generateExports(dir, exportPath) {
  if (/^lib/.test(exportPath)) return

  fs.readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
    const fullPath = path.join(dir, dirent.name);
    const relativePath = path.relative('.', fullPath);
    const exportKey = `./${exportPath}`;

    if (dirent.isDirectory()) {
      generateExports(fullPath, path.join(exportPath, dirent.name));
    } else if (dirent.isFile() && dirent.name === 'index.js') {
      exportsUpd[exportKey] = {
        "import": `./${relativePath}`,
        "require": `./${relativePath}`
      };
    }
  });
}
generateExports(DIST_DIR, '');

//console.log(exportsUpd)

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
packageJson.exports = exportsUpd;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf-8');

console.log('Exports field updated in package.json');
