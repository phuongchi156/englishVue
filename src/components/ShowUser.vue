<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit User
        <b-link href="/userlist">(User List)</b-link>
      </h2>
      <b-jumbotron>
        <template slot="header">
          {{user.title}}
        </template>
        <template slot="lead">
          name: {{user.name}}<br>
          username: {{user.username}}<br>
          email: {{user.email}}<br>
          address: {{user.address}}<br>
        </template>
        <hr class="my-4">
        <b-btn class="edit-btn" variant="success" @click.stop="edituser(key)">Edit</b-btn>
        <b-btn variant="danger" @click.stop="delUser(key)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

//import firebase from '../Firebase'
import firebase from '../firebase'
import router from '../router'

export default {
  name: 'showuser',
  data () {
    return {
      key: '',
      user: {}
    }
  },
  created () {
    const ref = firebase.firestore().collection('users').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.key = doc.id;
        this.user = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    edituser (id) {
      router.push({
        name: 'edituser',
        params: { id: id }
      })
    },
    // deleteuser (id) {
    //   firebase.firestore().collection('users').doc(id).delete().then(() => {
    //     router.push({
    //       name: 'listuser'
    //     })
    //   }).catch((error) => {
    //     alert("Error removing document: ", error);
    //   });
    // }
         delUser(id){
      this.ref.doc(id).delete().then(() => {
        router.push({
          name: 'userlist'
        })
      }).catch((error) => {alert("Error removing:", error);});
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
  .edit-btn {
    margin-right: 20px;
    width: 70px;
  }
</style>