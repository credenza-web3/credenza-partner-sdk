import * as fs from 'fs'
import * as path from 'path'

// Define the directory you want to scan, e.g., 'dist'
const distDir = './dist';

// Initialize an empty exports object
let exportsUpd = {};

function generateExports(dir, exportPath) {
  if (/^lib/.test(exportPath)) return

  fs.readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
    const fullPath = path.join(dir, dirent.name);
    const relativePath = path.relative('.', fullPath);
    const exportKey = `./${exportPath}`;

    if (dirent.isDirectory()) {
      // Recurse into directories
      generateExports(fullPath, path.join(exportPath, dirent.name));
    } else if (dirent.isFile() && dirent.name === 'index.js') {
      // Only process `index.js` files
      exportsUpd[exportKey] = {
        "import": `./${relativePath}`,
        "require": `./${relativePath}`
      };
    }
  });
}
generateExports(distDir, '');

//console.log(exportsUpd)

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
packageJson.exports = exportsUpd;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf-8');

console.log('Exports field updated in package.json');
