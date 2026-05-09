// ── BailBridge Document Engine — Entry Point ─────────────────────────────────────
// Run:  node index.js                   → generate all 4 documents
//       node index.js bail-application  → generate one document by ID
//
// Output: PDF files written to ./output/

import fs from 'fs';
import path from 'path';
import { generateBailApplication } from './generators/bail-application.js';
import { generateFIRRequest }       from './generators/fir-request.js';
import { generateDLSAApplication }  from './generators/dlsa-application.js';
import { generateMemoOfProtest }    from './generators/memo-of-protest.js';

const GENERATORS = {
  'bail-application': { fn: generateBailApplication, label: 'Bail Application (BNSS Sec 480)' },
  'fir-request':      { fn: generateFIRRequest,       label: 'FIR Copy Request' },
  'dlsa-application': { fn: generateDLSAApplication,  label: 'DLSA Legal Aid Application' },
  'memo-of-protest':  { fn: generateMemoOfProtest,    label: 'Memorandum of Protest (D.K. Basu)' },
};

const OUTPUT_DIR = './output';
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);

const target = process.argv[2];
const toRun  = target ? { [target]: GENERATORS[target] } : GENERATORS;

if (target && !GENERATORS[target]) {
  console.error(`Unknown document: "${target}"`);
  console.error('Available:', Object.keys(GENERATORS).join(', '));
  process.exit(1);
}

console.log('BailBridge Document Engine\n');

for (const [id, { fn, label }] of Object.entries(toRun)) {
  process.stdout.write(`  Generating: ${label}...`);
  const { bytes, filename } = fn('en');
  const outPath = path.join(OUTPUT_DIR, filename);
  fs.writeFileSync(outPath, bytes);
  console.log(` ✓  ${filename}`);
}

console.log(`\nOutput written to: ${path.resolve(OUTPUT_DIR)}`);
