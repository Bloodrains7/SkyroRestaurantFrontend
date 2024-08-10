import { createMemoryHistory, createRouter } from 'vue-router'
import ReservationForm from '../components/ReservationForm.vue';
import Menu from '../components/Menu.vue';
import Contact from '../components/Contact.vue';

const routes = [
    {
        path: '/',
        name: 'Menu',
        component: Menu
    },
    {
        path: '/reservation',
        name: 'Reservation',
        component: ReservationForm
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
