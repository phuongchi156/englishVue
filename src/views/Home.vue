<template>
    <div>
     <section class="slide">
       <Slider /> 
  </section>

  <section >
    <div>
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="animate__animated animate__rotateInDownLeft" >
              <i class="fa fa-book" aria-hidden="true"></i>
              <h3>Learn Online</h3>
              <p>Học Online có gì? Học online giúp bạn tiết kiệm thời gian của bản thân. Bạn có thể học bất cứ khi nào, học tại bất cứ đâu</p>
            </div>
            <div class="animate__animated animate__rotateInDownRight" >
              <i class="fa fa-leanpub" aria-hidden="true"></i>
              <h3>Abundant lessons</h3>
              <p>Bài học phong phú-không để cho bạn cảm thấy nhàm chán hay thiếu nội dung. Khơi dậy hứng thú học tập</p>
            </div>
            <div class="animate__animated animate__rotateInDownLeft" >
              <i class="fa fa-table" aria-hidden="true"></i>
              <h3>Have test</h3>
              <p>Có các bài kiểm tra trắc nghiệm và bài tập để bạn ôn lại kiến thức và nắm được khả năng của mình</p>
            </div>
            </div>
          </div>
        </div>
  </section>
  <!-- End service  -->

  <!-- Start features section -->
  <section id="mu-features">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="mu-features-area">
            <div class="mu-title">
              <h2>Our Features</h2>
            </div>
            <div class="mu-features-content">
              <div class="row">
                <div class="col-lg-4 col-md-4  col-sm-6">
                  <div class="something mu-single-feature">
                    <i class="fa fa-book"></i>
                    <h4>Professional Courses</h4>
                    <p>Phân chia theo chủ đề. Nôi dung tăng dần hợp lý</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <div class="something mu-single-feature">
                    <i class="fa fa-laptop"></i>
                    <h4>Online Learning</h4>
                    <p>Tiết kiệm tiền bạc. Không cần đi lại đưa đón tốn thời gian</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <div class="something mu-single-feature">
                    <i class="fa fa-film"></i>
                    <h4>Video Lessons</h4>
                    <p>Học tập qua video- hạn chế sự nhàm chán. Rèn luyện nhiều kĩ năng</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <div class="something mu-single-feature">
                    <i class="fa fa-list-alt" aria-hidden="true"></i>
                    <h4>Grammar Lessons</h4>
                    <p>Có các bài học ngữ pháp để bạn ôn luyện toàn diện</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                  <div class="something mu-single-feature">
                    <i class="fa fa-briefcase" aria-hidden="true"></i>
                    <h4>Have exercise</h4>
                    <p>Bài tập để bạn ôn lại và có ví dụ trưc quan về những gì mình đã học</p>
                  </div>
                </div>
                 <div class="col-lg-4 col-md-4 col-sm-6">
                  <div class="something mu-single-feature">
                    <i class="fa fa-commenting" aria-hidden="true"></i>
                    <h4>Have Test</h4>
                    <p>Có bài kiểm tra để bạn biết được khả năng của mình. Và nắm chắc hơn những gì đã học</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Start news -->
  <section id="mu-testimonial">
     <h4>News</h4>
    <div class="container" v-for="item in news" :key="item.key">
      <div class="row" >
        <div class="col-md-6">
                  <blockquote>
                    <p>{{item.noidung}}</p>
                    <hr style="width:50%;height:1px;border-width:0;color:blueviolet;background-color:blueviolet">
                  </blockquote>
            </div>
                    <div class="col-md-6 imgNew">
                  <img :src="item.anh" alt="img" width="550px" height="350px">
                  <hr style="height:2px;border-width:0;color:violet;background-color:violet">
            </div>
                
              </div>
    </div>
  </section>
  <!-- End testimonial -->
    </div>
</template>

<script>

import firebase from '../firebase'
//import router from '../router'
import Slider from '../components/HoTro/SlideShow'

export default {

    name: 'home',
  data () {
    return {
        anh: "",
        noidung :"",
      news: [],
      errors: [],
      ref: firebase.firestore().collection('news'),
    }
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.news = [];
      querySnapshot.forEach((doc) => {
        this.news.push({
          key: doc.id,
          anh: doc.data().anh,
          noidung : doc.data().noidung,
        });
      });
    });
  },
  methods: {

  },
  components:{
    Slider
  }

    
}
</script>

<style>
.slide{
  position: relative;
}
h4, h3, h2{
  color: blueviolet;
}
p{
  color: black;
  font-family: cursive;
  padding: 15px 0px 15px 0px;
}
/* i{
  width: 300px;
  height: 60px;
  background-color: rgb(172, 92, 247);
  border-radius: 10px;
  padding: 15px 5px 5px 5px;
} */
.something{
  position: relative;
  background-color: rgb(255, 255, 255);
  border: 1px solid blueviolet;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-top: 10px;
  padding-top: 5px;
  margin-bottom: 15px;
      -webkit-box-shadow: 3px 3px 5px 6px rgb(213, 156, 247);  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    3px 3px 5px 6px rgb(213, 156, 247);  /* Firefox 3.5 - 3.6 */
  box-shadow:         3px 3px 5px 6px rgb(213, 156, 247);
}
.something :hover{
    -webkit-box-shadow: 3px 3px 5px 6px rgb(201, 182, 212);  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    3px 3px 5px 6px rgb(201, 182, 212);  /* Firefox 3.5 - 3.6 */
  box-shadow:         3px 3px 5px 6px rgb(201, 182, 212);  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
}
.imgNew img{
  width: 500px;
  height: 300px;
  border-radius: 10px ;
  margin-top: 9px;
}

.new {
  position: relative;
  animation-name: example;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}

@keyframes example {
  0%   {background-color:rgb(255, 255, 255); left:-55px;}
  25%  {background-color:rgb(255, 255, 255); left:555px;}
  50%  {background-color:rgb(255, 255, 255); left:255; }
  75%  {background-color:rgb(255, 255, 255); left:155; }
  100% {background-color:rgb(255, 255, 255); left:-55;}
}
blockquote{
  background-color: rgb(231, 141, 253);
  border-radius: 10px;
    width: 500px;
  height: 300px;
    border: 2px solid blueviolet;
}
</style>