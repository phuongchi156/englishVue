<template>
  <b-row>
    <b-col cols="12">
      <h2>
        User List
      </h2>
      <button class="detail"><router-link to="/useradd">Add User</router-link></button>
      <table class="animate__animated animate__slideInUp">
        <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Address</th>
        <th>Permiss</th>
        <th> Delete</th>
        <th>Edit</th>
        <th>Detail</th>
        </tr>
        <tr v-for="item in users" v-bind:key="item.key">
          <td>{{item.name}}</td>
          <td>{{item.username}}</td>
          <td>{{item.email}}</td>
          <td>{{item.address}}</td>
          <td><p v-if="item.permiss">Admin</p>
          <p v-if="!item.permiss">User</p></td>
          <td><button class="delete" v-on:click="delUser(item.key)"><i class="fa fa-close"></i></button></td>
          <td><button class="edit" @click="editUser(item.key)"><i class="fa fa-edit"></i></button></td>
          <td><button class="detail" @click="details(item.key)"><i class="fa fa-info"></i></button></td>
        </tr>
      </table>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../firebase'
import router from '../router'

export default {
  name: 'userlist',
  data () {
    return {
        name: { label: 'Name', sortable: true, 'class': 'text-left' },
        username :{label: 'Username', sortable: true, 'class': 'text-left'},
        email :{label: 'Email', sortable: true, 'class': 'text-left'},
        address :{label: 'Address', sortable: true, 'class': 'text-left'},
        permiss :'',
        actions: { label: 'Action', 'class': 'text-center' },
      users: [],
      errors: [],
      ref: firebase.firestore().collection('users'),
    }
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.users = [];
      querySnapshot.forEach((doc) => {
        this.users.push({
          key: doc.id,
          name: doc.data().name,
          username : doc.data().username,
          email : doc.data().email,
          address : doc.data().address,
          permiss : doc.data().permiss,
        });
      });
    });
  },
  methods: {
    details (key) {
      router.push({ name: 'showuser', params: { id: key}})
    },
    editUser (key) {
      router.push({ name: 'edituser', params: { id: key}})
    },
     delUser(key){
      this.ref.doc(key).delete().then(() => {
        // router.push({
        //   name: 'userlist'
        // }),
        alert('Đã xóa thành công'),
        console.log('delete', key)
      }).catch((error) => {alert("Error removing:", error);});
    }
  }
}
</script>

<style>
table{
  width: 80%;
  margin-left: 130px;
}
th, td {
  border-bottom: 1px solid rgb(55, 52, 228);
  padding: 5px;
}
.edit{
  background-color: rgb(110, 110, 253);
  border: none;
  color: white;
  padding: 8px 10px;
  font-size: 12px;
  cursor: pointer;
  border-radius: 8px;
}
.delete{
  background-color: rgb(247, 132, 132);
    border: none;
  color: white;
  padding: 8px 10px;
  font-size: 12px;
  cursor: pointer;
    border-radius: 8px;
}
.detail{
  background-color: rgb(110, 253, 117);
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
.detail:hover{
  background-color: rgb(24, 231, 86);
}

 
</style>