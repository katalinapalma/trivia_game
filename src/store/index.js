import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        questions: [],
        error: ''
    },
    mutations: {
        setQuestions: (state, payload) => {
            state.questions = payload;
        },
        setError: (state, payload) => {
            state.error = payload;
        }
    }
})