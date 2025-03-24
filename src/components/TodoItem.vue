<template>
  <div class="todo-item" :class="{ completed: todo.completed }">
    <input
      type="checkbox"
      class="checkbox"
      :checked="todo.completed"
      @change="toggleComplete(todo)"
    />
    <div class="todo-content">
      <h3>{{ todo.title }}</h3>
      <p v-if="todo.description">{{ todo.description }}</p>
      <p v-if="todo.dueDate" class="due-date">
        Due: {{ formatDate(todo.dueDate) }}
      </p>
    </div>
    <div class="todo-actions">
      <button class="btn btn-danger" @click="deleteTodo(todo.id)">
        Delete
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from "../stores/todo";
import type { Todo } from "../types/todo";

const todoStore = useTodoStore();

defineProps<{
  todo: Todo;
}>();

const toggleComplete = (todo: Todo) => {
  todoStore.toggleTodo(todo.id);
};

const deleteTodo = (id: string) => {
  todoStore.deleteTodo(id);
};

const formatDate = (date: string) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString();
};
</script>

<style scoped>
.due-date {
  font-size: 0.875rem;
  color: var(--text-light-color);
  margin-top: 0.25rem;
}
</style>
