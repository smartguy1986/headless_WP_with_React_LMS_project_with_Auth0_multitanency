import { SITE_URL } from '../Constants'

const createUser = async (props) => {
    console.log('Form data ===== ' + JSON.stringify(props))
    const userCreateURL = `${SITE_URL}/wp-json/an/auth0/createnewuser`;
    
    const userResponse = await fetch(userCreateURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(props)
    });

    if (!userResponse.ok) {
        console.error('Failed to create user:', userResponse.statusText);
        return null;
    }

    try {
        const userData = await userResponse.json();
        // console.log('Access Token Data:', tokenData);

        if (userData) {
            return userData;
        } else {
            console.error('User Data not found in response');
            return null;
        }
    } catch (error) {
        console.error('Error parsing token response:', error);
        return null;
    }
}

export default createUser;