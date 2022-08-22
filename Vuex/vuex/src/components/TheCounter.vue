<template>
  <h1>Counter</h1>
  <h2>{{count}}</h2> <!--$store.getters.count-->

  <button class="btn" @click="increaseInComponent">Plus</button>
  <h2>Умноженное на 3</h2>
  <h2>{{$store.getters.multbyThree2}}</h2>

  <button class="btn" @click="$store.dispatch('asyncMultByFive', 55)">Асинхронное умножение на 5</button>
</template>

<script>
export default {
  name: "TheCounter",

  computed: {
    count() {
      return this.$store.getters.count;
    }
  },

  methods: {
    // делаем через mutation
    // increase() {
    //   this.$store.state.count++
    // }

    increaseInComponent() {
      //this.$store.commit('increase', 10)
      this.$store.commit('increase', {
        //type: 'increase'
        value: 10,
      })
    }
  }
}
</script>

<style scoped>
.btn {
  width: 200px;
  height: 50px;
  align-content: center;
  text-align: center;

  background: #008b8b;
}
</style>