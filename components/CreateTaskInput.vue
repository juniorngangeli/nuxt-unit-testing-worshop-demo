<template>
  <form>
    <input type="text" />
    <button type="submit" @click="handleSubmit">Create task</button>
  </form>
</template>

<script>
export default {
  methods: {
    handleSubmit() {
      this.$emit('submitted')
    },
  },
}
</script>
