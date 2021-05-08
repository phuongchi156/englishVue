<template>
    <div>
        <nav>
  <mdb-navbar color="default" dark class="justify-content-between">
    <mdb-navbar-brand  href="/admin">
    <span style="font-size:30px;cursor:pointer; display: left; color: black" @click="openNav()">&#9776;</span>
     |  | <md-icon style="border: 2px solid rgb(189, 43, 226);border-radius: 50px;  width: 55px; height: 55px;"> <img src="../assets/images/chill-removebg-preview.png"></md-icon>
    </mdb-navbar-brand>
    <mdb-form-inline id="icon">
      <i class="fa fa-comments"></i>
      <i class="fa fa-bell"></i>
      <i class="fa fa-user"></i>
      <b-button @click="logout()" variant="outline-dark"><i class="fa fa-sign-out"></i>Logout</b-button>
    </mdb-form-inline>
  </mdb-navbar>
            <hr>
  <div id="mySidenav" class="sidenav">
  <a style="color:white;" href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
  <router-link style="color:white; " to="/userlist">User</router-link>
  <router-link style="color:white;" to="/listlesson">List Lesson</router-link>
  <router-link style="color:white;" to="/listbaitap">List Exercise</router-link>
  <router-link style="color:white;" to="/listcomment">List Comment</router-link>
  <router-link style="color:white;" to="/listquestion">List Question</router-link>
  <router-link style="color:white;" to="/listdethi">List Contest</router-link>
  <router-link style="color:white;" to="/listketqua">List Result</router-link>
</div>
        </nav>

        <div id="page-wrapper">
            <div class="row">
            </div>
        </div>
    </div> 
</template>
 

<script>
  import { mdbNavbar, mdbNavbarBrand, mdbFormInline } from 'mdbvue';
  export default {
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbFormInline,
    },
    methods: {
    logout(){
      this.$store.dispatch('logout')
    },
    openNav(){
      document.getElementById("mySidenav").style.width = "250px";
      console.log("open");
    },
    closeNav(){
       document.getElementById("mySidenav").style.width = "0";
    }

  }
  }
</script>

<style>

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  text-align: left;
}

.sidenav a {
  padding: 18px 8px 28px 8px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}




#icon i{
  margin-left: 20px;
  width: 30px;
}
</style>