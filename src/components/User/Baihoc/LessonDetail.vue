<template>
<div id="lessondetail">
      <section id="mu-features">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="mu-features-area">
            <div class="mu-title">
              <h1 style="color: blueviolet;"> Bài học {{lesson.type}}</h1>
                      <hr style="width:40%;height:2px;border-width:0;color:violet;background-color:blueviolet">
                      <h2 style="color: blue;">Chủ đề: {{lesson.name}}</h2>
                      <img style="border-radius: 15px;" :src="lesson.picture" alt="" width="900px" height="600px">
                      <hr style="width:90%;height:3px;border-width:0;color:blueviolet;background-color:blueviolet">
            </div>
            <div class="mu-features-content" >
              <div class="row">
                <div class="col-lg-6 col-md-6  col-sm-6">
                    <div class="mu-features-content something" v-if="lesson.type==='grammar'">
    <h2>Giải thích kiến thức cơ bản</h2>
    <hr style="width:70%;height:1px;border-width:0;color:blueviolet;background-color:blueviolet">
    <span>{{lesson.detail}}</span>
    <hr style="width:90%;height:1px;border-width:0;color:violet;background-color:blueviolet">
    <p>{{lesson.video}}</p>
  </div>
    <div v-if="lesson.type !=='grammar'">
      <div class="embed-responsive embed-responsive-4by3 something"> 
      <iframe class="embed-responsive-item" :src="lesson.video" width="560" height="915" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
      </div>
      <br>
      <div class="mu-features-content something">
    <h2>Tổng hợp kiến thức cơ bản</h2>
    <span>{{lesson.detail}}</span></div>
  </div>
  <div>
    <b-button variant="primary" @click="doBaitap()">Let's do some exercises</b-button>
    <div v-if="showBaitap">
    <div>
      <div class="row"  v-for="i in baitap" :key="i.key">
        <b-form>
          <p>{{i.noidung}}</p>
      <b-form-checkbox-group
        v-model="i.cap"
      >
        <b-form-checkbox value="ch1">{{i.ch1}}</b-form-checkbox>
        <b-form-checkbox value="ch2">{{i.ch2}}</b-form-checkbox>
        <b-form-checkbox value="ch3">{{i.ch3}}</b-form-checkbox>
        <b-form-checkbox value="ch4">{{i.ch4}}</b-form-checkbox>
      </b-form-checkbox-group>
      <div v-if="showDapan">
        <span v-if="i.cap === i.ketqua" class="correct">Correct <i class="fa fa-check-circle"></i></span>
        <span v-if="i.cap != i.ketqua" class="wrong">Wrong <i class="fa fa-times-circle"></i></span>
      </div>

        <hr style="width:70%;height:3px;border-width:0;color:blueviolet;background-color:blueviolet">
        </b-form>
      </div>
      <b-button variant="primary" @click="showAnswer()"><p>Check</p></b-button>
    </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
        </div>
      </div>
    </div>
  </section>
    <div class="comment">
    <hr style="width:100%;height:4px;border-width:0;color:blueviolet;background-color:blueviolet">
    <h3>Comments</h3>
     <hr style="width:50%;height:2px;border-width:0;color:violet;background-color:blueviolet;">
    <div v-for="item in phanhoi" :key="item.keyC">
      <div id="usercomment">
      <h5>{{item.username}}</h5>
      <p>{{item.noidungC}}</p>
      <i v-if="!item.status" id="commentWait" class="fa fa-heart"></i>
      <i v-if="item.status" id="commentCheck" class="fa fa-heart"></i>
      </div><br>
    </div>
      <b-input-group
    prepend="Enter your comment">
    <b-form-input v-model="comment"></b-form-input>
    <b-input-group-append>
      <b-button size="sm" text="Button" variant="success" @click="sendComment()">Comment</b-button>
    </b-input-group-append>
  </b-input-group>
  </div>


</div>
</template>

<script>

import firebase, { auth } from '../../../firebase';

