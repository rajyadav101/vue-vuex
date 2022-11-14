
import {createRouter, createWebHistory} from "vue-router";
import HelloWorld from '../components/HelloWorld'
import Home from '../components/Home'
// 1. Define route components.


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', name:"Home", component: Home },
  { path: '/foo', name:"Foo", component: HelloWorld },
  { path: '/bar', name:"Bar", component: HelloWorld }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes, // short for `routes: routes`
})

export default router;
