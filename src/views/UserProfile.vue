<template>
<div>
  <h1>Profile</h1>
  <h5>Name : {{userProfile.name}}</h5>
  <h5>Address : {{userProfile.address}}</h5>
</div>
  
</template>

<script>
import "firebase/auth";
import { mapState } from 'vuex'
export default {
      computed: {
    ...mapState(['userProfile']),
  },
}
</script>