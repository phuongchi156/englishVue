import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app';
import router from '../router/index';
import * as fb from '../firebase'
//require('firebase/auth');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile: {}
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    }
  },
  actions: {
    async login({ dispatch }, form) {
      // sign user in
      const { user } = await fb.auth.signInWithEmailAndPassword(form.Email, form.Password)

      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
      console.log("Đã nhận đăng nhập");
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      //firebase.firestore().collection('users'),
      const userProfile = await firebase.firestore().collection('users').doc(user.uid).get();

      // set user profile in state
      commit('setUserProfile', userProfile.data());
      router.push('/listdethi ')
    },

    async signup({ dispatch }, form) {
      // sign user up
      const { user} = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)
    
      // create user profile object in userCollections
      await firebase.firestore().collection('users').doc(user.uid).set({
        email: form.email,
        password: form.password
      })
    
      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    // async logout({ commit }) {
    //   await fb.auth.signOut()
    
    //   // clear userProfile and redirect to /login
    //   commit('setUserProfile', {})
    //   router.push('/login')
    // }
    
  }
})