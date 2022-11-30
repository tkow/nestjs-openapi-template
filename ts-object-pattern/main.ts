import * as jsYaml from 'js-yaml';
import * as fs from 'fs';
import * as path from 'path';
import { ApiDocument } from './yaml';

async function main() {
  fs.writeFileSync(
    path.resolve(process.cwd(), 'api-v1-from-ts-obj.yaml'),
    jsYaml.dump(ApiDocument),
  );
}

main();
