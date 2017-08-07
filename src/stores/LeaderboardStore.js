import {ReduceStore} from 'flux/utils';
import Dispatcher from '../components/dispatcher/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

class LeaderboardStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
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

export default new LeaderboardStore();