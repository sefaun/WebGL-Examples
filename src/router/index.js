import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/image-rotate-box',
    name: 'ImageRotateBox',
    component: () => import('../views/About.vue')
  },
  {
    path: '/image-lighting-box',
    name: 'ImageLigthingBox',
    component: () => import('../components/ImageLigthingBox/ImageLigthingBox.vue')
  },
  {
    path: '/video-lighting-box',
    name: 'VideoLigthingBox',
    component: () => import('../components/VideoLigthingBox/VideoLigthingBox.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
