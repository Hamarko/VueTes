<template>
  <div>
      <h1>{{ post.title }}</h1>  
  </div>  
</template>

<script>
export default {
  computed: {
    post(){    
      console.log('id'+this.$router.params.id)  
      return this.$store.getters.postID(1)
    }
  }

}
</script>

<style>

</style>