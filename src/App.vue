<template>
  <div id="app">
    <div id="nav" >
      <router-link to="/home">Home</router-link> |
      <router-link to="/signin">Đăng nhập</router-link> |
      <router-link to="/signup">Đăng ký</router-link> |
    </div>
    <div >

      <!-- <div id="user">
        <h1>user</h1>
      </div>
      <div id="admin">
        <h1>Admin</h1>
      </div>
    </div> -->
            <!-- <div id="menu">
  <ul>
    <li><a href="/admin">Dashboard</a></li>
    <li><a href="/userlist">Tài khoản</a>
      <ul class="sub-menu">
        <li><a href="/userlist">User</a></li>
        <li><a href="/admin">Admin</a></li>
        <li><a href="#">Hosting</a></li>
      </ul>
    </li>
    <li><a href="/">Bài Học</a></li>
    <li><a href="/listquestion">Câu hỏi</a></li>
    <li><a href="/listdethi">Đề thi</a></li>
    <li><a href="/">Bộ đề</a></li>
    <li><a href="/">Kết quả</a></li>
    <li><a href="/">Bài tập</a></li>
    <li><a href="/">Phản hồi</a></li>
    <li><a href="/">Tin mới</a></li>
  </ul>
            </div> -->
    <router-view/>
  </div>
  </div>
</template>

<script>

//import firebase from "firebase/app";
//import firebase from '../firebase'
import "firebase/auth";

//import Upload from "./components/HoTro/Upload"
export default {

  name: 'app',
  components:{
    //Upload
  },
  
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
