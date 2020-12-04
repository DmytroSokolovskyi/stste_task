import React, {Component} from 'react';

class ChoseButton extends Component {
    render() {
        let {chosepost, id} = this.props
        return (
                <button onClick={() =>chosepost(id)} >chose</button>
        );
    }
}

export default ChoseButton;