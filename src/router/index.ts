import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import HomePage from '../views/HomePage.vue'
import PresentationPage from '../views/PresentationPage.vue'
import GamePage from '../views/GamePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/presentation',
    name: 'PresentationPage',
    component: PresentationPage
  },
  {
    path: '/game',
    name: 'GamePage',
    component: GamePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
