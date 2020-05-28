<template>
  <div id="app">
    <div class="list-wrapper" v-for="post in allPosts" :key="post.id">
      <div>{{ post.id }}</div>
      <div>{{ post.title }}</div>
      <div>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import './List.css';
export default {
  name: 'app',
  computed: mapGetters(['allPosts']),
  methods: mapActions(['fetchPosts']),
  async mounted() {
    this.fetchPosts();
  }
};
</script>
