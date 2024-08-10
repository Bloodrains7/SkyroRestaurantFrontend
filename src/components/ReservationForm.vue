<template>
  <div class="max-w-4xl mx-auto p-4">
    <h2 class="text-3xl font-bold mb-6">Make a Reservation</h2>
    <form @submit.prevent="submitReservation" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label for="name" class="block text-lg font-semibold mb-1">Name</label>
          <input
              id="name"
              v-model="reservation.name"
              type="text"
              required
              class="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label for="email" class="block text-lg font-semibold mb-1">Email</label>
          <input
              id="email"
              v-model="reservation.email"
              type="email"
              required
              class="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label for="phone" class="block text-lg font-semibold mb-1">Phone</label>
          <input
              id="phone"
              v-model="reservation.phone"
              type="text"
              required
              class="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label for="date" class="block text-lg font-semibold mb-1">Date</label>
          <input
              id="date"
              v-model="reservation.date"
              type="datetime-local"
              required
              class="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
      <div>
        <label for="people" class="block text-lg font-semibold mb-1">Number of People</label>
        <input
            id="people"
            v-model="reservation.people"
            type="number"
            min="1"
            required
            class="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <button
          type="submit"
          class="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
      >
        Reserve Table
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reservation: {
        name: '',
        email: '',
        phone: '',
        date: '',
        people: 1
      }
    }
  },
  methods: {
    async submitReservation() {
      try {
        const response = await fetch('http://127.0.0.1:8000/reserve', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            name: this.reservation.name,
            phone_number: this.reservation.phone,
            number_of_people: this.reservation.people,
            reservation_time: this.reservation.date
          })
        });
        const result = await response.json();
        alert(result.message);
        this.resetForm();
      } catch (error) {
        console.error('Error:', error);
      }
    },
    resetForm() {
      this.reservation = {
        name: '',
        email: '',
        phone: '',
        date: '',
        people: 1
      };
    }
  }
}
</script>

<style scoped>
/* Additional styling for form elements */
input, button {
  font-size: 16px;
}
</style>
