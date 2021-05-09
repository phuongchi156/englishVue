<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Sửa bài tập
      </h2>
<b-jumbotron>
        <b-form @submit="onSubmit">
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="User name"
          >
            <b-form-input disabled v-model.trim="phanhoi.username"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nội dung">
            <b-form-input disabled v-model.trim="phanhoi.noidung"></b-form-input>
          </b-form-group>
           <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="User id">
            <b-form-input disabled v-model.trim="phanhoi.id_user"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Trạng thái"
          >
       <b-form-select v-model="phanhoi.status" :options="options"></b-form-select>
          </b-form-group>
          <b-button type="submit" variant="primary">Save</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../../firebase'
import router from '../../router'

export default {
  name: 'seencomment',
  data () {
    return {
      key: this.$route.params.id,
      phanhoi: {},
      options :[
        {value: true, text : 'Đã xem'},
        {value: false, text : 'Chưa duyệt'}
      ]
    }
  },
  created () {
     const ref = firebase.firestore().collection('phanhoi').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
       this.phanhoi = doc.data();
      } else {
        alert("No such document!");
      }
     });
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const updateRef = firebase.firestore().collection('phanhoi').doc(this.$route.params.id);
      updateRef.set(this.phanhoi).then(() => {
        this.key = ''
          this.phanhoi.noidung = "";
          this.phanhoi.id_user = '';
          this.phanhoi.username ='';
          this.phanhoi.status ='';
        router.push({ name: 'listcomment'});
        //router.push({ name: 'showuser', params: { id: this.$route.params.id }})
      })
      .catch(() => {
        //alert("Error adding document: ", error);
        router.push({ name: 'listcomment'});
      });
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>
