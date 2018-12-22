<template>
  <div class="home">
    <header>
      <Navbar/>
    </header>
    <main>
      <SubHeader/>
    </main>
    <button class="btn btn-danger">Eu sou o bootstrap{{msg}}</button>
  </div>
</template>

<script>
import Navbar from "./subcomponents/Navbar";
import SubHeader from "./subcomponents/SubHeader";
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    Navbar,
    SubHeader
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
