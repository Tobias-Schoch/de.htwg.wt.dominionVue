import Vue from 'vue'
import VueRouter from 'vue-router'
import Titlescreen from "@/components/Titlescreen";
import About from "@/components/About";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: Titlescreen
  },
  {
    path: "/titlescreen",
    name: "titlescreen",
    component: Titlescreen
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
]

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
})

export default router
