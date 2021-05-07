<template>
  <div id="app">
    <div id="nav" v-if="!showNav" >
      <router-link to="/home">Home</router-link> |
      <router-link to="/signin">Đăng nhập</router-link> |
      <router-link to="/signup">Đăng ký</router-link> |

          <router-view/>
    </div>
    <div >

       <div id="user" v-if="showNav && !userProfile.permiss">
        <User/>
      </div>
      <div v-if="userProfile.permiss" id="admin">
        <h1>Admin</h1>
        <Admin/>
      </div>
    </div> 
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
      admin: false,
    }
  },
    computed: {
    ...mapState(['userProfile']),
    showNav() {
      return Object.keys(this.userProfile).length > 1
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
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  
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
