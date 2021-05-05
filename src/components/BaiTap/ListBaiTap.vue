<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Danh sách bài tập
      </h2>
  <td><button class="box"><i class="fa fa-plus"></i><router-link to="/addbaitap">Thêm mới</router-link></button></td>
    <table class="animate__animated animate__fadeInTopLeft ">
        <tr>
        <th>Nội dung</th>
        <th>câu hỏi 1</th>
        <th>câu hỏi 2</th>
        <th>câu hỏi 3</th>
        <th>câu hỏi 4</th>
        <th>Đáp án</th>
        <th>Bài học</th>
        <th>Cấp</th>
        <th>Delete</th>
        <th>Edit</th>
        </tr>
        <tr v-for="item in baitap" v-bind:key="item.key">
          <td>{{item.noidung}}</td>
          <td>{{item.ch1}}</td>
          <td>{{item.ch2}}</td>
          <td>{{item.ch3}}</td>
          <td>{{item.ch4}}</td>
          <td>{{item.ketqua}}</td>
           <td>{{item.baihoc}}</td>
            <td>{{item.cap}}</td>
          <td><button class="delete" @click="delBaiTap(item.key)"><i class="fa fa-close"></i></button></td>
          <td><button class="edit" @click="editBaiTap(item.key)"><i class="fa fa-edit"></i></button></td>
        </tr>
      </table>
      
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../../firebase'
import router from '../../router/index'

export default {
  name: 'listbaitap',
  data () {
    return {
        baihoc: { label: 'Bài học', sortable: true, 'class': 'text-left' },
        ch4: { label: 'A', sortable: true, 'class': 'text-left' },
        ch3 :{label: 'B', sortable: true, 'class': 'text-left'},
        ch2 :{label: 'C', sortable: true, 'class': 'text-left'},
        ch1 :{label: 'D', sortable: true, 'class': 'text-left'},
        cap :{label: 'Level', sortable: true, 'class': 'text-left'},
        ketqua :{label: 'Đáp án', sortable: true, 'class': 'text-left'},
        noidung: { label: 'Nội dung câu hỏi',sortable: true, 'class': 'text-center' },
        baitap: [],
      errors: [],
      ref: firebase.firestore().collection('baitap'),
    }
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.baitap = [];
      querySnapshot.forEach((doc) => {
        this.baitap.push({
          key: doc.id,
          ch1: doc.data().ch1,
          ch2 : doc.data().ch2,
          ch3 : doc.data().ch3,
          ch4 : doc.data().ch4,
          cap : doc.data().cap,
          ketqua : doc.data().ketqua,
          noidung : doc.data().noidung,
          baihoc : doc.data().id_bh,
        });
      });
    });
  },
  methods: {
    editBaiTap(key) {
      router.push({ name: 'editbaitap', params: { id: key}})
    },
     delBaiTap(key){
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
