import React, {Component} from 'react';
import Coment from "../coment/Coment";
import './AllComents.css'

class AllComents extends Component {

    state = {allpost: [], chosepost: null};

    chosepost = (id) => {
        let {allpost} = this.state;
        let chose = allpost.find(value => value.id === id);
        console.log(chose.id);
        this.setState({chosepost: chose})
    };
    deletepost = (id) => {
        let {allpost} = this.state;
        let dell = (allpost.find(value => value.id === id)).id;
        let result = allpost.filter(post => post.id !== dell);
        this.setState({allpost: result });
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
                    chosepost && <h2><Coment post={chosepost}/></h2>
                }
            </div>
        );
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(allposts => {
                let allpost = allposts.slice(0, 10);
                this.setState({allpost});
            });
    }


}

export default AllComents;