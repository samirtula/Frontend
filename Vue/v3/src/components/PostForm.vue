<template>
  <form @submit.prevent>
    <input class="input" type="text" v-model="post.title" placeholder="Название">
    <input class="input" type="text" v-model="post.body" placeholder="Название">
    <my-button class="btn" @click="createPost">Создать</my-button>
  </form>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  name: "PostForm",
  components: {
    MyButton
  },
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },

  methods: {
    createPost() {
      this.post.id = Date.now()
       this.$emit('create', this.post);
       this.post = {
         title: '',
         body: ''
       }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
  outline: none;
}

.btn {
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid;
}

</style>