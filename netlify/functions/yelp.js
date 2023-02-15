import fetch from 'node-fetch'

export const handler = async () => {

    console.log('yelp handler ran')

    const location = 95008
    const category = 'restaurants'

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

    const data = await response.json()
    // console.log(data)

    return {
        statusCode: 200, 
        body: JSON.stringify(data.businesses[0].alias) //function response must be a string per netlify
    }
}


// fetch('https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));