<template>
  <div>
    <div class="container mt-3" v-if="loaded">
      <div class="row d-lg-none d-xl-none">
        <div class="col-2 col-sm-1 m-2 m-sm-0">
          <a href="#">
            <img src="../../assets/icons/ico_setaesquerda.svg" class="img-fluid">
          </a>
        </div>
        <div class="col-12 mt-2 mt-sm-0 col-sm-7">
          <div class="row">
            <div v-for="categoria in anuncio.categorias" :key="categoria.id" class="col-3 col-sm-3">
              <div class="text-center p-2 bg-warning">
                <a class="text-dark" href="#">{{categoria}}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-1 pt-2">
          <a href="#">
            <img src="../../assets/icons/ico_setaesquerda.svg" class="img-fluid">
          </a>
        </div>
        <div class="col-2 pt-2">
          <h5 class="p-2 text-seminovos ml-2">
            {{anuncio_escolhido+1}}
            <span class="text-dark">de {{total_anuncios}}</span>
          </h5>
        </div>
        <div class="col-1 pt-2">
          <a href="#">
            <img src="../../assets/icons/ico_setadireita.svg">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
html {
  font-size: 1rem;
}

@include media-breakpoint-up(sm) {
  html {
    font-size: 1.2rem;
  }
}

@include media-breakpoint-up(md) {
  html {
    font-size: 1.4rem;
  }
}

@include media-breakpoint-up(lg) {
  html {
    font-size: 1.6rem;
  }
}
</style>
