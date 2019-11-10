import Vue from 'vue'
import Router from 'vue-router'
import Circle from './views/bresenham-circle/circleb.vue'
import Line from './views/bresenham-line/lineb.vue'
import Ellipse from './views/bresenham-Ellipse/ellipseb.vue'
import Home from './views/homePage/home.vue'
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/line',
      name: 'Line',
      component: Line
    },
    {
        path: '/circle',
        name: 'Circle',
        component: Circle
    },
    {
        path: '/ellipse',
        name: 'Ellipse',
        component: Ellipse
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    }
  ]
})
