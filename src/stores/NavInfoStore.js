import {ReduceStore} from "flux/utils";
import Dispatcher from "../components/dispatcher/Dispatcher";
import ProfileActions from "../actions/ProfileActions";
import ActionTypes from "../constants/ActionTypes";

class NavInfoStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
        poller(); // TODO - Move into component under componentDidMount?
    }

    getInitialState() {
        return {
            profile: {
                Points: 'Loading...',
                ClassName: 'Loading...',
                ClassLevel: 'Loading...'
            }
        };
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.PROFILE_RECCEIVE_PROFILE:
                return action;
            default:
                return state;
        }
    }
}

function poller() {
    setTimeout(() => {
        ProfileActions.fetchProfile();
        poller();
    }, 3000);
}

export default new NavInfoStore();