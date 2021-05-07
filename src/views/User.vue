<template>
  <div class="menu">
  <b-navbar style="background-color: #c184df;" toggleable="lg" type="light">
    <b-navbar-brand> <md-icon style="width: 85px; height=85px; margin-top: 24px;"><img src="../assets/images/chill-removebg-preview.png"></md-icon></b-navbar-brand>
    <b-navbar-brand><router-link to="/" style="color: rgb(3, 0, 180);">English with C</router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="">Home</b-nav-item>
        <b-nav-item><router-link to="/lesson" style="color: rgb(0, 0, 0);">Danh sách bài học</router-link></b-nav-item>

      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>

        </b-nav-form>

        <!-- <b-nav-item-dropdown right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <i class="fa fa-user"></i>
            <em>User</em>
          </template>
          <b-dropdown-item><router-link to="/profile">Profile</router-link></b-dropdown-item>
          <b-dropdown-item><a @click="logout()">Logout</a></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  methods: {
    logout(){
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
.menu{
  font-weight: bold;
  text-decoration-line: inherit;
  color: rgb(3, 0, 180);
  font-size: 20px;
}
</style>