import React, {Component} from 'react';
import Coment from "../coment/Coment";
import './AllComents.css'
import {PostService} from "../../services/PostService";

class AllComents extends Component {

    postService = new PostService();

    state = {allpost: [], chose: null};

    chose = (id) => {
        this.postService.getbyID('posts', id).then(value => this.setState({chose: value}))
    };

    deletepost = (id) => {
        this.setState({allpost: this.postService.deleteID(this.state.allpost, id)});
    };

    render() {
        let {allpost, chose} = this.state;
        return (
            <div className={'posts'}>
                {
                    allpost.map(post => <Coment post={post} key={post.id} chose={this.chose} deletepost={this.deletepost}/>)
                }
                {
                    chose && <Coment post={chose} flag={true}/>
                }
            </div>
        );
    }

    componentDidMount() {
        this.postService.getAll('posts').then(value => this.setState({allpost: value}))
    }


}

export default AllComents;