<template>
  <input
      :value="modelValue"
      @input="updateInput"
      type="text"
      class="input">

</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }

}
</script>

<style scoped>
.input {
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
  outline: none;
}
</style>