import axios from 'axios'

export async function getCats() {
  console.log('Finding animals that match "cat"...')

  const headers = {
    'X-Api-Key': process.env.API_KEY
  }
  const params = {
    name: 'cat'
  }
  const options = {
    headers: headers,
    params: params
  }
  const animalApiResponse = await axios.get('https://api.api-ninjas.com/v1/animals', options)
  const animals = animalApiResponse.data

  if (animals.length === 0) {
    console.log('No matches found')
    return
  }

  console.log(`Found ${animals.length} matches:`)
  animals.forEach(animal => {
    console.log(animal.name)
  })
}