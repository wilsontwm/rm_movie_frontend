import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MostPopular from '../views/MostPopular.vue'
import TopRated from '../views/TopRated.vue'
import Upcoming from '../views/Upcoming.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mostpopular',
    name: 'MostPopular',
    component: MostPopular
  },
  {
    path: '/toprated',
    name: 'TopRated',
    component: TopRated
  },
  {
    path: '/upcoming',
    name: 'Upcoming',
    component: Upcoming
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
