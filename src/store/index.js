import Vue from 'vue'
import Vuex from 'vuex'
//import firebase from 'firebase/app';
import router from '../router/index';
import * as fb from '../firebase';
//import firebase from '../firebase';
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
      dispatch('fetchUserProfile', user);
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      //firebase.firestore().collection('users'),
      const userProfile = await fb.userCollections.doc(user.uid).get();
      // set user profile in state
      commit('setUserProfile', userProfile.data());
      if(router.currentRoute.path ==='/signin'){
        router.push('/')
      }
      
    },

    async signup({ dispatch }, form) {
      // sign user up
      const { user} = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)
    
      // create user profile object in userCollections
      console.log('user id singup ',user.uid);
      
      await fb.userCollections.doc(user.uid).set(form);
      
      // await fb.userCollections.doc(user.uid).set({
      //   email: form.email,
      //   name : form.name,
      //   username : form.username,
      //   permiss : form.permiss,
      //   address : form.address
      // })
    
      // fetch user profile and set in state
      //router.push('/');
      dispatch('fetchUserProfile', user)
    },
    async logout({ commit }) {
      await fb.auth.signOut()
    
      // clear userProfile and redirect to /login
      commit('setUserProfile', {})
      router.push('/')
    },

    async updateProfile({ dispatch }, user) {
      const userId = fb.auth.currentUser.uid
      // update user object
      await fb.userCollections.doc(userId).update({
        name: user.name,
        username: user.username,
        address : user.address,
        avatar : user.avatar
      })
    
      dispatch('fetchUserProfile', { uid: userId })
    
      // update all posts by user
      // const postDocs = await fb..where('userId', '==', userId).get()
      // postDocs.forEach(doc => {
      //   fb.postsCollection.doc(doc.id).update({
      //     userName: user.name
      //   })
      // })
    
      // update all comments by user
      // const commentDocs = await fb.commentsCollection.where('userId', '==', userId).get()
      // commentDocs.forEach(doc => {
      //   fb.commentsCollection.doc(doc.id).update({
      //     userName: user.name
      //   })
      // })
    }
    
  }
})