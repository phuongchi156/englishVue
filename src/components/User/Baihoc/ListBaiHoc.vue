<template>
<div id="lesson">
    <section id="mu-features">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="mu-features-area">
            <div class="mu-title">
              <h2>List lesson</h2>
            </div>
            <div class="mu-features-content" >
              <div class="row" >
                <div v-for="item in lesson" :key="item.key">
                                    <div class="something">
                <div class="col-lg-6 col-md-6  col-sm-6">

                    <p>Type bài học</p>
                    <i class="fa fa-book"></i>
                    <img :src="item.anh">
                    <p>Tện bài học</p>
                    <p>{{item.name}}</p>
                </div>
                                    </div>
                </div>
                                <!-- <div class="col-lg-6 col-md-6  col-sm-6">
                  <div class="something mu-single-feature">
                    <p>Type bài học</p>
                    <i class="fa fa-book"></i>
                    <img :src="item.anh">
                    <p>Tện bài học</p>
                    <p>{{item.name}}</p>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</div>
  
</template>

<script>

import firebase from '../../../firebase'

export default {
  name: 'listlesson',
  data () {
    return {
        detail: '',
        name :{label: 'Tên bài học', sortable: true, 'class': 'text-center'},
        picture :"",
        rank :"",
        status: "",
        type : "",
        video : "",
      lesson: [],
      errors: [],
      ref: firebase.firestore().collection('lesson'),
    }
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.lesson = [];
      querySnapshot.forEach((doc) => {
        this.lesson.push({
          key: doc.id,
          detail: doc.data().detai,
          name : doc.data().name,
          picture : doc.data().picture,
          type : doc.data().type,
          rank : doc.data().rank,
          status : doc.data().status,
          video : doc.data().video
        });
            
      });
    });
  },
  methods: {
  }
}
</script>

<style>
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
</style>