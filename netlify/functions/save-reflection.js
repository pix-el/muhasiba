const { handleRequest } = require('./utils/handleRequest');
const { makeHasuraRequest } = require('./utils/makeHasuraRequest');

const handler = handleRequest(
  makeHasuraRequest({
    query: `mutation create_reflection($reflection: reflections_insert_input!) {
      insert_reflections_one(object: $reflection) {
        created_at
        id
        keywords
        text
        title
        user_id
      }
    }    
    `,
    variables: {
      "reflection": {
        "keywords": "general",
        "text": "This one needs to be deleted",
        "title": "TBD",
        "user_id": "1"   
      }
    }
  })
);

module.exports = { handler }
