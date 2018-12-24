<template>
  <div class="home">
    <header>
      <Navbar/>
    </header>
    <main>
      <div class="container">
        <SubHeader/>
        <Content/>
        <Recommendations/>
        <Ad/>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "./subcomponents/Navbar";
import SubHeader from "./subcomponents/SubHeader";
import Content from "./subcomponents/Content";
import Ad from "./subcomponents/Ad";

export default {
  name: "Home",

  components: {
    Navbar,
    SubHeader,
    Content,
    Ad
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
.icon {
  width: 29%;
  height: auto;
}
</style>
