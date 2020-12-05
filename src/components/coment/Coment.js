import React, {Component} from 'react';
import ChoseButton from "../button/ChoseButton";
import DeleteButton from "../button/DeleteButton";
import './Comen.css'

class Coment extends Component {
    render() {
let {post, chosepost, deletepost, flag} = this.props


        return (
            <div className={'osnova'} >
                <div className={'coment'}>
                    {post.id} - {post.title}
                </div>

                { !flag && (<div className={'button'}>
                    <ChoseButton chosepost={chosepost} id={post.id}/> <DeleteButton id={post.id} deletepost={deletepost}/>
                </div>)}
            </div>

        );
    }
}

export default Coment;