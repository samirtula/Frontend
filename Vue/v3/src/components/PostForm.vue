<template>
  <h3>
    Создание поста
  </h3>
  <form @submit.prevent>
    <my-input
        type="text"
        v-model="post.title"
        placeholder="Название"/>
    <my-input
        type="text"
        v-model="post.body"
        placeholder="Описание"/>
    <my-button
        @click="createPost"
        style="align-self: flex-end; margin-top: 15px "
    >
      Создать
    </my-button>
  </form>
</template>

<script>

export default {
  name: "PostForm",
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
</style>