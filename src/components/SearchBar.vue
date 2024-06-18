<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="searchQuery" placeholder="Search for a recipe..." />
    <button type="submit">Search</button>
  </form>
</template>

<script>

export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
  methods: {
   async handleSubmit() {
     if (this.searchQuery.trim() === '') {
       return alert('Please enter something');
     }
     this.$emit('search-recipes', this.searchQuery);
     this.searchQuery = ''; // Clearing the input
   },
  },
};
</script>


<style scoped>

form {
  display: inline-block;
  margin-top: 5rem;
  margin-bottom: 20px;
}

input {
  padding: 8px;
  font-size: 16px;
  width: 250px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

button {
  padding: 8px 16px;
  margin-left: 5px;
  height: inherit;
  background-color: #fff;
  color: #007bff;
  border-radius: 4px;
  border: 1px solid #007bff;
  cursor: pointer;
  transition: border-color 0.3s, outline-color 0.3s;
}

button:hover {
  background-color: #007bff;
  color: #fff;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

</style>