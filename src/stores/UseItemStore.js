import {ReduceStore} from "flux/utils";
import Dispatcher from "../components/dispatcher/Dispatcher";
import ActionTypes from "../constants/ActionTypes";

class UseItemStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return {
            item: {
                iSelected: false,
                row: {
                    Name: ''
                },
            },
            leader: {
                isSelected: false,
                row: {
                    PlayerName: ''
                }
            }
        };
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.ITEM_SELECT_ITEM:
                return {
                    item: action.state,
                };
            case ActionTypes.LEADERBOARD_SELECT_LEADER:
                return {
                    leader: action.state,
                };
            case ActionTypes.USE_ITEM_RESPONSE:
                return {
                    item: {
                        isSelected: false,
                        row: {
                            Name: ''
                        }
                    }
                };
            default:
                return state;
        }
    }
}

export default new UseItemStore();