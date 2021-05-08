<template>
<div>
  <h1>Danh sách bài học</h1>
  <button class="box"><i class="fa fa-plus"></i><a href="/addlesson">Thêm mới</a></button>
    <table class="animate__animated animate__fadeInTopLeft">
        <tr>
            <th>Chi tiết</th>
            <th>Tên bài học</th>
            <th>Ảnh</th>
            <th>Cấp độ</th>
            <th>Trạng thái</th>
            <th>Loại bải học</th>
            <th>Video</th>
            <th>Xóa</th>
            <th> Sửa</th>
        </tr>
        <tr v-for="item in lesson" :key="item.key">
            <td>{{item.detail}}</td>
            <td>{{item.name}}</td>
            <td><img width="150px" height="150px" v-bind:src="item.picture"></td>
            <td>{{item.rank}}</td>
            <td>{{item.status}}</td>
            <td>{{item.type}}</td>
            <td>{{item.video}}</td>
            <td><button class="delete" @click="delLesson(item.key)"><i class="fa fa-close"></i></button></td>
          <td><button class="edit" @click="editLesson(item.key)"><i class="fa fa-edit"></i></button></td>
        </tr>
    </table>
</div>
</template>

<script>

import firebase from '../../firebase'
import router from '../../router'

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
    editLesson (key) {
      router.push({ name: 'editlesson', params: { id: key }})
    },
     delLesson(key){
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