import React, {Component} from 'react';

class DeleteButton extends Component {
    render() {
        let {delet, id} = this.props;
        return (
                <button onClick={() =>delet(id)}>DELL</button>
        );
    }
}

export default DeleteButton;