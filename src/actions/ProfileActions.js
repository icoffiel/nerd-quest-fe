import Dispatcher from '../components/dispatcher/Dispatcher';
import ActionTypes from '../constants/ActionTypes'

const ProfileActions = {
    fetchProfile() {
        console.log('fetching profile');
        Dispatcher.dispatch({
            type: ActionTypes.PROFILE_FETCH_PROFILE
        });

        fetch('/api/points')
            .then(parseJson)
            .then(data => {
                console.log('request succeeded', data);
                Dispatcher.dispatch({
                    type: ActionTypes.PROFILE_RECCEIVE_PROFILE,
                    profile: data
                })
            })
    }
};

function parseJson(response) {
    return response.json();
}

export default ProfileActions;