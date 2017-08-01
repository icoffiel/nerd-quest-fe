import {ReduceStore} from 'flux/utils';
import Dispatcher from '../components/dispatcher/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

class ItemStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return [];
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.ITEM_RECEIVE_ITEMS:
                return action.items;
            default:
                return state;
        }
    }
}

export default new ItemStore();