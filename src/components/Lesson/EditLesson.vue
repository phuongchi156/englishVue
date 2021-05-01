<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit Exams         
      </h2>
<b-jumbotron class="animate__animated animate__zoomIn">
        <b-form @submit="onSubmit">
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nhập nội dung bài học "
          >
            <b-form-textarea
              v-model="lesson.detai"
              :rows="2"
              :max-rows="6"></b-form-textarea>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nhập tên bài học"
          >
            <b-form-input v-model.trim="lesson.name"></b-form-input>
          </b-form-group>
            <div>
    <div >
      <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nhập link ảnh"
          >
            <b-form-input v-model.trim="lesson.picture"></b-form-input>
          </b-form-group>
      <p>Or upload image in your device</p>
      <input type="file" @change="previewImage" accept="image/*" >
    </div>
    <div>
    </div>
    <div>
        <img class="preview" width="150px" height="150px" v-bind:src="lesson.picture">
        <br>
    </div>
  </div>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nhập cấp">
            <b-form-input id="B" v-model.trim="lesson.rank"></b-form-input>
          </b-form-group>
                    <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nhập loại bài học">
            <b-form-input id="B" v-model.trim="lesson.type"></b-form-input>
          </b-form-group>
                    <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nhập link video">
            <b-form-input id="B" v-model.trim="lesson.video"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Chọn trạng thái">
                <b-form-select  v-model="lesson.status" :options="options"></b-form-select>
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
  name: 'editlesson',
  data () {
    return {
      imageData: null,
      image: null,
      uploadValue: 0,
      key: this.$route.params.id,
      lesson: {},
      options: [
        {value: true, text: 'true'},
        {value: false, text: 'false'}
      ],
    }
  },
  created () {
     const ref = firebase.firestore().collection('lesson').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
       this.lesson = doc.data();
      } else {
        alert("No such document!");
      }
     });
  },
  methods: {
     previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },

    onSubmit (evt) {
      evt.preventDefault();
      this.image=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).doc(this.imageData);
      storageRef.on(snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.image =url;
           this.lesson.picture = url;
           const updateRef = firebase.firestore().collection('lesson').doc(this.$route.params.id);
      updateRef.set(this.lesson).then((docRef) => {
        this.key = ''
        this.lesson.detai = "";
        this.lesson.name = "";
        this.lesson.picture = "";
        this.lesson.rank = "";
        this.lesson.status = "";
        this.lesson.type = "";
        this.lesson.video = "";
        console.log(docRef.id)
        //console.log(this.image);
        router.push({ name: 'listlesson'})
      })
      .catch(() => {
        //alert("Error adding document: ", error);
        router.push({ name: 'listlesson'})
      });

        });
      }
      );
    },


  }
}
</script>

<style scoped="">
  .jumbotron {
    padding: 2rem;
  }
</style>
