<template>
  <header :class="['navbar', theme === 'dark' ? 'navbar-dark' : 'navbar-light']">
    <div class="logo"><a href="#">Recipe Search</a></div>
    <div class="navbar-items">
      <button @click="toggleTheme" class="theme-toggle">
        <i :class="theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'"></i>
      </button>
    </div>
  </header>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const theme = ref('light');

    const toggleTheme = () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light';
      document.body.classList.toggle('dark-theme', theme.value === 'dark');
      localStorage.setItem('theme', theme.value);
    };

    onMounted(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        theme.value = savedTheme;
        document.body.classList.toggle('dark-theme', savedTheme === 'dark');
      }
    });

    return {
      theme,
      toggleTheme,
    };
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  transition: background-color 0.3s, color 0.3s;
}

.navbar a {
  text-decoration: none;
  color: inherit;
}

.navbar-light {
  background-color: #fff;
  color: #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-dark {
  background-color: #333;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
}

.logo {
  font-size: 1.5rem;
}

.logo:hover {
  opacity: 0.8;
}

.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  color: inherit;
}

.theme-toggle:hover {
  opacity: 0.8;
}
</style>
