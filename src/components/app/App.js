import React, { Component } from 'react';
import './App.css';

import ItemListingContainer from '../../containers/ItemListingContainer';
import LeaderboardListingContainer from '../../containers/LeaderboardListingContainer';

import ItemActions from '../../actions/ItemActions';
import LeaderboardActions from "../../actions/LeaderboardActions";

import {Col, Grid, Nav, Navbar, Row} from "react-bootstrap";
import UseItemContainer from "../../containers/UseItemContainer";

class App extends Component {

    componentDidMount() {
        ItemActions.fetchItems();
        LeaderboardActions.fetchLeaderboard();
    }

  render() {
    return (
        <div>
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Nerd Quest</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                </Nav>
            </Navbar>
            <Grid>
                <Row>
                    <Col md={12}>
                        <UseItemContainer />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <LeaderboardListingContainer />
                    </Col>
                    <Col md={8}>
                        <ItemListingContainer />
                    </Col>
                </Row>
            </Grid>
        </div>
    );
  }
}

export default App;
