import Vue from "vue";
import Vuex from 'vuex';
import { BASE_API_URL } from '../constants';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        questions: null,
        categories: '',
        userAnswers: '',
        score: 0,
        error: ''
    },
    mutations: {
        setQuestions: (state, payload) => {
            state.questions = payload;
        },
        setCategories: (state, payload) => {
            state.categories = payload;
        },
        setUserAnswers: (state,payload) => {
            state.userAnswers = payload;
        },
        setScore: (state, payload) => {
            state.score += payload;
        },
        setError: (state, payload) => {
            state.error = payload;
        }
    },
    actions: {
        async fetchQuestions({commit}) {
            const questions = await fetch(BASE_API_URL + '/api.php?amount=10');
            const response = await questions.json()
            const { results } = response;
            commit('setQuestions', results);
        },
        async fetchCategories({commit}) {
            const categories = await fetch(BASE_API_URL + '/api_category.php')
            const response = await categories.json()
            commit('setCategories', response);
        }
        /* async fetchDifficulties({commit}) {
            const difficulties = await fetch(BASE_API_URL + '&difficulty='+ difficulty)
        } */
    }
})