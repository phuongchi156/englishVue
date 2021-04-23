<template>
  <b-row>
    <b-col cols="12">
      <h2>
        User List
      </h2>
      <button class="detail"><b-link href="/useradd">Add User</b-link></button>
      <table id="customers" class="animate__animated animate__slideInUp">
        <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Address</th>
        <th> Delete</th>
        <th>Edit</th>
        <th>Detail</th>
        </tr>
        <tr v-for="item in users" v-bind:key="item.key">
          <td>{{item.name}}</td>
          <td>{{item.username}}</td>
          <td>{{item.email}}</td>
          <td>{{item.address}}</td>
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
  border: 1px solid rgb(150, 173, 243);
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #9c9c9c;}

#customers tr:hover {background-color: rgb(129, 126, 126);}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #817c85;
  color: rgb(156, 155, 155);
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