<template>
  <div>
    <div v-if="loading" class="loading">Loading...</div>

    <div class="error-container" v-if="error">
      <div class="error">{{ error }}</div>
    </div>
    <!-- Recipe List -->
    <div class="recipe-list">
      <div v-for="recipe in recipes" :key="recipe.id" class="recipe-item-wrapper">
        <RecipeItem :recipe="recipe" :theme="theme" />
      </div>
    </div>
  </div>
</template>

<script>
import RecipeItem from '@/components/RecipeItem.vue';

export default {
  components: {
    RecipeItem,
  },
  props: {
    recipes: {
      type: Array,
      default: () => [],
    },
    loading: Boolean,
    error: String,
    theme: String,
  },
};
</script>

<style scoped>
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  text-align: center;
}

.loading,
.error {
  width: 450px; /* Fixed width */
  padding: 10px;
  background-color: #f8d7da;
  color: #721c24;
}

.recipe-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.recipe-item-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
