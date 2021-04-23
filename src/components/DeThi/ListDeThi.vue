<template>
<div>
  <h1>Danh sách đề thi</h1>
  <td><button class="box"><i class="fa fa-plus"></i><a href="/adddethi">Thêm mới</a></button></td>
    <table class="animate__animated animate__fadeInTopLeft">
        <tr>
            <th>Mô tả</th>
            <th>Ngày tạo</th>
            <th>Số câu hỏi</th>
            <th>Thời gian</th>
            <th>Trạng thái</th>
            <th>Xóa</th>
            <th> Sửa</th>
        </tr>
        <tr v-for="item in dethi" :key="item.key">
            <th>{{item.mota}}</th>
            <th>{{item.ngaytao}}</th>
            <th>{{item.socauhoi}}</th>
            <th>{{item.thoigian}}</th>
            <th>{{item.trangthai}}</th>
            <td><button class="delete" @click="delDethi(item.key)"><i class="fa fa-close"></i></button></td>
          <td><button class="edit" @click="editDethi(item.key)"><i class="fa fa-edit"></i></button></td>
        </tr>
    </table>
</div>
</template>

<script>

import firebase from '../../firebase'
import router from '../../router'

export default {
  name: 'listdethi',
  data () {
    return {
        mota: { label: 'Mô tả', sortable: true, 'class': 'text-center' },
        ngaytao :{label: 'Ngày tạo', sortable: true, 'class': 'text-center'},
        socauhoi :{label: 'Số câu hỏi', sortable: true, 'class': 'text-center'},
        thoigian :{label: 'Thời gian', sortable: true, 'class': 'text-center'},
        trangthai: { label: 'Trạng thái',sortable: true, 'class': 'text-center' },
      dethi: [],
      errors: [],
      ref: firebase.firestore().collection('dethi'),
    }
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.dethi = [];
      querySnapshot.forEach((doc) => {
        this.dethi.push({
          key: doc.id,
          mota: doc.data().mota,
          ngaytao : doc.data().ngaytao,
          thoigian : doc.data().thoigian,
          socauhoi : doc.data().socauhoi,
          trangthai : doc.data().trangthai
        });
      });
    });
  },
  methods: {
    editDethi (key) {
      router.push({ name: 'editdethi', params: { id: key }})
    },
     delDethi(key){
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