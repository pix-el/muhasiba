const fetch = require('node-fetch');

exports.makeHasuraRequest = ({ query, variables }) => function () {
  return fetch(process.env.HASURA_API_URL, {
    method: 'POST',
    headers: { 
      Accept: 'application/json',
      'X-Hasura-admin-secret': process.env.HASURA_ADMIN_SECRET
    },
    body: JSON.stringify({ query, variables }),
  });
}
