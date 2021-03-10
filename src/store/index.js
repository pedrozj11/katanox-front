import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
axios.defaults.withCredentials = true;

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user : null
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user
        } 
    },
    actions: {
        login({dispatch}, credentials) {
            axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(res => {
                console.log(res);
              axios.post('http://127.0.0.1:8000/login', this.form).then( res => {
              console.log(res);
              return dispatch('getUser');
            })
        })
        },
        getUser({commit}) {
            axios.get('http://127.0.0.1:8000/api/user').then(res => {
                commit('SET_USER', res.data);
            }).catch(() => {
                commit('SET_USER', res.data);
            });
        } 
    },
    modules: {},
})