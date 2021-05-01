<template>
  <!-- Footer -->
  <mdb-footer style="background-color: #aa66cc; color: whitesmoke;" class="page-footer font-small pt-4 mt-4 footer">
    <mdb-container class="text-left">
      <mdb-row>
        <mdb-col md="6">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">English with C</h5>
          <p style="color: white;">Here you can learn english free! learn English every time every where just you want</p>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none" />
        <mdb-col md="5">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">About</h5>
          <ul class="list-unstyled">
            <li>      <md-button class="md-icon-button md-raised">
        <md-icon>home</md-icon>
      </md-button>Số 06, Trần Văn Ơn, Phú Hòa, Thủ Dầu Một, Bình Dương</li>
            <li><md-button class="md-icon-button md-raised">
        <md-icon>phone_iphone</md-icon>
      </md-button>0343007508</li>
            <li><md-button class="md-icon-button md-raised">
        <md-icon>mail</md-icon>
      </md-button>
              phuongchiokita@gmail.com</li>
          </ul>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none" />
      </mdb-row>
    </mdb-container>
    <hr />
    <div class="text-center py-3">
      <ul class="list-unstyled list-inline mb-0">
        <li class="list-inline-item">
          <h5 class="mb-1">Register for free</h5>
        </li>
        <li class="list-inline-item"><a href="/signup" class="btn btn-danger btn-rounded" style="color: white;">Sign up!</a></li>
      </ul>
    </div>
    <hr />
    <div class="text-center">
      <ul class="list-unstyled list-inline">
        <li class="list-inline-item"><a class="btn-floating btn-sm btn-fb mx-1" href="https://www.facebook.com/vy.phuong.750331/" target="_blank"> 
          <md-button class="md-icon-button md-raised md-primary">
          <md-icon>facebook</md-icon>
          </md-button>
          </a></li>
        <li class="list-inline-item"><a class="btn-floating btn-sm btn-tw mx-1" href="https://twitter.com/Kyo_Yumi" target="_blank">
      <md-button class="md-icon-button md-raised md-primary">
        <md-icon><i class="fab fa-twitter"></i></md-icon>
        
      </md-button>
          </a></li>
        <li class="list-inline-item"><a class="btn-floating btn-sm btn-li mx-1" href="#">
      <md-button class="md-icon-button md-raised md-accent">
        <md-icon><i class="fab fa-linkedin-in"></i></md-icon>
      </md-button>
      </a></li>
      </ul>
    </div>
    <div style="background-color: #9933CC;" class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020 Copyright: <a href="/"> English with C </a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'FooterPage',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }
</script>

<style>
.footer{
  color: aliceblue;
}
.footer a{
  color: aliceblue;
  text-decoration: none;
}
</style>