export default {
  name: 'lessondetail',
  data () {
    return {
      showBaitap : false,
      comment : "",
      showDapan : false,
      status: '',
      name : '',
      avatar: '',
      selected : '',
      baitap : [],
      lesson: [],
      errors: [],
      id_bh: { label: 'Bài học', sortable: true, 'class': 'text-left' },
        ch4: { label: 'A', sortable: true, 'class': 'text-left' },
        ch3 :{label: 'B', sortable: true, 'class': 'text-left'},
        ch2 :{label: 'C', sortable: true, 'class': 'text-left'},
        ch1 :{label: 'D', sortable: true, 'class': 'text-left'},
        cap :{label: 'Level', sortable: true, 'class': 'text-left'},
        ketqua :{label: 'Đáp án', sortable: true, 'class': 'text-left'},
        noidung: { label: 'Nội dung câu hỏi',sortable: true, 'class': 'text-center' },
      refLesson: firebase.firestore().collection('lesson'),
      refBaitap : firebase.firestore().collection('baitap'),
      refComment : firebase.firestore().collection('phanhoi'),
      refUser : firebase.firestore().collection('users'),
      phanhoi :[],
      id_user :'',
      noidungC : '',
      username : '',
    }
  },
  created () {
     const refLesson = firebase.firestore().collection('lesson').doc(this.$route.params.id);
    refLesson.get().then((doc) => {
      if (doc.exists) {
       this.lesson = doc.data();
      } else {
        alert("No such document!");
      }
     });

     this.refBaitap.onSnapshot((querySnapshot) => {
      this.baitap = [];
      querySnapshot.forEach((doc) => {
        if(doc.data().id_bh === this.$route.params.id){
        this.baitap.push({
          key: doc.id,
          ch1: doc.data().ch1,
          ch2 : doc.data().ch2,
          ch3 : doc.data().ch3,
          ch4 : doc.data().ch4,
          cap : doc.data().cap,
          ketqua : doc.data().ketqua,
          noidung : doc.data().noidung,
          id_bh : doc.data().id_bh,
        });
        }
      });
    });

         this.refComment.onSnapshot((querySnapshot) => {
      this.phanhoi = [];
      querySnapshot.forEach((doc) => {
        this.phanhoi.push({
          keyC: doc.id,
          noidungC : doc.data().noidung,
          id_user : doc.data().id_user,
          username :doc.data().username,
          status : doc.data().status,
        });
      });
    });
  },
  methods:{
    doBaitap(){
      this.showBaitap = !this.showBaitap;
    },
    showAnswer(){
      this.showDapan =! this.showDapan;
      console.log("click");
    },
    sendComment(){
      this.refComment.add({
        noidung : this.comment,
        username: this.$store.state.userProfile.name,
        id_user : auth.currentUser.uid,
        status : false,
      })
      this.comment ="";
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
.something span{
  color: red;
  font-size: 25px;
  font-family: cursive;
  font-weight: 100;
}
.something p{
  color: rgb(0, 17, 255);
  font-size: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 100;
}
.wrong{
  color: red;
  font-size: 15px;
  font-family: cursive;
  font-weight: 100;
  margin-bottom: 15px;
}
.correct{
  color: rgb(0, 255, 34);
  font-size: 15px;
  font-family: cursive;
  font-weight: 100;
  margin-bottom: 15px;
}
.comment{
  position: relative;
  background-color: rgb(226, 224, 224);
  width: 700px;
  padding: 0px 0px 20px 0px;
  margin-left: 30px;
  margin-top: 30px;
  box-shadow: 1px 1px 3px 4px rgb(221, 221, 221);
  text-align: left;
}
.comment h3{
  color: blue;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; 
  text-align: center;
}
#usercomment{
  background-color: aliceblue;
  margin-left: 3px;
  padding: 6px 2px 2px 5px;
  border-radius: 20px;
  margin-right: 6px;
  width: 80%;
}
#commentCheck{
  float: right;
  color: red;
  margin: 3px 7px 7px 12px;

}
#commentWait{
  float: right;
  color: blue;
  position: relative;
  margin: 3px 7px 7px 12px;
}
</style>
