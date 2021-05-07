<template>
  <div id="app">
    <div id="nav" v-if="!showNav" >
      <md-icon style="float:left; margin-top:-19px; width:65px; height: 65px; box-shadow: #ffffff 2px 2px 1px 2px;border-radius: 50px;">
        <img src="./assets/images/chill-removebg-preview.png"></md-icon>
      <router-link to="/home">Home</router-link> |
      <router-link to="/signin">Đăng nhập</router-link> |
      <router-link to="/signup">Đăng ký</router-link> |
      
    </div>
    <div >

       <div id="user" v-if="showNav && !userProfile.permiss">
        <User/>
      </div>
      <div v-if="userProfile.permiss && showNav" id="admin">
        <Admin/>
      </div>
    </div> 
    <router-view/>
    <Footer /> 
  </div>
</template>

<script>

//import firebase from "firebase/app";
//import firebase from '../firebase'
import "firebase/auth";
import Footer from "./views/Footer";
import Admin from './views/Admin';
import User from './views/User';
import { mapState } from 'vuex'
import router from './router';
export default {

  name: 'app',
  components:{
    //Upload
    Footer,
    Admin,
    User
  },
  data(){
    return{
    }
  },
    computed: {
    ...mapState(['userProfile']),
    showNav() {
      return Object.keys(this.userProfile).length > 1
    }
  },
  created (){
    if(this.userProfile.permiss){
      router.push('/admin');
    }
  }
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  background-color: #bd79e4;
  box-shadow: #f1cefa 2px 3px 3px 4px;
}
#menu ul {
  background: #bd79e4;
  width: 250px;
  padding: 0;
  list-style-type: none;
  text-align: left;
}
#menu li {
  width: auto;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #e8e8e8;
  padding: 0 1em;
}
#menu li a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: bold;
  display: block;
}
#menu li:hover {
  background: #003ee9;
}

/*==Dropdown Menu==*/
#menu ul li {
  position: relative;
}
#menu .sub-menu {
  position: absolute;
  left: 250px;
  top: 0;
  display: none;
}
#menu li:hover .sub-menu {
  display: block;
}
</style>
