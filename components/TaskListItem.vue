<template>
  <div>
    <span>
      {{ task }}
    </span>
    <button @click="onDelete">add</button>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: String,
      required: true,
    },
    onDelete: {
      type: Function,
      required: true,
    },
  },
}
</script>
