const { handleRequest } = require('./utils/handleRequest');

const handler = () => handleRequest({
    query: `query fetch_all_reflections_for_user($userId: String!) {
      reflections(where: {user_id: {_eq: $userId}}) {
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
      userId: "1"
    }
});

module.exports = { handler }
