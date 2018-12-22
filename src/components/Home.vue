<template>
  <div class="home">
    <Navbar/>
    <button class="btn btn-danger">Eu sou o bootstrap{{msg}}</button>
  </div>
</template>

<script>
import Navbar from "./subcomponents/Navbar";
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    Navbar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
