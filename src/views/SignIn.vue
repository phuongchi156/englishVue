<template>
    <div>

        <div class="login animate__animated animate__backInDown">
      <img src="../assets/images/chill-removebg-preview.png">
        <h2> Sign in to English with C</h2>
      <form @submit.prevent >

    <input type="text"  placeholder="Email" v-model.trim="loginForm.Email"/><br>
     <router-link to="/resetpassword">Forgot password?</router-link>
     
     <input :type="[showPassword ? 'password' : 'text']" placeholder="Password" v-model.trim="loginForm.Password"/><i @click="showPassword = !showPassword" class="fa" :class="[showPassword ? 'fa-eye' : 'fa-eye-slash']" aria-hidden="true"></i> <br>
    <button class="button" @click="login()" >
      Login
    </button>
  </form>
      <form>
    <span>Want to new?  <router-link to="/signup">Create an account</router-link></span>
  </form>
</div>

    </div>
</template>

<script>
import "firebase/auth";
export default {
    data() {
    return {
      loginForm: {
        Email: "",
        Password: "",
      },
      showPassword: true,
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        Email: this.loginForm.Email,
        Password: this.loginForm.Password,
      });
    },
  },
    
};
</script>

<style scoped>
.button {
    background: #6eade7 linear-gradient(to bottom, #159ace 5%, #417dee 100%);
    border-radius: 6px;
    border: 1px solid #0562b9;
    cursor: pointer;
    color: #fdfdfd;
    font-family: Arial, sans-serif;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    margin: 20px 20px 20px 20px;
    width: 160px;
    height: 60px;

}
.login{
    background-color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin-top: 10px ;
    box-shadow: #272424;
    border: #221e1e;
    width: 350px;
    height: 450px;
    position: relative;
    text-align: center;
    transform: translate(-50%, -50%);
    border-radius: 30px;
    box-shadow: gray;
    border: 2px solid rgb(231, 225, 225) ;
    color: #4e74f1;
    left: 35%;
    margin-bottom: 5px ;
}
.login a{
  font-size: 12px;
}
.login span{
  color: black;
  font-size: 12px;
}
input{
    margin: 20px 20px 2px 30px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: medium;
    border-radius: 5px;
    box-shadow: rgb(146, 190, 248);
    border: 1px solid rgb(88, 147, 236) ;
    size: 50px;
    width: 250px;
    height: 40px;
    position: relative;
}
input :visited{
  background-color: red;
}
img{
  width: 130px;
  height: 130px;
  position: relative;
  margin: auto;

}
h2{
  position: relative;
  margin: auto;
}



</style>