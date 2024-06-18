<template>
  <div class="recipe-item">
    <h3>{{ recipe.title }}</h3>
    <img v-if="recipe.image" :src="recipe.image" :alt="recipe.title" />
    <p>{{ truncatedSummary }}</p>
  </div>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
  },
  computed: {
    truncatedSummary() {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = this.recipe.summary;
      const summaryText = tempDiv.textContent || tempDiv.innerText || "";
      return summaryText.length > 100 ? summaryText.substring(0, 100) + "..." : summaryText;
    },
  },
};
</script>

<style scoped>
.recipe-item {
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.recipe-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 10px;
}

h3 {
  margin: 0 0 10px;
  font-size: 1.25rem;
  text-align: center;
}

p {
  margin: 0;
  text-align: center;
}

.dark-theme .recipe-item {
  background-color: #333;
  color: white;
  border: 1px solid #444;
}

.dark-theme .recipe-item:hover {
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.dark-theme h3, .dark-theme p {
  color: white;

}
</style>
