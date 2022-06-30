<template>
  <div>
    <h3>Список пользователей</h3>
    <post-item class="post" v-for="post in posts" :post="post"/>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  name: "PostList",
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  },

  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>