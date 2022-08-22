<template>
 <div class="navbar">
    <h3 @click="$router.push('/')">Vue3</h3>
    <div class="nav__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button style="margin-left: 20px" @click="$router.push('/about')">О проекте</my-button>
      <my-button style="margin-left: 20px" @click="$router.push('/store')">О Vuex</my-button>
      <my-button style="margin-left: 20px" @click="$router.push('/composition')">О Composition API</my-button>
    </div>
 </div>
</template>

<script>
export default {
  name: "Navbar",
}
</script>

<style scoped>
 .navbar {
   height: 50px;
   background: lightgray;
   box-shadow: 2px 2px 4px gray;
   display: flex;
   align-items: center;
   padding: 0 15px;
 }

 .nav__btns {
   margin-left: auto;
 }
</style>