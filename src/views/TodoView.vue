<template>
  <div class="container">
    <h1>Todo App</h1>
    <div class="card">
      <TodoForm />
    </div>
    <div class="card">
      <TodoList />
    </div>
  </div>
</template>

<script setup lang="ts">
import TodoForm from "../components/TodoForm.vue";
import TodoList from "../components/TodoList.vue";
</script>
