import React, {Component} from 'react';

class ChoseButton extends Component {
    render() {
        let {chose, id} = this.props
        return (
                <button onClick={() =>chose(id)} >chose</button>
        );
    }
}

export default ChoseButton;