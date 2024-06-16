<!-- src/views/NotFound.vue -->

<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 20px;
}

.not-found h1 {
  font-size: 3em;
  margin-bottom: 10px;
}
</style>
