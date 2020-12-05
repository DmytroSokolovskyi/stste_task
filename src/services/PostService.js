export class PostService {
    url = 'https://jsonplaceholder.typicode.com/posts/';




    getAllPosts() {
      return  fetch(this.url)
            .then(value => value.json())
            .then(allposts => {
                return allposts.slice(0, 10);
            });
    }

    getPostbyID (id) {
        return  fetch(`${this.url}${id}`)
            .then(value => value.json())
            .then(value => value);
    }
    deletePost (posts, id) {
        let dell = (posts.find(value => value.id === id)).id;
        let res = posts.filter(post => post.id !== dell);
        return res;

    }
}


