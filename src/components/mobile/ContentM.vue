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
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import CardataM from "./CardataM";
export default {
  name: "ContentM",
  data() {
    return {
      anuncio_escolhido: 0,
      anuncio: {},
      todos_anuncios: {},
      loaded: false
    };
  },
  created() {
    //Script do Vue para fazer uma requição no banco de dados.
    this.$http.get(this.bd_host + "anuncios/").then(
      response => {
        // get body data
        // transfere o resultado da requisição para uma variavel local do vue
        this.todos_anuncios = response.body;
        // pegando o anuncio escolhido
        this.anuncio = response.body[this.anuncio_escolhido];
        // contador de anuncios
        this.total_anuncios = this.todos_anuncios.length;
        this.loaded = true;
        console.log(this.anuncio);
      },
      response => {
        // error callback
      }
    );
  },
  components: {
    Navigation,
    CardataM
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
