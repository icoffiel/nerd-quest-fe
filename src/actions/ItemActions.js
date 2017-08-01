import ActionTypes from '../constants/ActionTypes';
import Dispatcher from '../components/dispatcher/Dispatcher';
import 'whatwg-fetch';

const ItemActions = {
    fetchItems() {
        console.log('fetchItems');
        Dispatcher.dispatch({
            type: ActionTypes.ITEM_FETCH_ITEMS
        });

        fetch('/api/items')
            .then(parseJson)
            .then(data => {
                console.log('request succeeded', data);
                Dispatcher.dispatch({ type: ActionTypes.ITEM_RECEIVE_ITEMS, items: data });
            });
    },
};

function parseJson(response) {
    return response.json();
}

export default ItemActions;