<template>
  <div class="home">
    <header>
      <Navbar/>
    </header>
    <main>
      <SubHeader/>
      <Content/>
    </main>
    <button class="btn btn-danger">Eu sou o bootstrap</button>
  </div>
</template>

<script>
import Navbar from "./subcomponents/Navbar";
import SubHeader from "./subcomponents/SubHeader";
import Content from "./subcomponents/Content";

export default {
  name: "Home",

  components: {
    Navbar,
    SubHeader,
    Content
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
