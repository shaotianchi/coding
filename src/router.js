import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Examination from './views/Examination'
import Management from './views/Management'
import Questions from './views/Questions'
import Interviews from './views/Interviews'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/examination', 
      name: 'examination',
      component: Examination
    },
    {
      path: '/management', 
      name: 'management',
      component: Management,
      redirect: { name: 'questions' },
      children: [
        {
          path: 'questions',
          name: 'questions',
          component: Questions
        },
        {
          path: 'interviews',
          name: 'interviews',
          component: Interviews 
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
