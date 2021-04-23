<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Question List
      </h2>
      <td><button class="box"><i class="fa fa-plus"></i><a href="/addquestion">Thêm mới</a></button></td>
      <table class="animate__animated animate__fadeInTopLeft">
        <tr>
        <th>A</th>
        <th>B</th>
        <th>C</th>
        <th>D</th>
        <th>Đáp án</th>
        <th>Câu hỏi</th>
        <th>Delete</th>
        <th>Edit</th>
        </tr>
        <tr v-for="item in questions" v-bind:key="item.key">
          <td>{{item.A}}</td>
          <td>{{item.B}}</td>
          <td>{{item.C}}</td>
          <td>{{item.D}}</td>
          <td>{{item.answer}}</td>
          <td>{{item.cauhoi}}</td>
          <td><button class="delete" @click="delQuestion(item.key)"><i class="fa fa-close"></i></button></td>
          <td><button class="edit" @click="editQuestion(item.key)"><i class="fa fa-edit"></i></button></td>
        </tr>
      </table>
      
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../../firebase'
import router from '../../router/index'

export default {
  name: 'questionlist',
  data () {
    return {
        A: { label: 'A', sortable: true, 'class': 'text-left' },
        B :{label: 'B', sortable: true, 'class': 'text-left'},
        C :{label: 'C', sortable: true, 'class': 'text-left'},
        D :{label: 'D', sortable: true, 'class': 'text-left'},
        answer :{label: 'Answer', sortable: true, 'class': 'text-left'},
        cauhoi :{label: 'Câu hỏi', sortable: true, 'class': 'text-left'},
        actions: { label: 'Action', 'class': 'text-center' },
        questions: [],
      errors: [],
      ref: firebase.firestore().collection('questions'),
    }
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.questions = [];
      querySnapshot.forEach((doc) => {
        this.questions.push({
          key: doc.id,
          A: doc.data().A,
          B : doc.data().B,
          C : doc.data().C,
          D : doc.data().D,
          answer : doc.data().answer,
          cauhoi : doc.data().cauhoi
        });
      });
    });
  },
  methods: {
    editQuestion(key) {
      router.push({ name: 'editquestion', params: { id: key}})
    },
     delQuestion(key){
      this.ref.doc(key).delete().then(() => {
        alert('Đã xóa thành công'),
        console.log('delete', key)
      }).catch((error) => {alert("Error removing:", error);});
    }

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
	background: linear-gradient(to right, rgb(187, 210, 245), rgb(146, 127, 252));
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
