import fetch from 'node-fetch'

export const handler = async (event, context) => {

    console.log('yelp handler ran')

    console.log({ event })
    const eventBody = JSON.parse(event.body)

    const location = eventBody.zipCode
    const category = eventBody.category


    const url = `https://api.yelp.com/v3/businesses/search?location=${location}&term=${category}&radius=2000&sort_by=best_match&limit=5`

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.YELP_API_KEY}`
        }
    };

    const response = await fetch(url, options);

    // console.log('rspnse', await response.json())

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    // console.log(data)

    return {
        statusCode: 200, 
        body: JSON.stringify(data.businesses[0].id) //function response must be a string per netlify
    }
}


// fetch('https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));