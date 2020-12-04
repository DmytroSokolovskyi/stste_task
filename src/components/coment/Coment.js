import React, {Component} from 'react';
import ChoseButton from "../button/ChoseButton";
import DeleteButton from "../button/DeleteButton";

class Coment extends Component {
    render() {
let {post, chosepost, deletepost} = this.props


        return (
            <div>
                {post.id} - {post.title} - <ChoseButton chosepost={chosepost} id={post.id}/> <DeleteButton id={post.id} deletepost={deletepost}/>
            </div>
        );
    }
}

export default Coment;