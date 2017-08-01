import React, { Component } from 'react';
import ItemListingContainer from '../../containers/ItemListingContainer';
import LeaderboardListingContainer from '../../containers/LeaderboardListingContainer';
import './App.css';
import ItemActions from '../../actions/ItemActions';
import LeaderboardActions from "../../actions/LeaderboardActions";

class App extends Component {

    componentDidMount() {
        ItemActions.fetchItems();
        LeaderboardActions.fetchLeaderboard();
    }

  render() {
    return (
        <div>
            <LeaderboardListingContainer />
            <ItemListingContainer />
        </div>
    );
  }
}

export default App;
