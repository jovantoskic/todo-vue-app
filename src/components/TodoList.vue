<template>
  <div>
    <div class="header">
      <h2>My Todos</h2>
      <div>
        <button class="btn btn-primary" @click="filterTodos('all')">All</button>
        <button class="btn btn-primary" @click="filterTodos('active')">
          Active
        </button>
        <button class="btn btn-primary" @click="filterTodos('completed')">
          Completed
        </button>
      </div>
    </div>
    <div v-if="filteredTodos.length === 0" class="empty-list">
      <p>No todos found.</p>
    </div>
    <div v-else>
      <TodoItem v-for="todo in filteredTodos" :key="todo.id" :todo="todo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import TodoItem from "./TodoItem.vue";
import { useTodoStore } from "../stores/todo";

const todoStore = useTodoStore();
const filter = ref("all");

const filterTodos = (filterType: string) => {
  filter.value = filterType;
};

const filteredTodos = computed(() => {
  if (filter.value === "active") {
    return todoStore.todos.filter((todo) => !todo.completed);
  } else if (filter.value === "completed") {
    return todoStore.todos.filter((todo) => todo.completed);
  }
  return todoStore.todos;
});
</script>

<style scoped>
.empty-list {
  text-align: center;
  padding: 1rem;
  color: var(--text-light-color);
}

.header button {
  margin-left: 0.5rem;
}
</style>
