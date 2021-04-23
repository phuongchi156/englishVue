<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add EXams
        <b-link href="/listdethi">(Exams List)</b-link>
      </h2>
      <b-jumbotron class="animate__animated animate__slideInRight">
        <b-form @submit="onSubmit">
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nhập mô tả"
          >
            <b-form-textarea
              id="mota"
              v-model="dethi.mota"
              :rows="2"
              :max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nhập ngày tạo"
          >
            <b-form-input id="ngaytao" v-model.trim="dethi.ngaytao"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nhập số câu hỏi">
            <b-form-input id="B" v-model.trim="dethi.socauhoi"></b-form-input>
          </b-form-group>
           <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nhập thời gian">
            <b-form-input id="C" v-model.trim="dethi.thoigian"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Chọn trạng thái">
                <b-form-select  v-model.trim="dethi.trangthai" :options="options"></b-form-select>
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
  name: "adddethi",
  data() {
    return {
     options: [
        {value: true, text: 'true'},
        {value: false, text: 'false'}
      ],
      ref: firebase.firestore().collection("dethi"),
      dethi: {},
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      this.ref
        .add(this.dethi)
        .then((docRef) => {
        this.dethi.mota = "";
        this.dethi.socauhoi = "";
        this.dethi.thoigian = "";
        this.dethi.trangthai = "";
        this.dethi.ngaytao = "";
          console.log(docRef.id);
          router.push({
            name: "listdethi",
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
