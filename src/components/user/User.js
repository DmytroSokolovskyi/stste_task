import React, {Component} from 'react';
import ChoseButton from "../button/ChoseButton";
import DeleteButton from "../button/DeleteButton";

class User extends Component {
    render() {
        let {user, chose, deleteuser, flag} = this.props
        return (
            <div>
                <div>
                    {user.id}-{user.name}
                </div>
                <div>
                    { !flag && (<div>
                        <ChoseButton chose={chose} id={user.id}/> <DeleteButton id={user.id} delet={deleteuser}/>
                    </div>)}
                </div>

            </div>
        );
    }
}

export default User;