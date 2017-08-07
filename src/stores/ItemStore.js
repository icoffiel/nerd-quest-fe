import {ReduceStore} from 'flux/utils';
import Dispatcher from '../components/dispatcher/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import ItemActions from "../actions/ItemActions";

class ItemStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
        poller();
    }

    getInitialState() {
        return [];
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.ITEM_RECEIVE_ITEMS:
                return action.items;
            case ActionTypes.USE_ITEM_RESPONSE:
                return state.filter(item => item.key !== action.itemKey);
            default:
                return state;
        }
    }
}

function poller() {
    setTimeout(() => {
        ItemActions.fetchItems();
        poller();
    }, 20000);
}

export default new ItemStore();