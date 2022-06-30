<template>
  <div class="app">
    <post-form
        @create="createPost"/>
    <post-list
        :posts="posts"
    />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  components: {
    PostList,PostForm
  },

  name: "App",
  data() {
    return {
      posts : [
        {id: 1, title: 'Javascript', body: 'Описание поста'},
        {id: 2, title: 'Javascript 2', body: 'Описание поста 2'},
        {id: 3, title: 'Javascript 3', body: 'Описание поста 3'}
      ],
    }
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
    }
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
</style>