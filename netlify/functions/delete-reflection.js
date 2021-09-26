const { handleRequest } = require('./utils/handleRequest');

const handler = (event) => {
  const { id } = JSON.parse(event.body);

  return handleRequest({
    query: `mutation delete_reflection($id: uuid!) {
      delete_reflections_by_pk(id: $id) {
        id
      }
    }       
    `,
    variables: {
      id,
    }
});
}

module.exports = { handler }
