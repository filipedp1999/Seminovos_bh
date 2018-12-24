<template>
  <div class="home">
    <header>
      <Navbar/>
    </header>
    <main>
      <div class="container">
        <SubHeader/>
        <Content/>
        <Ad/>
      </div>
    </main>
    <footer>
      <Footer/>
      <Copyright/>
    </footer>
  </div>
</template>

<script>
import Navbar from "./subcomponents/Navbar";
import SubHeader from "./subcomponents/SubHeader";
import Content from "./subcomponents/Content";
import Ad from "./subcomponents/Ad";
import Footer from "./subcomponents/Footer";
import Copyright from "./subcomponents/Copyright";

export default {
  name: "Home",

  components: {
    Navbar,
    SubHeader,
    Content,
    Ad,
    Footer,
    Copyright
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");
.img {
  width: 100%;
  height: auto;
}
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
.icon-xs {
  width: 7%;
  height: auto;
}
.bg-grey {
  background-color: #efefef;
}
</style>
