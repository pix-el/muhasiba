const { handleRequest } = require('./utils/handleRequest');

const handler = (event) => {
  const { id, keywords, text, title } = JSON.parse(event.body);

  return handleRequest({
    query: `mutation update_reflection($primaryKey: reflections_pk_columns_input!, $reflection: reflections_set_input!) {
      update_reflections_by_pk(pk_columns: $primaryKey, _set: $reflection) {
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
      "primaryKey": {
        id,
      },
      "reflection": {
       keywords,
       title,
       text,
        "user_id": "1"   
      }
    }
});
}

module.exports = { handler }
