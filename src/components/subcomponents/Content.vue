<template>
  <div v-if="loaded">
    <div class="row mb-3">
      <div class="col-3">-- voltar as buscas</div>
      <div class="col-7">
        <div class="row">
          <div class="col-1" v-for="categoria in anuncio.categorias" :key="categoria">
            <a href="#">{{categoria}}</a>
          </div>
        </div>
      </div>
      <div v-if="loaded" class="col-2">{{anuncio_escolhido+1}} de {{total_anuncios}}</div>
    </div>
    <div class="row">
      <div class="col-10">
        <CarData :dados_anuncio="anuncio" :loaded="loaded"/>
      </div>
      <div class="col-2">YYYY</div>
    </div>
  </div>
</template>

<script>
import CarData from "./CarData";
export default {
  name: "Content",
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
  computed: {},
  components: {
    CarData
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img {
  width: 100%;
  height: auto;
}
</style>
