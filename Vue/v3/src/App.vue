<template>
  <div class="app">
    <form @submit.prevent>
      <input class="input" type="text" @input="title = $event.target.value"  v-bind:value="title" placeholder="Название">
      <input class="input" type="text" @input="body = $event.target.value" v-bind:value="body" placeholder="Название">
      <button class="btn" @click="createPost">Создать</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: '',
      body: ''
    }
  },

  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body
      }
      this.posts.push(newPost);
      this.title = '';
      this.body = '';
    },
  }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .app {
    padding: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .btn {
    margin-top: 15px;
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid;
  }

  .input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
    outline: none;
  }
</style>