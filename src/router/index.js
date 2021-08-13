import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/StartView.vue'
import Question from '../views/QuestionView.vue'
import Result from '../views/ResultView.vue'
import store from '../store'

Vue.use(VueRouter)

// Protects routes from direct access before required data has been retrieved.
function guardRoute(to, from, next) {
  if(store.state.questionsFetched === true) {
    next()
  }
  else {
    next({
      path: '/'
    })
  }
}

const routes = [
  {
    path: '/',
    name: 'start',
    component: Start
  },
  {
    path: '/question',
    name: 'question',
    component: Question,
    beforeEnter: guardRoute
  },
  {
    path: '/result',
    name: 'result',
    component: Result,
    beforeEnter: guardRoute
  }
];

const router = new VueRouter({ 
    mode: 'history',
    base: process.env.BASE_URL,
    routes
 })

export default router;