<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit User
        <router-link :to="{ name: 'showuser', params: { id: key } }">(Show User)</router-link>
      </h2>
      <b-jumbotron>
        <b-form @submit="onSubmit">
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter name">
            <b-form-input id="name" v-model.trim="user.name"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter username">
              <b-form-textarea id="username"
                         v-model="user.username"
                         placeholder="Enter username"
                         :rows="2"
                         :max-rows="6">{{user.username}}</b-form-textarea>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter email">
            <b-form-input id="email" v-model.trim="user.email"></b-form-input>
          </b-form-group>
                    <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter address">
            <b-form-input id="address" v-model.trim="user.address"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Update</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

//import firebase from '../Firebase'
import firebase from '../firebase'
import router from '../router'

export default {
  name: 'edituser',
  data () {
    return {
      key: this.$route.params.id,
      user: {}
    }
  },
  created () {
    const ref = firebase.firestore().collection('users').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.user = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const updateRef = firebase.firestore().collection('users').doc(this.$route.params.id);
      updateRef.set(this.user).then((docRef) => {
        this.key = ''
        this.user.name = ''
        this.user.username = ''
        this.user.email = ''
        this.user.address = ''
        console.log(docRef.id)
        router.push({ name: 'showuser', params: { id: this.$route.params.id }})
      })
      .catch((error) => {
        alert("Error adding document: ", error);
      });
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>
