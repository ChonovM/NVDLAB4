<template>
    <div>
      <h1>Blogs</h1>
      <div v-if="isLoading">
        <p>Loading...</p>
      </div>
      <div v-else-if="error">
        <p>{{ error }}</p>
      </div>
      <section v-else>
        <div class="search">
          <label for="search">Search:</label>
          <input type="text" id="search" v-model="searchTerm" />
        </div>
        <fieldset>
          <div>Filter by: </div>
          <input type="checkbox" id="title" value="title" v-model="filters" />
          <label for="title">Title</label>
          <input
            type="checkbox"
            id="content"
            value="description"
            v-model="filters"
          />
          <label for="content">Content</label>
        </fieldset>
        <ul class="articles-list">
          <li>
            <article v-for="(blog, i) in filteredBlogs" :key="i">
              <div class="article-item-info">
                  <img
                  v-if="blog.heroImage"
                  class="thumbnail"
                  :src="`${blog.heroImage.fields.file.url}?fit=scale&w=350&h=196`"
                  />
                  <div class="article-text">
                  <div class="date">
                      {{ new Date(blog.publishDate).toDateString() }}
                  </div>
                  <h4>{{ blog.title }}</h4>
                  <p>{{ blog.description }}</p>
                  </div>
              </div>            
              <button @click="emits('deleteBlog', blog.id)">Delete</button>
            </article>
          </li>
        </ul>
      </section>
    </div>
  </template>
  <script setup>
  import { defineProps, defineEmits, ref, watch } from "vue";
  import { useSearch } from "../composables/useSearch";
  
  const props = defineProps({
    blogs: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
    error: {
      type: String,
      required: true,
    },
  });
  
  const emits = defineEmits(["deleteBlog"]);
  const blogs = ref(props.blogs);
  
  watch(
    () => props.blogs,
    (newBlogs) => {
      blogs.value = newBlogs;
    }
  );
  
  const {
    searchTerm,
    filters,
    filteredItems: filteredBlogs,
  } = useSearch(blogs);
  </script>
  
  <style scoped>
  .articles-list article{
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 10px;
    border: 1px solid gray;
    align-items: center;
    margin-block: 20px;
  }
  button {
      margin-bottom: 10px;
  }
  
  .article-item-info {
    display: flex;
    text-align: left;
    padding-bottom: 15px;
  }
  
  .article-text {
    padding: 15px 0;
  }
  
  .thumbnail {
    margin-right: 30px;
  }
  
  .date {
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
  }
  li {
      list-style: none;
  }
  
  fieldset {
      display: flex;
      gap: 10px;
      margin-block: 20px;
  }

  div {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

h1 {
  text-align: center;
  color: #333;
  font-size: 2rem;
  margin-bottom: 20px;
}

p {
  color: #999;
  font-size: 1rem;
  text-align: center;
}

.search {
  margin-bottom: 20px;
}

.search label {
  font-size: 1rem;
  font-weight: bold;
  margin-right: 10px;
}

.search input {
  padding: 8px;
  font-size: 1rem;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

fieldset {
  display: flex;
  gap: 15px;
  border: none;
  margin-bottom: 30px;
  padding: 0;
}

fieldset div {
  font-size: 2rem;
  font-weight: bold;
}

input[type="checkbox"] {
  margin-right: 5px;
}

label {
  font-size: 1rem;
  color: #333;
}

.articles-list {
  list-style: none;
  padding: 0;
}

.articles-list li {
  margin-bottom: 30px;
}

.article-item-info {
  display: flex;
  align-items: flex-start;
  padding: 15px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.article-text {
  max-width: 700px;
}

.article-text h4 {
  font-size: 1.5rem;
  color: #333;
  margin: 10px 0;
}

.article-text p {
  font-size: 1rem;
  color: #555;
}

.date {
  font-size: 0.9rem;
  font-weight: bold;
  color: #888;
  margin-bottom: 10px;
}

.thumbnail {
  max-width: 150px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 20px;
}

button {
  background-color: #d9534f;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #c9302c;
}

fieldset label{
  font-size: 2rem;
  margin-top: 2rem;
  font-weight: bold;
}

  </style>