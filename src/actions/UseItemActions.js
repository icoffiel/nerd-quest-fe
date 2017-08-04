import ActionTypes from '../constants/ActionTypes';
import Dispatcher from '../components/dispatcher/Dispatcher';
import 'whatwg-fetch';

const UseItemActions = {
    useItem(itemKey, target) {
        console.log('fetchItems');
        Dispatcher.dispatch({
            type: ActionTypes.USE_ITEM_USE
        });

        fetch(`/api/items/${itemKey}?target=${target}`, {
            method: 'POST'
        })
            .then(parseJson)
            .then(data => {
                console.log('request succeeded', data);
                Dispatcher.dispatch({
                    type: ActionTypes.USE_ITEM_RESPONSE,
                    message: data,
                    itemKey: itemKey,
                });
            });
    },
};

function parseJson(response) {
    return response.json();
}

export default UseItemActions;