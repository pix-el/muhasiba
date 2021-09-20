const { createRequest } = require('./utils/createRequest');

const handler = async function () {
  try {
    const data = await createRequest({
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
        "userId": "1"
      }
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: data }),
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }
