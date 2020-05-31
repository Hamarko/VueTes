<template>
  <div>
      <h1>{{post.title}}</h1>  
  </div>  
</template>

<script>
import { mapActions } from 'vuex';
export default {
  
  computed: {
    post(){        
      return this.$store.getters.postID(+this.$route.params.id)
    }
  },
  methods: mapActions(['delUpdatPost']),
  async mounted() {
    this.delUpdatPost(this.$route.params.id);
  }


}
</script>

<style>

</style>