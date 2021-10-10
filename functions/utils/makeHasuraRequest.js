const fetch = require('node-fetch');

exports.makeHasuraRequest = ({ query, variables }) => {
  return fetch(process.env.HASURA_GRAPHQL_API_URL, {
    method: 'POST',
    headers: { 
      Accept: 'application/json',
      'X-Hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
      'X-Hasura-role': process.env.HASURA_USER_ROLE,
      'X-Hasura-user-id': process.env.HASURA_USER_ID,
    },
    body: JSON.stringify({ query, variables }),
  });
}
