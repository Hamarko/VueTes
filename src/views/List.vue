<template>
  <div id="app">
    <div class="list-wrapper" >
      <tr v-for="post in allPosts" :key="post.id">
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.body }}</td>
        <td>       
         <router-link tag="button" class="btn btn-small" :to="'/post/'+post.id">
            Open
          </router-link>
        </td>
      </tr>     
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
