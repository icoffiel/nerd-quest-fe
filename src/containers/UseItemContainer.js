import UseItemStore from "../stores/UseItemStore";
import { Container } from "flux/utils";
import UseItem from "../components/use-item/UseItem";

function getStores() {
    return [
        UseItemStore
    ]
}

function getState() {
    return UseItemStore.getState();
}

export default Container.createFunctional(UseItem, getStores, getState);