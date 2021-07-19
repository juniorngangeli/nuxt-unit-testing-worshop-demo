<template>
  <div>
    <task-list-item
      v-for="task in tasks"
      :key="task"
      :task="task"
      :on-delete="handleTaskDelete"
    />
    <create-task-input @submit="handleTaskCreate" />
  </div>
</template>

<script>
import CreateTaskInput from './CreateTaskInput.vue'
import TaskListItem from './TaskListItem.vue'
export default {
  components: { CreateTaskInput, TaskListItem },
  props: {
    tasks: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleTaskDelete() {
      this.$emit('task-deleted')
    },
    handleTaskCreate() {
      this.$emit('task-created')
    },
  },
}
</script>
