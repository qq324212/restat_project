import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue' 
import About from '../components/About.vue'
import Order from '../components/Order.vue'
import Booking from '../components/Booking.vue'
import RestaurantList from '../components/RestaurantList.vue'
import Menu from '../components/Menu.vue'
import Contact from '../components/Contact.vue'
import Feedback from '../components/Feedback.vue'


const routes = [
 { path:'/',
   component: HomePage
 },
 {  path:'/about',
    component: About
 },
 {  path:'/order',
    component: Order
 },
 {  path:'/booking',
    component: Booking
 },
 {  path:'/restaurantList',
    component: RestaurantList
 },
 {  path:'/menu',
    component: Menu
 },
 {  path:'/contact',
    component: Contact
 },
 {  path:'/feedback',
    component: Feedback
 }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router