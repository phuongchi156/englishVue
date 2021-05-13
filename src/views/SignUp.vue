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
            <b-form-input id="name" v-model.trim="signupForm.name" placeholder="Nguyen Van A"></b-form-input>
          </b-form-group>
                    <b-form-group
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter username"
                    >
            <b-form-input id="username" v-model.trim="signupForm.username" placeholder="ahaha"></b-form-input>
          </b-form-group>
          <b-form-group
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter email">
            <b-form-input v-model.trim="signupForm.email"
          type="text"
          placeholder="you@email.com"
          id="email2"></b-form-input>
          </b-form-group>
                    <b-form-group
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Password">
            <b-form-input  v-model.trim="signupForm.password"
          type="password"
          id="password2" placeholder="********"></b-form-input>
          </b-form-group>
           <b-form-group
                    horizontal
                    :label-cols="4"
                    breakpoint="md" 
                    label="Enter address"
                    >
            <b-form-input id="address" v-model.trim="signupForm.address" placeholder="Thủ Dầu Một, Bình Dương"></b-form-input>
          </b-form-group>
          <b-button  @click="signup()" class="button">Sign Up</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import firebase from '../firebase'
//import router from '../router'

export default {
  data() {
    return {
      signupForm: {
          email: '',
          password: '',
          name : '',
          username : '',
          address : "",
          permiss : false,
          avatar : 'https://images.clipartlogo.com/files/istock/previews/1026/102672691-animal-emotion-avatar-vector-icon.jpg',
      },
       ref: firebase.firestore().collection('users'),
    };
  },
  methods: {
    signup() {
      this.$store.dispatch("signup", {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        username : this.signupForm.username,
        address : this.signupForm.address,
        permiss : this.signupForm.permiss,
        avatar : this.signupForm.avatar
      });

      //   this.ref.add(this.user).then((docRef) => {
      //   this.user.name = ''
      //   this.user.username = ''
      //   this.user.Email = ''
      //   this.user.address = ''
      //   this.user.permiss = false 
      //   console.log(docRef.id)
      //   router.push({
      //     name: 'home'
      //   })
      // })
      // .catch((error) => {
      //   alert("Error adding document: ", error);
      // });

     // alert("Đăng ký thành công!");
      
      
    },
  },
};
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>