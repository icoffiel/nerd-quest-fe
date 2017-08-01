import { ReduceStore } from 'flux/utils';
import Immutable from 'immutable';

class ItemStore extends ReduceStore {
    getInitialState() {
        return [];
    }

    reduce(state, action) {
        switch (action.type) {
            default:
                return state;
        }
    }
}

export default ItemStore;