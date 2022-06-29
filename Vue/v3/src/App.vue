<template>
  <div>
    <button @click="addLike">Like</button>
    <button @click="addDislike">Dislike</button>
    <div>Количество лайков: {{ likes }}</div>
    <div>Количество дизлайков: {{ dislikes }}</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      likes: 0,
      dislikes: 2
    }
  },

  methods: {
    addLike() {
      this.likes++
    },
    addDislike() {
      this.dislikes++
    }
  }
}
</script>

<style scoped>

</style>