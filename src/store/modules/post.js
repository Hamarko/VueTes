import Axios from "axios";
export default {    
    state: {
        posts: []
    },
    mutations: {
        updatePosts(state, posts) {
          state.posts = posts;
        },
        createPost(state, newPost){
            console.log('Mutation:')
            console.log(newPost)
            state.posts.unshift(newPost)
        }

    },
    //`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    actions: {        
        async fetchPosts(ctx, limit = 3) {
          const url = "http://127.0.0.1:8000/api/v1/task/tasks/";
          const res = await Axios.get(url);              
          const posts = res['data'];
          ctx.commit('updatePosts', posts);
        },
        async createPost(context, newPost ){
            console.log('ADD:')
            console.log(newPost)
            const url = "http://127.0.0.1:8000/api/v1/task/create/";
            let {data} = await Axios.post(url,newPost);
            context.commit('createPost', newPost);
                          
        },
        async delUpdatPost(ctx, id) {
          const url = `http://127.0.0.1:8000/api/v1/task/update/${id}/`;
          const res = await Axios.get(url);              
          const post = [res['data']];
          ctx.commit('updatePosts', post);
        }       
    },
    getters: {
        allPosts(state) {
          return state.posts;
        },
        postID: s => id => s.posts.find(i=> i.id===id)
    }
}