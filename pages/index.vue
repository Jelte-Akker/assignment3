<template lang="pug">
  div.wrapper
    h1 Todo 
    table
      thead
       tr
        th Assignee
        th Due Date
        th Description
      tbody
        tr(v-for="todo in todos" :key="todo.id")
          td {{todo.assignee}}
          td {{new Date(todo.dueDateTime).toLocaleDateString()}}
          td {{todo.description}}
    button(@click='fetchTodo') Get Task
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    todos() {
      return this.$store.state.todos
    }
  },
  methods: {
    fetchTodo: function () {
      this.$store.dispatch("fetchTodo")
    }
  }
}
</script>
<style scoped lang="scss">
.wrapper {
  text-align: center;
  margin: 0 auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  & button {
    width: 10%;
  }
  & table {
    border: 1px solid;
    margin: 10px 0px;
  }
}
</style>
