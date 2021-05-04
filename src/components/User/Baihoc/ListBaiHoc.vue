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
              <div class="row" v-for="item in lesson" :key="item.key">
                <div class="col-lg-6 col-md-6  col-sm-6 animate__animated animate__rollIn">
                  <div class="something mu-single-feature">
                    <md-button v-if="item.status" class="md-raised md-primary" @click="learnLesson(item.key)">Let's learn</md-button>
                    <md-button v-if="!item.status" class="md-raised md-accent">Not enough rights</md-button>
                    <br>
                    <i v-if="item.type !=='grammar'" class="fa fa-film"></i>
                    <i v-if="item.type ==='grammar'" class="fa fa-book"></i>
                    <p>Tên bài học: {{item.name}}</p><br>
                    <img v-bind:src="item.picture">
                  </div>
                </div>
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
import router from '../../../router'

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
    learnLesson(key){
      router.push({ name: 'lessondetail', params: { id: key }});
    }
  }
}
</script>

<style>
.something{
  position: relative;
  background-color: rgb(255, 255, 255);
  border: 1px solid blueviolet;
  width: 100%;
  height: fit-content;
  border-radius: 10px;
  margin-top: 10px;
  padding: 5px 10px 10px 10px;
  margin-bottom: 15px;
  display: block;
  left: 50%;
      -webkit-box-shadow: 3px 3px 5px 6px rgb(213, 156, 247);  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    3px 3px 5px 6px rgb(213, 156, 247);  /* Firefox 3.5 - 3.6 */
  box-shadow:         3px 3px 5px 6px rgb(213, 156, 247);
}
.something img{
  border-radius: 10px;
  box-shadow:         3px 3px 5px 6px rgb(213, 156, 247);
}
</style>