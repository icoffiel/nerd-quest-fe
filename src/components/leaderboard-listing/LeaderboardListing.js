import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import LeaderboardActions from '../../actions/LeaderboardActions';

function LeaderboardListing(props) {
    return (
        <LeaderboardTable leaders={props.leaders}/>
    )
}

function LeaderboardTable(props) {
    const leaders = props.leaders;
    console.log('Leaders', leaders)

    const selectRowOptions = {
        mode: 'radio',
        clickToSelect: true,
        hideSelectColumn: true,
        bgColor: 'AliceBlue',
        onSelect: onRowSelect,
    };

    return (
        <BootstrapTable data={leaders} selectRow={selectRowOptions} bordered={false} condensed>
            <TableHeaderColumn isKey dataField='PlayerName'>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='Points'>Points</TableHeaderColumn>
            <TableHeaderColumn dataField='Title'>Title</TableHeaderColumn>
        </BootstrapTable>
    );
}

function onRowSelect(row, isSelected) {
    LeaderboardActions.selectLeader({isSelected: isSelected, row: row});
}

export default LeaderboardListing;