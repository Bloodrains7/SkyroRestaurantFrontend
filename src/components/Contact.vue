<template>
  <div class="max-w-4xl mx-auto p-4">
    <h2 class="text-3xl font-bold mb-6">Contact Us</h2>
    <div class="mb-8">
      <h3 class="text-2xl font-semibold mb-4">Our Location</h3>
      <div class="relative w-full h-96">
        <iframe
            class="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            :src="googleMapsUrl"
            title="Google Maps Location"
        ></iframe>
      </div>
    </div>
    <div class="mb-8">
      <h3 class="text-2xl font-semibold mb-4">Contact Details</h3>
      <p class="text-lg">1234 Restaurant Ave, Culinary City, CU 12345</p>
      <p class="text-lg">Phone: (123) 456-7890</p>
      <p class="text-lg">Email: info@skyrorestaurant.com</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Replace with your restaurant's Google Maps embed URL
      googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.4832234386727!2d-0.1280026840802167!3d51.50735157963507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b254f1e43af%3A0x1e1540479baf0a9b!2sThe%20Skyro%20Restaurant!5e0!3m2!1sen!2sus!4v1636066526747!5m2!1sen!2sus'
    }
  }
}
</script>

<style scoped>
/* Additional styling for Google Maps iframe */
iframe {
  border: none;
}
</style>
