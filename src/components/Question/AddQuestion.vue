<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add Question
      </h2>
      <b-jumbotron class="animate__animated animate__slideInRight">
        <b-form @submit="onSubmit">
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Enter question text"
          >
            <b-form-textarea
              id="cauhoi"
              v-model="question.cauhoi"
              :rows="2"
              :max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Enter A"
          >
            <b-form-input id="A" v-model.trim="question.A">{{
              question.B
            }}</b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Enter B">
            <b-form-input id="B" v-model.trim="question.B"></b-form-input>
          </b-form-group>
           <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Enter C">
            <b-form-input id="C" v-model.trim="question.C"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Enter D"
          >
            <b-form-input id="D" v-model.trim="question.D"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Enter answer"
          >
            <b-form-input
              id="answer"
              v-model.trim="question.answer"
            ></b-form-input>
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
  name: "addquestion",
  data() {
    return {
      ref: firebase.firestore().collection("questions"),
      question: {},
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      this.ref
        .add(this.question)
        .then((docRef) => {
          this.question.cauhoi = "";
          this.question.A = "";
          this.question.B = "";
          this.question.C = "";
          this.question.D = "";
          this.question.answer = "";
          console.log(docRef.id);
          router.push({
            name: "listquestion",
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
