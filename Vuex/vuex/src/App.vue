<template>
  <div class="container-fluid">
    <h1>VUEX</h1>
    <the-counter/>
  </div>
</template>

<script>

import TheCounter from "@/components/TheCounter.vue";

export default {
  name: 'App',
  components: {
    TheCounter
  },

}
</script>

<style>
#app {
  margin: 60px auto;
  width: 600px;
}

.post {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
