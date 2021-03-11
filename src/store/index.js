import { createStore } from 'vuex'
import axios from 'axios';
axios.defaults.withCredentials = true;

const store = createStore({
    
    state: {
        user : null,
        auth : false,
    },
    getters: {
        auth: state => {
            console.log(state.auth);
          return state.auth;
        }
      },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
            state.auth = Boolean(user);
        } 
    },
    actions: {
        login({dispatch}, credentials) {    
            axios.get(process.env.VUE_APP_BASE_API_URL + 'sanctum/csrf-cookie').then(() => {
              axios.post(process.env.VUE_APP_BASE_API_URL + 'login', credentials).then( ()  => {
              return dispatch('getUser');
            })
        })
        },
        logout({dispatch}) {  
            axios.post(process.env.VUE_APP_BASE_API_URL + 'logout').then( () => {
            return dispatch('getUser');
          })
   
        },
        getUser({commit}) {
            axios.get(process.env.VUE_APP_BASE_API_URL + 'api/user').then(res => {
                console.log(res.data);
                commit('SET_USER', res.data);
                
            }).catch((e) => {
                console.log(e);
                commit('SET_USER', null);
            });
        } 
    },
    modules: {},
})

export default store