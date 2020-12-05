export class PostService {
    url = 'https://jsonplaceholder.typicode.com/';


    getAll(who) {
        return fetch(`${this.url}${who}`).then(value => value.json()).then(value => {
            return value.slice(0, 10);
        });
    }

    getbyID(who, id) {
        return fetch(`${this.url}${who}/${id}`).then(value => value.json()).then(value => value);
    }

    deleteID(arr, id) {
        let dell = (arr.find(value => value.id === id)).id;
        let res = arr.filter(post => post.id !== dell);
        return res;
    }
}


