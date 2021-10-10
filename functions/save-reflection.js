const { handleRequest } = require('./utils/handleRequest');

const handler = (event) => {
  const { keywords, text, title } = JSON.parse(event.body);

  return handleRequest({
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
      reflection: {
        keywords,
        text,
        title,
        "user_id": "1"   
      }
    }
});
}

module.exports = { handler }
