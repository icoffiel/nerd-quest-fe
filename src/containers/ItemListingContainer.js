import ItemStore from '../stores/ItemStore';
import { Container } from 'flux/utils';
import ItemListing from '../components/item-listing/ItemListing';

function getStores() {
    return [
        ItemStore,
    ]
}

function getState() {
    return {
        items: ItemStore.getState(),
    };
}

export default Container.createFunctional(ItemListing, getStores, getState);