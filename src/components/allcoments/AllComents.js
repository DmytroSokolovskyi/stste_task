import React, {Component} from 'react';
import Coment from "../coment/Coment";
import './AllComents.css'
import {PostService} from "../../services/PostService";

class AllComents extends Component {

    postService = new PostService();

    state = {allpost: [], chosepost: null};

    chosepost = (id) => {
        this.postService.getPostbyID(id).then(value => this.setState({chosepost: value}))
    };

    deletepost = (id) => {
        this.setState({allpost: this.postService.deletePost(this.state.allpost, id)});
    };

    render() {
        let {allpost, chosepost} = this.state;
        console.log(allpost);
        return (
            <div className={'posts'}>
                {
                    allpost.map(post => <Coment post={post} key={post.id} chosepost={this.chosepost}
                                                deletepost={this.deletepost}/>)
                }
                {
                    chosepost && <Coment post={chosepost} flag={true}/>
                }
            </div>
        );
    }

    componentDidMount() {
        this.postService.getAllPosts().then(value => this.setState({allpost: value}))
    }


}

export default AllComents;