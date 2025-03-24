import { defineStore } from "pinia";
import { ref } from "vue";
import type { Todo } from "../types/todo";

export const useTodoStore = defineStore("todo", () => {
  const todos = ref<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    todos.value.push(todo);
  }

  const toggleTodo = (id: string) => {
    const todo = todos.value.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  const deleteTodo = (id: string) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  }

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
});
