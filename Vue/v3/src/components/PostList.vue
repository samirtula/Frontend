<template>
  <div class="post" v-for="post in posts">
    <div><strong>Название:</strong> {{ post.title}}</div>
    <div><strong>Описание:</strong> {{ post.body }}</div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  data() {
    return {
      posts : [
        {id: 1, title: 'Javascript', body: 'Описание поста'},
        {id: 2, title: 'Javascript 2', body: 'Описание поста 2'},
        {id: 3, title: 'Javascript 3', body: 'Описание поста 3'}
      ],
    }
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
</style>