import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        this.setState({
            items: [
                {
                    "name": "myName",
                    "rarity": 5
                },
                {
                    "name": "otherName",
                    "rarity": 2
                },
                {
                    "name": "something else",
                    "rarity": 1
                },
            ]
        })
    }

  render() {
    return (
      <ItemTable items={this.state.items} />
    );
  }
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

export default App;
