<template>
        <div id="menu">
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
  <router-view></router-view>
</div>

</template>
<script>
//import route from '../router/index'
export default {
    
}
</script>

<style>
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