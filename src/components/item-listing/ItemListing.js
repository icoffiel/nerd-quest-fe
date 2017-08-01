import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

function ItemListing(props) {
    return (
        <ItemTable items={props.items}/>
    )
}

function ItemTable(props) {
    const items = props.items;
    return (
        <BootstrapTable data={items} condensed>
            <TableHeaderColumn isKey dataField='Name' dataSort={true}>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='Description'>Description</TableHeaderColumn>
            <TableHeaderColumn dataField='Rarity' dataSort={true}>Rarity</TableHeaderColumn>
        </BootstrapTable>
    )
}

export default ItemListing;