import { Container } from "flux/utils";
import NavInfo from "../components/nav-info/NavInfo";
import NavInfoStore from "../stores/NavInfoStore";

function getStores() {
    return [
        NavInfoStore
    ]
}

function getState() {
    return NavInfoStore.getState();
}

export default Container.createFunctional(NavInfo, getStores, getState);