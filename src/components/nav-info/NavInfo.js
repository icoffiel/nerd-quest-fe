import React from 'react';
import {Nav, Navbar} from "react-bootstrap";

function NavInfo(props) {
    console.log('NavbarInfo Props', props);
    const profile = props.profile;

    return (
        <Nav pullRight>
            <Navbar.Text>Points: {profile.Points}</Navbar.Text>
            <Navbar.Text>Class: {profile.ClassName}, Level {profile.ClassLevel}</Navbar.Text>
        </Nav>
    );
}

export default NavInfo;