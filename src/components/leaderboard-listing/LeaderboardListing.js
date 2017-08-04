import React from 'react';
import {Table} from "react-bootstrap";

function LeaderboardListing(props) {
    return (
        <LeaderboardTable leaders={props.leaders}/>
    )
}

function LeaderboardTable(props) {
    const leaders = props.leaders;
    return (
        <Table condensed>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Avatar</th>
                    <th>Points</th>
                    <th>Title</th>
                    {/*<th>Effects</th>*/}
                    {/*<th>Badges</th>*/}
                </tr>
            </thead>
            <tbody>
                {leaders.map(leader => (
                    <LeaderboardRow
                        key={leader.PlayerName}
                        value={leader}
                    />
                ))}
            </tbody>
        </Table>
    );
}

function LeaderboardRow(props) {
    const leader = props.value;
    return (
        <tr>
            <td>{leader.PlayerName}</td>
            <td><img height="50" width="50" src={leader.AvatarUrl} /></td>
            <td>{leader.Points}</td>
            <td>{leader.Title}</td>
            {/*<td>{leader.Effects}</td>*/}
            {/*<td>{leader.Badges}</td>*/}
        </tr>
    )
}

export default LeaderboardListing;