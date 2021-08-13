import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/StartView.vue'
import Question from '../views/QuestionView.vue'
import Result from '../views/ResultView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start',
    component: Start
  },
  {
    path: '/question',
    name: 'question',
    component: Question
  },
  {
    path: '/result',
    name: 'result',
    component: Result
  }
];

const router = new VueRouter({ 
    mode: 'history',
    base: process.env.BASE_URL,
    routes
 })

export default router;