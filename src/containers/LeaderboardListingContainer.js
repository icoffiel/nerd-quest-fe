import { Container } from 'flux/utils';
import LeaderboardListing from '../components/leaderboard-listing/LeaderboardListing';
import LeaderboardStore from '../stores/LeaderboardStore';

function getStores() {
    return [
        LeaderboardStore,
    ];
}

function getState() {
    return {
        leaders: LeaderboardStore.getState(),
    };
}

export default Container.createFunctional(LeaderboardListing, getStores, getState);