<template>
  <div class="row"> 
    <div class="col s6 offset-s3">
       <h1>Create Task</h1>
       <form @submit.prevent="submit">
         <div class="row">
           <div class="input-field">
              <input id="title" type="text"  class="validate" v-model="title" required>
              <label for="title">Title</label>
           </div>
         </div>
         <div class="row">
           <div class="input-field">
              <input id="post" type="text" class="validate" v-model="post" required>
              <label for="post">Post</label>
           </div>
         </div>
           <button type="submit">Create Task</button>
         
       </form>
    </div>       
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  data(){
    return{
      title: "",
      post: ""
    };
  },
  methods:{
    ...mapActions(["createPost"]),
    submit(){
      
      let Post = {
        title: this.title,
        body: this.post,
        user: "Comrade"
             
      };
      console.log(Post);      
      this.createPost(Post); 
      this.$router.push('/list')     
    }
  },
  name: 'Home',
  components: {
   
  }
}
</script>
