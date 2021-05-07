<template>
<div class="col-md-12 col-sm-12 col-xs-12">
    <div class="x_panel">
        <div class="x_title">
            <h2>Đề bài <small>Thêm câu hỏi vào</small></h2>
            <div class="clearfix"></div>
        </div>
        <div class="x_content">
            <div class="col-md-9 col-sm-9 col-xs-12">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Mã câu hỏi</th>
                            <th>Câu hỏi</th>
                            <th>Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr v-for="item in questions" :key="item.key">
                                <th scope="row">{{item.key}}</th>
                                <td>
                                        <i class="fa fa-question-circle"></i>
                                        <p >{{item.cauhoi}}</p>
                                </td>
                                <td><b-button pill variant="outline-danger" @click="delQuestionAdd(item.key)"><i class="fa fa-minus-circle"></i></b-button></td>
                            </tr>
                    </tbody>
                </table>
                <button @click="addQuiz()" class="btn btn-warning"><i class="fa fa-plus-circle"></i> Thêm câu hỏi vào đề bài</button>
                <router-link to="/listdethi" class="btn btn-default"><i class="fa fa-undo"></i> Quay lại</router-link>
            </div>
            <div v-for="i in ch_db" :key="i.key">
              {{i.id_de}}
              {{i.id_question}}
            </div>
        </div>
    </div>
</div>

</template>

<script>

import firebase from '../../firebase'
//import Question from '../Question/ListQuestion'
import router from '../../router'

export default {
  name: 'dethidetail',
  // components:{
  //   Question
  // },
  data () {
    return {
        idde: this.$route.params.id,
        id_de :{label: 'Để', sortable: true, 'class': 'text-center'},
        id_question: { label: 'Câu hỏi',sortable: true, 'class': 'text-center' },
        keyc: '',
      ch_db: [],
      errors: [],
      debai : [],
      ref: firebase.firestore().collection('ch_db'),
        cauhoi :{label: 'Câu hỏi', sortable: true, 'class': 'text-left'},
        questions: [],
        quiz : [],
      keyq: '',
      refQuestion: firebase.firestore().collection('questions'),
      
    }
    
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.ch_db = [];
      querySnapshot.forEach((doc) => {
        if(doc.data().id_de === this.idde){
        this.ch_db.push({
          keyc: doc.id,
          id_de : doc.data().id_de,
          id_question : doc.data().id_questions
        });
        }
      });
    });

    // this.debai = this.ref.where(x => x.id_de === this.idde).ToList();

    // console.log("////////////",this.debai);

     for(let i=0;i<this.ch_db.length;i++){
        this.refQuestion.onSnapshot((querySnapshot) => {
      this.questions = [];
      querySnapshot.forEach((doc) => {
        if(doc.id === this.ch_db[i].id_question){
          console.log("come here");
          this.questions.push({
          keyq : doc.id,
          cauhoi : doc.data().cauhoi,
        });
        }
      });
    });
    }


    
    console.log("//////////",this.ch_db);
  },


  methods: {
    // delQuestionAdd (key){
    //   console.log(key);
    //   alert("Đã xóa!!1");
    // },
    addQuiz () {
      router.push({ name: 'addquiz', params: { id: this.idde}});
    },

    //  delDethi(key){
    //   this.ref.doc(key).delete().then(() => {
    //     alert('Đã xóa thành công'),
    //     console.log('delete', key)
    //   }).catch((error) => {alert("Error removing:", error);});
    // }
  }
}
</script>

<style>
th, td {
  border-bottom: 1px solid rgb(55, 52, 228);
  padding: 5px;
}
.edit{
  background-color: rgb(110, 110, 253);
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
}
.new{
  background-color: rgb(18, 177, 240);
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  margin-left: 40px;
  margin-bottom: 10px;
}
.delete{
  background-color: rgb(247, 132, 132);
    border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
    border-radius: 8px;
}
.edit:hover{
  background-color: RoyalBlue;
}
.delete:hover{
  background-color: red;
}


.box {
	background: linear-gradient(to right, rgb(231, 218, 243), rgb(224, 160, 243));
	color: rgb(1, 18, 250);
	--width: 150px;
	--height: calc(var(--width) / 3);
	width: var(--width);  
	height: var(--height);
	text-align: center;
	font-family: sans-serif;
	letter-spacing: 0.2em;
	border: 1px solid rgb(77, 11, 184);
	border-radius: 2em;
	transform: perspective(500px) rotateY(-15deg);
	text-shadow: 6px 3px 2px rgba(0, 0, 0, 0.2);
	box-shadow: 2px 0 0 5px rgba(0, 0, 0, 0.2);
	transition: 0.5s;
	position: relative;
	overflow: hidden;
  margin-bottom: 15px;
  margin-left: 40px;
}

.box:hover {
	transform: perspective(500px) rotateY(15deg);
	text-shadow: -6px 3px 2px rgba(0, 0, 0, 0.2);
	box-shadow: -2px 0 0 5px rgba(0, 0, 0, 0.2);
}

.box::before {
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	background: linear-gradient(to right, transparent, white, transparent);
	left: -100%;
	transition: 0.5s;
}

.box:hover::before {
	left: 100%;
}
</style>