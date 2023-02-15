import fetch from 'node-fetch'

export const handler = async (event, context) => { // event: custom headers,,,, context: info about context the function was called in
    console.log({ event }) // wrapped in {} to see object name when it returns
    // console.log({ context })
    const eventBody = JSON.parse(event.body)
    const POKE_API = 'https://pokeapi.co/api/v2/pokedex/' + eventBody.region

    const response = await fetch(POKE_API)
    const data = await response.json()

    console.log('poke handler ran')

    return {
        statusCode: 200, 
        body: JSON.stringify({ 
             pokemon: data.pokemon_entries[0]
        })
    }
}