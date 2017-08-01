import React from 'react';

function ItemListing(props) {

    return (
        <ItemTable items={props.items}/>
    )
}

function ItemRow(props) {
    const item = props.value;

    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.rarity}</td>
        </tr>
    );
}

function ItemTable(props) {
    const items = props.items;
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Rarity</th>
            </tr>
            </thead>
            <tbody>
            {items.map(item => (
                <ItemRow
                    value={item}
                />
            ))}
            </tbody>
        </table>
    )
}

export default ItemListing;