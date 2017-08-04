import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

function ItemListing(props) {
    return (
        <ItemTable items={props.items}/>
    )
}

function ItemTable(props) {
    const items = props.items;
    const options = {
        defaultSortName: 'Rarity',
        defaultSortOrder: 'desc',
        sizePerPage: 25,
    }
    return (
        <BootstrapTable data={items} options={options} bordered={false} condensed  pagination search>
            <TableHeaderColumn isKey dataField='key' hidden searchable={false}>Key</TableHeaderColumn>
            <TableHeaderColumn dataField='Name' dataSort={true} width='200'>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='Description' searchable={false}>Description</TableHeaderColumn>
            <TableHeaderColumn dataField='Rarity' dataSort={true} searchable={false} width='70'>Rarity</TableHeaderColumn>
        </BootstrapTable>
    )
}

export default ItemListing;