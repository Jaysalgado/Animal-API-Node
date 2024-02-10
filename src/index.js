import 'dotenv/config';
import * as animal from './animal.js';
import * as celebrity from './celebrity.js';

async function main() {
  await celebrity.getCelebs();
  animal.getCats();
}

main();
