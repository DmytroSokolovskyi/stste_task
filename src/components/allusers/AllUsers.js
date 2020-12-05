import React, {Component} from 'react';
import {PostService} from "../../services/PostService";
import User from "../user/User";

class AllUsers extends Component {
    postservise = new PostService()
    state = {allusers: [], choseuser: null}
    choseuser = (id) => {
        this.postservise.getbyID('users', id).then(value => this.setState({choseuser: value}))
    };
deleteuser = (id) => {
    this.setState({allusers: this.postService.deleteID(this.state.allusers, id)});
};

    render() {

let {allusers, choseuser} = this.state;


        return (
            <div>
                {allusers.map(user => <User user={user} chose={this.choseuser} key={user.id} deleteuser={this.deleteuser} />)}
                {
                    choseuser && <User user={choseuser} flag={true}/>
                }
            </div>
        );
    }
    componentDidMount() {
    this.postservise.getAll('users').then(value => this.setState({allusers: value }))
    }
}

export default AllUsers;