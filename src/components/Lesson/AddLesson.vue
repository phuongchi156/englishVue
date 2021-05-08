<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add Lesson
      </h2>
      <b-jumbotron class="animate__animated animate__slideInRight">
        <b-form @submit="onSubmit">
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nhập nôi dung bài học"
          >
            <b-form-textarea
              v-model="lesson.detai"
              :rows="2"
              :max-rows="6"
            ></b-form-textarea>
          </b-form-group>
           <div>
    <div >
      <p>Chọn ảnh</p>
      <input type="file" @change="previewImage" accept="image/*" >
    </div>
    <div v-if="imageData!=null">
        <img class="preview" v-bind:src="picture">
        <br>
    </div>
  </div>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nhập tên bài học"
          >
            <b-form-input v-model.trim="lesson.name"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nhập cấp độ">
            <b-form-input v-model.trim="lesson.rank"></b-form-input>
          </b-form-group>
           <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nhập link video">
            <b-form-input v-model.trim="lesson.video"></b-form-input>
          </b-form-group>
                     <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nhập loại bài học">
            <b-form-input id="C" v-model.trim="lesson.type"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Chọn trạng thái">
                <b-form-select  v-model.trim="lesson.status" :options="options"></b-form-select>
          </b-form-group>
          <b-button type="submit" variant="primary">Save</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
//import firebase from '../Firebase'
import firebase from "../../firebase";
import router from "../../router";

export default {
  name: "addlesson",
  data() {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0,
     options: [
        {value: true, text: 'true'},
        {value: false, text: 'false'}
      ],
      ref: firebase.firestore().collection("lesson"),
      lesson: {},
    };
  },
  methods: {
     previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },

    onSubmit(evt) {
      evt.preventDefault();
      this.picture=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture =url;
          this.lesson.picture = url;
          console.log("lesson ", this.lesson.picture);
                this.ref
        .add(this.lesson)
        .then((docRef) => {
        this.lesson.detai = "";
        this.lesson.name = "";
        this.lesson.type = "";
        this.lesson.rank = "";
        this.lesson.video = "";
        this.lesson.status = "";
        this.lesson.picture = "";
        console.log('picture url',this.lesson.picture);
          console.log(docRef.id);
          router.push({
            name: "listlesson",
          });
        })
        .catch((error) => {
          alert("Error adding document: ", error);
        });
        });
      }
      );
    },
  },
};
</script>

<style>
.jumbotron {
  padding: 2rem;
}
</style>
