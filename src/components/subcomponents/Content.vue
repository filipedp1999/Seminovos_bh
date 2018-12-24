<template>
  <div v-if="loaded" class="mt-2">
    <div class="row mb-3">
      <div class="col-3">
        <a href="#" class="text-dark align-middle">
          <img src="../../assets/icons/ico_setaesquerda.svg" class="icon-xs"> VOLTAR PARA BUSCA
        </a>
      </div>
      <div class="col-7">
        <div class="row">
          <div v-for="(categoria,index) in anuncio.categorias" :key="index" class="col-2">
            <div
              :class="(anuncio.categorias[index + 1] == undefined ? 'bg-warning':'bg-dark')+ ' text-center p-1'"
            >
              <a href="#" class="text-white">{{categoria}}</a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="loaded" class="col-2">
        <a href="#" class="text-dark">
          <img src="../../assets/icons/ico_setaesquerda.svg" class="icon-xs">
          <small>Ant.</small>
        </a>
        <span class="text-seminovos ml-2">{{anuncio_escolhido+1}}</span>
        <span>de {{total_anuncios}}</span>
        <a href="#" class="text-dark ml-2">
          <small>Prox.</small>
          <img src="../../assets/icons/ico_setadireita.svg" class="icon-xs">
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-10">
        <CarData :dados_anuncio="anuncio" :loaded="loaded"/>
      </div>
      <div class="col-2">
        <Contact :dados_anuncio="anuncio" :loaded="loaded"/>
      </div>
    </div>
    <Recommendations :dados_anuncio="anuncio" :loaded="loaded"/>
  </div>
</template>

<script>
import CarData from "./CarData";
import Recommendations from "./Recommendations";
import Contact from "./Contact";
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
    CarData,
    Recommendations,
    Contact
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
