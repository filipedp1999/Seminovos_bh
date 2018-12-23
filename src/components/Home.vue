<template>
  <div class="home">
    <header>
      <Navbar/>
    </header>
    <main>
      <div class="container">
        <SubHeader/>
        <Content/>
      </div>
    </main>
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
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");
a {
  font-family: Roboto;
}
.text-seminovos {
  color: #ed9902;
}
</style>
