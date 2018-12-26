<template>
  <div>
    <div v-if="w >= 1000" class="home">
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
    <div v-else>
      <header>
        <NavbarM/>
      </header>
      <main>
        <SubHeaderM/>
        <ContentM/>
      </main>
      <footer>
        <FooterM/>
      </footer>
    </div>
  </div>
</template>

<script>
import Navbar from "./subcomponents/Navbar";
import SubHeader from "./subcomponents/SubHeader";
import Content from "./subcomponents/Content";
import Ad from "./subcomponents/Ad";
import Footer from "./subcomponents/Footer";
import Copyright from "./subcomponents/Copyright";
import NavbarM from "./mobile/NavbarM";
import ContentM from "./mobile/ContentM";
import SubHeaderM from "./mobile/SubHeaderM";
import FooterM from "./mobile/FooterM";

export default {
  name: "Home",
  data: function() {
    return {};
  },

  components: {
    Navbar,
    SubHeader,
    Content,
    Ad,
    Footer,
    Copyright,
    NavbarM,
    ContentM,
    SubHeaderM,
    FooterM
  },
  computed: {
    w: () => {
      return $(window).width();
    }
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
.icon-s {
  width: 12%;
  height: auto;
}
.bg-grey {
  background-color: #efefef;
}
</style>
