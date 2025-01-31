<template>
    <BlogView />
</template>

<script setup>
import BlogView from './components/BlogView.vue';
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0;
  max-width: 800px;
}
input {
  padding: 6px;
}
body {
  font-family: 'Inter', sans-serif;
  background: #f8f9fa;
  color: #333;
  margin: 0;
  padding: 0;
}

h1, h2, h3 {
  font-weight: 600;
}

button {
  background: #007bff;
  color: white;
  border: none;
  padding: 20px 35px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s ease;
  font-size: 1rem;
}

button:hover {
  background: #0056b3;
}

input, textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}


</style>
