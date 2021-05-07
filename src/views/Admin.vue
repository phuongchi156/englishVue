<template>
    <div id="wrapper">
        <nav>
            <div class="navbar-header">
                <router-link to="/admin" class="navbar-brand" >Quản Trị</router-link>
            

                    <a  @click="logout()"><i class="fa fa-sign-out fa-fw"></i>Đăng xuất</a>
            </div>
            <hr>

            <div class="sidebar" role="navigation">
                    <ul>
                        <li>
                            <a href="/HocSinh/QLHocSinh">Danh Sách Học Sinh</a>
                        </li>
                        <li>
                            <a href="/BaiHoc/QLBaiHoc">Danh Sách Bài Học</a>
                        </li>
                        <li>
                            <a href="/DeThi/Index">Đề Kiểm Tra</a>
                        </li>
                        <li>
                            <a href="/CauHoi/Index">Câu Hỏi</a>
                        </li>
                        <li>
                            <a href="/KetQua/Index">Kết Quả</a>
                        </li>
                    </ul>
            </div>
        </nav>

        <div id="page-wrapper">
            <div class="row">
            </div>
        </div>
    </div> 
</template>
 

<script>
export default {
  methods: {
    logout(){
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
#wrapper{
  background-color: rgb(223, 129, 252);
  color: aliceblue;
}
.navbar-header{
  display: flex;
   flex-direction: row-reverse;
  flex-wrap: nowrap;

}
.sidebar{
  display: flex;
  flex-direction: column;
  left: 0%;
  text-align: left;

}
</style>