import ActionTypes from '../constants/ActionTypes';
import Dispatcher from '../components/dispatcher/Dispatcher';
import 'whatwg-fetch';

const ItemActions = {
    fetchItems() {
        Dispatcher.dispatch({
            type: ActionTypes.ITEM_FETCH_ITEMS
        });

        fetch('/api/items')
            .then(parseJson)
            .then(data => {
                Dispatcher.dispatch({ type: ActionTypes.ITEM_RECEIVE_ITEMS, items: data });
            });
    },

    selectItem(state) {
        console.log('select item', state);
        Dispatcher.dispatch({
            type: ActionTypes.ITEM_SELECT_ITEM,
            state: state,
        })
    }
};

function parseJson(response) {
    return response.json();
}

export default ItemActions;