import { SITE_URL } from '../Constants';

const getAccessToken = async () => {
    // Auth0 API credentials

    const tokenUrl = `${SITE_URL}/wp-json/an/auth0/generate-token`;

    const tokenResponse = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    });

    if (!tokenResponse.ok) {
        console.error('Failed to fetch access token:', tokenResponse.statusText);
        return null;
    }

    try {
        const tokenData = await tokenResponse.json();
        // console.log('Access Token Data:', tokenData);

        if (tokenData && tokenData.data.access_token) {
            return tokenData.data.access_token;
        } else {
            console.error('Access token not found in response');
            return null;
        }
    } catch (error) {
        console.error('Error parsing token response:', error);
        return null;
    }

};

export default getAccessToken;
