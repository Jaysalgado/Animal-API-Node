import * as call from './apiCall.js';

export function getCats() {
  let consoled = 0;
  let cats = ['tiger', 'jaguar', 'lion'];
  //call api on array of different cats for more data
  cats.map(async (i) => {
    let animals = await call.api('name', i, 'animals');
    if (animals.length === 0) {
      console.log('No matches found');
      return;
    }
    //filter for only cats
    animals = animals.filter((animal) => animal.taxonomy.family === 'Felidae');
    if (consoled === 0) {
      console.log('Finding animals that match "cat"...');
      consoled = 1;
    }
    console.log(`Found ${animals.length} ${i}'s:`);
    animals.forEach((animal) => {
      console.log(animal.name);
    });
  });
}
