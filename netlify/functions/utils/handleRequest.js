exports.handleRequest = (processingFunc) => async function () {
  try {
    const response = await processingFunc();

    if (!response.ok) {
      return { 
        statusCode: response.status, 
        body: response.statusText 
      }
    }
    const { data } = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify({ data }),
        headers: {
            "access-control-allow-origin": "http://localhost:3000"
        }
      }
  } catch (error) {
    // output to netlify function log
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message }),
    }
  }
}
