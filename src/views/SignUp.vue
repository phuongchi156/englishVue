<template>
  <b-row>
    <b-col cols="12">
    <p class="animate__animated animate__bounce">Let's join together</p>
      <b-jumbotron>
        <b-form @submit.prevent id="signup" class="animate__animated animate__backInRight">
      <h2>Create Account</h2>
          <b-form-group
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter name"
                    >
            <b-form-input id="name" v-model.trim="user.name" placeholder="Nguyen Van A"></b-form-input>
          </b-form-group>
                    <b-form-group
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter username"
                    >
            <b-form-input id="username" v-model.trim="user.username" placeholder="ahaha"></b-form-input>
          </b-form-group>
          <b-form-group
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter email">
            <b-form-input v-model.trim="user.Email"
          type="text"
          placeholder="you@email.com"
          id="email2"></b-form-input>
          </b-form-group>
                    <b-form-group
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Password">
            <b-form-input  v-model.trim="user.password"
          type="password"
          id="password2" placeholder="********"></b-form-input>
          </b-form-group>
           <b-form-group
                    horizontal
                    :label-cols="4"
                    breakpoint="md" 
                    label="Enter address"
                    >
            <b-form-input id="address" v-model.trim="user.address" placeholder="Thủ Dầu Một, Bình Dương"></b-form-input>
          </b-form-group>
          <b-button  @click="signup()" class="button">Sign Up</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import firebase from '../firebase'
import router from '../router'

export default {
  data() {
    return {
        email: "",
        password: "",
       ref: firebase.firestore().collection('users'),
        user: {}
    };
  },
  methods: {
    signup() {
      this.$store.dispatch("signup", {
        email: this.user.Email,
        password: this.user.password,
      });

        this.ref.add(this.user).then((docRef) => {
        this.user.name = ''
        this.user.username = ''
        this.user.Email = ''
        this.user.address = ''
        this.user.permiss = false 
        console.log(docRef.id)
        router.push({
          name: 'home'
        })
      })
      .catch((error) => {
        alert("Error adding document: ", error);
      });

      alert("Đăng ký thành công!");
      
      
    },
  },
};
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>