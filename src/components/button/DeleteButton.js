import React, {Component} from 'react';

class DeleteButton extends Component {
    render() {
        let {deletepost, id} = this.props;
        return (
                <button onClick={() =>deletepost(id)}>delete</button>
        );
    }
}

export default DeleteButton;