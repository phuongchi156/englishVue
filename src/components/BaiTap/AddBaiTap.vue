<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Thêm bài tập
      </h2>
      <b-jumbotron>
        <b-form @submit="onSubmit">
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nhập nội dung câu hỏi"
          >
            <b-form-textarea
              id="cauhoi"
              v-model="baitap.noidung"
              :rows="2"
              :max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Câu hỏi 1"
          >
            <b-form-input v-model.trim="baitap.ch1"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nhập câu hỏi 2">
            <b-form-input v-model.trim="baitap.ch2"></b-form-input>
          </b-form-group>
           <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nhập câu hỏi 3">
            <b-form-input v-model.trim="baitap.ch3"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nhập câu hỏi 4"
          >
            <b-form-input v-model.trim="baitap.ch4"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nhập kết quả"
          >
            <b-form-input
              v-model.trim="baitap.ketqua"
            ></b-form-input>
          </b-form-group>
                    <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nhập cấp độ"
          >
            <b-form-input
              v-model.trim="baitap.cap"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Chọn bài học"
          >
       <b-form-select v-model="baitap.id_bh">
         <b-form-select-option v-for="item in lesson" :key="item.key" :value="item.key">{{item.name}}</b-form-select-option>
       </b-form-select>
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
  name: "addbaitap",
  data() {
    return {
      ref: firebase.firestore().collection("baitap"),
      baitap: {},
      detail: '',
        name :{label: 'Tên bài học', sortable: true, 'class': 'text-center'},
        picture :"",
        rank :"",
        status: "",
        type : "",
        video : "",
      lesson: [],
      errors: [],
      refL: firebase.firestore().collection('lesson'),
    };
  },
  created () {
    this.refL.onSnapshot((querySnapshot) => {
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
    onSubmit(evt) {
      evt.preventDefault();
      this.ref
        .add(this.baitap)
        .then((docRef) => {
          this.baitap.noidung = "";
          this.baitap.ch1 = "";
          this.baitap.ch2 = "";
          this.baitap.ch3 = "";
          this.baitap.ch4 = "";
          this.baitap.ketqua = "";
          this.baitap.cap = "";
          this.baitap.id_bh = "";
          console.log(docRef.id);
          router.push({
            name: "listbaitap",
          });
        })
        .catch((error) => {
          alert("Error adding document: ", error);
        });
    },
  },
};
</script>

<style>
.jumbotron {
  padding: 2rem;
}
</style>
