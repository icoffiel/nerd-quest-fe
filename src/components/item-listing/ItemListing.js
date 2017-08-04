import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import ItemActions from "../../actions/ItemActions";

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
    };

    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        hideSelectColumn: true,
        bgColor: 'AliceBlue',
        onSelect: onRowSelect,
    };

    return (
        <BootstrapTable data={items} options={options} selectRow={selectRow} bordered={false} condensed  pagination search>
            <TableHeaderColumn isKey dataField='key' hidden searchable={false}>Key</TableHeaderColumn>
            <TableHeaderColumn dataField='Name' dataSort={true} width='200'>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='Description' searchable={false}>Description</TableHeaderColumn>
            <TableHeaderColumn dataField='Rarity' dataSort={true} searchable={false} width='70'>Rarity</TableHeaderColumn>
        </BootstrapTable>
    )
}

function onRowSelect(row, isSelected) {
    console.log('isSelected', isSelected);
    console.log('row', row);
    ItemActions.selectItem({iSelected: isSelected, row: row});
}

export default ItemListing;