<template>
<div>
  <h1>Danh sách kết quả kiểm tra</h1>
  <div class="find">
      <input placeholder="Nhập nội dung cần tìm" v-model="findValue"><button class="box" @click="Look()"><i class="fa fa-search"></i></button>
  </div>
  
    <table id="customers" class="animate__animated animate__fadeInTopLeft">
        <tr>
            <th>Điểm</th>
            <th>Người dùng</th>
            <th>Đề</th>
            <th>Ngày thi</th>
        </tr>
        <tr v-for="item in ketqua" :key="item.key">
            <td>{{item.diem}}</td>
            <td @click="getNameUser(item.idUser)">{{item.idUser}}</td>
            <td>{{item.made}}</td>
            <td>{{item.ngaythi}}</td>
        </tr>
    </table>
</div>
</template>

<script>

import firebase from '../../firebase'
//import router from '../../router'

export default {
  name: 'listdethi',
  data () {
    return {

        diem: { label: 'Điểm', sortable: true, 'class': 'text-center' },
        nguoidung :{label: 'Tên người dùng', sortable: true, 'class': 'text-center'},
        dethi :{label: 'Đề thi', sortable: true, 'class': 'text-center'},
        ngaythi :{label: 'Ngày thi', sortable: true, 'class': 'text-center'},
        idUser: "",
        idDethi: "",
      ketqua: [],
      errors: [],
      user : [],
      ref: firebase.firestore().collection('ketqua'),
      refdethi : firebase.firestore().collection('dethi'),
      isFind :false,
      findValue: "",
    }
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.ketqua = [];
      querySnapshot.forEach((doc) => {
        this.ketqua.push({
          //key: doc.id,
          diem : doc.data().diem,
          ngaythi : doc.data().ngaythi,
          idDethi : doc.data().made,
          nguoidung  : () => {
          const ref = firebase.firestore().collection('users').doc(doc.data().id_user);
        ref.get().then((doc) => {
          console.log("get id 1", doc.data().id_user);
        if (doc.exists) {
            this.nameUser = doc.data().name;
            }
        });
          },
          
        });
        console.log("id", doc.data().id_user);
        console.log("name = ",this.nguoidung);
      });
    });
  },
  methods: {
    Look(){

        console.log(this.findValue);
    }
  }
}
</script>

<style>
  table {
    width: 87%;
    margin: 0 auto;
  }
  #customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 90%;
  text-align: center;
}

#customers td, #customers th {
  border: 1px solid rgb(160, 183, 255);
  padding: 8px;
  background-color: #aa0ae9;
}

#customers tr:nth-child(even){background-color:  #c966f7;}

#customers tr:hover {background-color:  #c63ffc;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #aa0ae9;
  color: rgb(240, 218, 218);
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
	background: linear-gradient(to right, rgb(231, 218, 243), rgb(224, 160, 243));
	color: rgb(1, 18, 250);
	--width: 70px;
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

.find{
    position: relative;
    display: inline;
    margin-bottom: 35px;
    left: 30%;
}
.find input{
    margin-right: 0%;
    border-radius: 5px;
    border: 1px solid rgb(77, 11, 184); 
}
</style>