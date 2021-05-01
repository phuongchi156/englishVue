<template>
<div>
  <h1>Danh sách tin mới</h1>
  <td><button class="box"><i class="fa fa-plus"></i><a href="/addnew">Thêm mới</a></button></td>
    <table class="animate__animated animate__fadeInTopLeft">
        <tr>
            <th>Ảnh</th>
            <th>Ngày tạo</th>
            <th>Nội dung</th>
            <th>Xóa</th>
            <th> Sửa</th>
        </tr>
        <tr v-for="item in news" :key="item.key">
            <th><img v-bind:src ="item.anh"></th>
            <th>{{item.ngay}}</th>
            <th>{{item.noidung}}</th>
            <td><button class="delete" @click="delNew(item.key)"><i class="fa fa-close"></i></button></td>
          <td><button class="edit" @click="editNew(item.key)"><i class="fa fa-edit"></i></button></td>
        </tr>
    </table>
</div>
</template>

<script>

import firebase from '../../firebase'
import router from '../../router'

export default {
  name: 'listnew',
  data () {
    return {
        anh: { label: 'ảnh', sortable: true, 'class': 'text-center' },
        ngay :{label: 'Ngày tạo', sortable: true, 'class': 'text-center'},
        noidung :{label: 'Nội dung', sortable: true, 'class': 'text-center'},
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
          ngay : doc.data().ngay,
          noidung : doc.data().noidung,
        });
      });
    });
  },
  methods: {
    editNew (key) {
      router.push({ name: 'editnew', params: { id: key }})
    },
     delNew(key){
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