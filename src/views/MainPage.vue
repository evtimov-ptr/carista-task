<template>
 <div>
   <NavBar :theme="theme" @toggle-theme="toggleTheme"/>
   <SearchBar @search-recipes="searchRecipes" :theme="theme" />
   <RecipeList :recipes="recipes" :loading="loading" :error="error"/>
 </div>
</template>


<script>
import { ref } from 'vue';
import { fetchRecipes } from '@/services/apiService';
import SearchBar from '@/components/SearchBar.vue';
import RecipeList from '@/components/RecipeList.vue';
import NavBar from "@/components/NavBar.vue";


export default {
  components: {
    NavBar,
    SearchBar,
    RecipeList,
  },

  setup() {
    const theme = ref('light');
    const recipes = ref([]);
    const loading = ref(false);
    const error = ref('');

    const toggleTheme = () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light';
      document.body.classList.toggle('dark-theme', theme.value === 'dark');
    };

    const searchRecipes = async(query) => {
      loading.value = true;
      error.value = '';

      try {
        const result = await fetchRecipes(query);
        if (result.length === 0) {
          error.value = 'No recipes found for your search.';
        }
        else {
          recipes.value = result;
        }
      } catch (err) {
        console.log('Error fetching recipes:', err);
        error.value = 'Failed to fetch recipes. Please try again later.';
      } finally {
        loading.value = false;
      }
    };

    return {
      theme,
      recipes,
      loading,
      error,
      searchRecipes,
      toggleTheme,
    };
  },
};
</script>


<style scoped>

</style>