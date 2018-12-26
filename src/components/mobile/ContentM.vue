<template>
  <div v-if="loaded">
    <Navigation
      :loaded="loaded"
      :categorias="anuncio.categorias"
      :anuncio_escolhido="anuncio_escolhido"
      :total_anuncios="total_anuncios"
    />
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-9">
          <CardataM :loaded="loaded" :anuncio="anuncio"/>
        </div>
        <div class="col-lg-3 d-none d-lg-block">
          <ContactM :loaded="loaded" :anuncio="anuncio"/>
        </div>
        <div class="col-12">
          <RecomendationM :loaded="loaded" :anuncio="anuncio"/>
        </div>
        <div class="col-12">
          <AdM/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import CardataM from "./CardataM";
import RecomendationM from "./RecomendationM";
import AdM from "./AdM";
import ContactM from "./ContactM";
export default {
  name: "ContentM",
  props: [
    "anuncio_escolhido",
    "total_anuncios",
    "anuncio",
    "todos_anuncios",
    "loaded"
  ],

  components: {
    Navigation,
    CardataM,
    RecomendationM,
    AdM,
    ContactM
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto");
.img {
  width: 100%;
  height: auto;
}
</style>
