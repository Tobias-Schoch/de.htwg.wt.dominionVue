import Vue from 'vue'
import VueRouter from 'vue-router'
import TitlescreenView from "@/views/TitlescreenView";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",

  },
  {
    path: "/titlescreen",
    name: "Titlescreen",
    component: TitlescreenView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
})

export default router
