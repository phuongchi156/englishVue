<template>
  <div id="repass">
      <!-- <div @click="$emit('close')" class="close">close</div> -->
      <h3>Reset Password</h3>
      <div v-if="!showSuccess">
        <p>Enter your email to reset your password</p>
        <form @submit.prevent>
          <input v-model.trim="email" type="email" placeholder="you@email.com" />
        </form>
        <b-button variant="success" @click="resetPassword()" class="button">Reset</b-button>
      </div>
      <p v-else>Success! Check your email for a reset link.</p>
  </div>
</template>
<script>
import { auth } from '../firebase'

export default {
  data() {
    return {
      email: '',
      showSuccess: false
    }
  },
  methods: {
    async resetPassword() {
       this.errorMsg = ''
       try {
          await auth.sendPasswordResetEmail(this.email)
          this.showSuccess = true
        } catch (err) {
          this.errorMsg = err.message,
          console.log(this.errorMsg);
          alert(this.errorMsg);
        }
      // reset logic
    }
  }
}
</script>

<style>
#repass{
  background-color: azure;
  margin: 60px auto 40px auto;
  width: 80%;
  padding: 30px;
  font-family: cursive;
  font-weight: 300;
  border-radius: 30px;
  box-shadow: 2px 2px 2px 3px;
}
#repass input{
  width: auto;
  height: 40px;
  background-color:rgb(159, 201, 238);
  border-radius: 10px;
  border: 1px solid wheat;
  margin-bottom: 30px;
}
</style>