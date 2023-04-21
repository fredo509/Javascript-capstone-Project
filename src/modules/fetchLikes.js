const involvementApiBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const fetchLikes = async (appId) => {
  try {
    const response = await fetch(`${involvementApiBaseURL}/apps/${appId}/likes`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const likesData = await response.json();
    return likesData;
  } catch (error) {
    return [];
  }
};

export default fetchLikes;
