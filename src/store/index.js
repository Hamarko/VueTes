import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    async fetchPosts(ctx, limit = 3) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      const posts = await res.json();
      ctx.commit('updatePosts', posts);
    }
  },
  modules: {},
  getters: {
    allPosts(state) {
      return state.posts;
    }
  }
});
