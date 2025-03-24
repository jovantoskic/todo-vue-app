<template>
  <div>
    <h2>Add New Todo</h2>
    <form @submit.prevent="addTodo">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          class="form-input"
          v-model="title"
          placeholder="Enter todo title"
          required
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          id="description"
          class="form-input"
          v-model="description"
          placeholder="Enter todo description"
        />
      </div>
      <div class="form-group">
        <label for="dueDate">Due Date</label>
        <input
          type="date"
          id="dueDate"
          class="form-input"
          v-model="dueDate"
          placeholder="dd.mm.yyyy"
        />
      </div>
      <button type="submit" class="btn btn-primary">Add Todo</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "../stores/todo";

const todoStore = useTodoStore();

const title = ref<string>("");
const description = ref<string>("");
const dueDate = ref();

const addTodo = () => {
  if (title.value.trim()) {
    todoStore.addTodo({
      id: Date.now().toString(),
      title: title.value,
      description: description.value,
      dueDate: dueDate.value,
      completed: false,
      createdAt: new Date(),
    });
    title.value = "";
    description.value = "";
    dueDate.value = undefined;
  }
};
</script>
