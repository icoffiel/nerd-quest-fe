import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap'
import UseItemActions from '../../actions/UseItemActions';
import './UseItem.css';

function UseItem(props) {
    const itemObj = props.item;
    const itemSelected = itemObj.iSelected;
    const item = itemObj.row;

    const leaderObj = props.leader;
    const leaderSelected = leaderObj.isSelected;
    const target = leaderSelected ? leaderObj.row.PlayerName : 'icoffiel';

    const itemOut = itemSelected ? `Use ${item.Name}` : 'Nothing to use';
    const personOut = ` on ${target} `;

    return (
        <div className="text-center">
            <h4 className="inline">{itemOut}</h4>
            <h4 className="inline">{personOut}</h4>

            <ButtonGroup>
              <Button disabled={!itemSelected} onClick={() => handleButtonClick(item.key, target)}>
                  Do It!
              </Button>
            </ButtonGroup>
        </div>
    );
}

function handleButtonClick(itemKey, target) {
    UseItemActions.useItem(itemKey, target);
}

export default UseItem;