import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/StartView.vue'
import Questions from '../views/QuestionView.vue'
import Result from '../views/ResultView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Start',
        component: Start
    },
    {
        path: '/questions',
        name: 'Question',
        component: Questions
    },
    {
        path: '/result',
        name: 'Result',
        component: Result
    }
];

const router = new VueRouter({ 
    mode: 'history',
    base: process.env.BASE_URL,
    routes
 })

export default router;