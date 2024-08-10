<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="bg-gray-800 p-4 text-white">
      <ul class="flex space-x-4">
        <li><router-link to="/" class="hover:text-gray-300">Home</router-link></li>
        <li><router-link to="/reservation" class="hover:text-gray-300">Reservation</router-link></li>
        <li><router-link to="/contact" class="hover:text-gray-300">Contact</router-link></li>
      </ul>
    </nav>

    <!-- Hero Section -->
    <header class="relative overflow-hidden">
      <img src="./assets/restaurant.jpg" alt="Restaurant" class="object-cover w-full h-64" />
      <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
        <h1 class="text-4xl font-bold text-white">Welcome to Skyro Restaurant</h1>
      </div>
    </header>

    <!-- Main Content -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
/* Styling for the hero section */
header {
  position: relative;
}

header img {
  width: 100%;
  height: 16rem; /* Adjust height as needed */
  object-fit: cover;
}

header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  color: white;
  z-index: 10;
}
</style>
