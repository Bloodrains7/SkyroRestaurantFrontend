<template>
  <div class="max-w-4xl mx-auto p-4">
    <h2 class="text-3xl font-bold mb-6">Our Menu</h2>

    <!-- Food Menu Section -->
    <div class="mb-12">
      <h3 class="text-2xl font-semibold mb-4">Food Menu</h3>
      <div class="relative w-full h-64 mb-4">
        <img
            src="../assets/food.png"
            alt="Food Menu"
            class="object-cover w-full h-full rounded-lg shadow-lg"
        />
      </div>
      <button @click="fetchFoodMenu" class="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 flex items-center">
        <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4.5m0 0V16m0-3.5h4.5M12 12H7.5M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
        </svg>
        Download Food Menu PDF
      </button>
    </div>

    <!-- Drinks Menu Section -->
    <div class="mb-12">
      <h3 class="text-2xl font-semibold mb-4">Drinks Menu</h3>
      <div class="relative w-full h-64 mb-4">
        <img
            src="../assets/drinks.jpeg"
            alt="Drinks Menu"
            class="object-cover w-full h-full rounded-lg shadow-lg"
        />
      </div>
      <button @click="fetchDrinksMenu" class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 flex items-center">
        <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4.5m0 0V16m0-3.5h4.5M12 12H7.5M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
        </svg>
        Download Drinks Menu PDF
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fetchFoodMenu() {
      window.location.href = 'http://127.0.0.1:8000/menu/food';
    },
    fetchDrinksMenu() {
      window.location.href = 'http://127.0.0.1:8000/menu/drinks';
    }
  }
}
</script>

<style scoped>
/* Additional styling for images */
img {
  border-radius: 0.5rem;
}
</style>
