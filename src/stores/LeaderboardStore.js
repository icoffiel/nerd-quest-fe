import {ReduceStore} from 'flux/utils';
import Dispatcher from '../components/dispatcher/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import LeaderboardActions from "../actions/LeaderboardActions";

class LeaderboardStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
        poller();
    }

    getInitialState() {
        return [];
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.LEADERBOARD_RECEIVE_LEADERS:
                return action.leaders;
            default:
                return state;
        }
    }
}

function poller() {
    setTimeout(() => {
        LeaderboardActions.fetchLeaderboard();
        poller();
    }, 3000);
}

export default new LeaderboardStore();