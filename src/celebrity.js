import * as call from './apiCall.js';

export async function getCelebs() {
  let celebs = await call.api('min_net_worth', '100000000', 'celebrity');
  if (celebs.length === 0) {
    console.log('No matches found');
    return;
  }
  console.log('Finding celebs with a minimum networth of 100 million...');
  console.log(`Found ${celebs.length} filthy rich celebs:`);
  celebs.forEach((celeb) => {
    console.log(celeb.name);
  });
}
