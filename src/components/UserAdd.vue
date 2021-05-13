<template>
  <b-row>
    <b-col cols="6">
      <b-jumbotron>
        <b-form @submit="onSubmit" class="animate__animated animate__slideInRight">
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter name">
            <b-form-input id="name" v-model.trim="signupForm.name"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter username">
                <b-form-input id="name" v-model.trim="signupForm.username"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter email">
            <b-form-input id="email" v-model.trim="signupForm.email"></b-form-input>
          </b-form-group>
           <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter address">
            <b-form-input id="address" v-model.trim="signupForm.address"></b-form-input>
          </b-form-group>
           <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter permiss">
                <b-form-select  v-model.trim="signupForm.permiss" :options="options"></b-form-select>
          </b-form-group>
                     <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter password">
            <b-form-text style="color : reb;" id="password" v-model.trim="signupForm.password">Password default is 123456</b-form-text>
          </b-form-group>
          <b-button type="submit" variant="primary">Save</b-button>
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
  name: 'adduser',
  data () {
    return {
      options: [
        {value: true, text: 'admin'},
        {value: false, text: 'user'}
      ],
      signupForm: {
          email: '',
          password: '123456',
          name : '',
          username : '',
          address : "",
          permiss : false,
          avatar :'',
      },
       ref: firebase.firestore().collection('users'),
      //user: {}
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      if(this.signupForm.permiss){
        this.signupForm.avatar = "../assets/images/chill-removebg-preview.png";
      }
      else{
        this.signupForm.avatar = "https://images.clipartlogo.com/files/istock/previews/1026/102672691-animal-emotion-avatar-vector-icon.jpg";
      }
      this.$store.dispatch("signup", {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        username : this.signupForm.username,
        addredd : this.signupForm.address,
        permiss : this.signupForm.permiss,
        avatar : this.signupForm.avatar,
      });
      router.push({
          name: 'userlist'
        });
     // })
     // .catch((error) => {
     //   alert("Error adding document: ", error);
    //  });
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>