const fetch = require('node-fetch');

exports.createRequest = async function ({ query, variables }) {
  try {
    const response = await fetch(process.env.HASURA_API_URL, {
      method: 'POST',
      headers: { 
        Accept: 'application/json',
        'X-Hasura-admin-secret': process.env.HASURA_ADMIN_SECRET
      },
      body: JSON.stringify({ query, variables }),
    })

    if (!response.ok) {
      return { 
        statusCode: response.status, 
        body: response.statusText 
      }
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    // output to netlify function log
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message }),
    }
  }
}
