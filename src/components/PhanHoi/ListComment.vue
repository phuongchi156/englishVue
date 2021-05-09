<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Question Comment
      </h2>
      <!-- <button class="box"><i class="fa fa-plus"></i><router-link to="/addquestion">Thêm mới</router-link></button> -->
      <table class="animate__animated animate__fadeInTopLeft">
        <tr>
        <th>Id_user</th>
        <th>username</th>
        <th>Comment</th>

        <th>Delete</th>
                <th>Status</th>

        </tr>
        <tr v-for="item in phanhoi" v-bind:key="item.key">
          <td>{{item.id_user}}</td>
          <td>{{item.username}}</td>
          <td>{{item.comment}}</td>
          <td><button class="delete" @click="delQuestion(item.key)"><i class="fa fa-close"></i></button></td>
       <td>
      <b-button v-if="item.status" @click="Seen(item.key)" variant="outline-success">Seen</b-button>
      <b-button v-if="!item.status" @click="Seen(item.key)" variant="outline-danger">Status false</b-button>
 </td>
        </tr>
      </table>
      
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../../firebase';
import router from '../../router';
export default {
  name: 'questionlist',
  data () {
    return {
        comment: '',
        id_user: '',
        username: '',
        status : '',
        phanhoi: [],
      errors: [],
      ref: firebase.firestore().collection('phanhoi'),
    }
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.phanhoi = [];
      querySnapshot.forEach((doc) => {
        this.phanhoi.push({
          key: doc.id,
          id_user: doc.data().id_user,
          username : doc.data().username,
          comment : doc.data().noidung,
          status : doc.data().status,
        });
      });
    });
  },
  methods: {
     delQuestion(key){
      this.ref.doc(key).delete().then(() => {
        alert('Đã xóa thành công'),
        console.log('delete', key)
      }).catch((error) => {alert("Error removing:", error);});
    },
    Seen(key){
      router.push({ name: 'seencomment', params: { id: key}})
    },

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
