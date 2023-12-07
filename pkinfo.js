import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let pkInfo;
try {
  const packageJson = fs.readFileSync(`${__dirname}/package.json`, 'utf8');
  pkInfo = JSON.parse(packageJson);
} catch (error) {
  // If there's an error reading the file, assign a random string to pkInfo
  pkInfo = {
    name: 'default-package-name',
    version: '0.0.0',
    homepage: 'http://default-homepage.com'
  };
}

export { pkInfo };
export const _PARSER_SIG = `${pkInfo.name}@${pkInfo.version} [${pkInfo.homepage}]`;