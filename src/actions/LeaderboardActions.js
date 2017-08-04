import Dispatcher from '../components/dispatcher/Dispatcher';
import ActionTypes from "../constants/ActionTypes";

const LeaderboardActions = {
    fetchLeaderboard() {
        console.log('fetchLeaderboard');
        Dispatcher.dispatch({
            type: ActionTypes.LEADERBOARD_FETCH_LEADERS,
        });

        fetch('/api/leaderboard')
            .then(parseJson)
            .then(data => {
                console.log('request succeeded', data);
                Dispatcher.dispatch({ type: ActionTypes.LEADERBOARD_RECEIVE_LEADERS, leaders: data });
            });
    },

    selectLeader(state) {
        console.log('select leader', state);
        Dispatcher.dispatch({
            type: ActionTypes.LEADERBOARD_SELECT_LEADER,
            state: state,
        });
    },
};

function parseJson(response) {
    return response.json();
}

export default LeaderboardActions;