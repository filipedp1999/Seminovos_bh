<template>
  <div v-if="loaded">
    <div class="container mt-3" v-if="loaded">
      <div class="row d-lg-none">
        <div class="col-12 col-lg-12">
          <div class="row">
            <div class="col-2">
              <a href="#">
                <img src="../../assets/icons/ico_setaesquerda.svg" class="img-fluid">
              </a>
            </div>
            <div class="col-9">
              <span>VOLTAR PARA BUSCA</span>
            </div>
            <div class="col-12 mt-2 mt-sm-0 col-sm-7">
              <div class="row">
                <div v-for="categoria in categorias" :key="categoria.id" class="col-3 col-sm-3">
                  <div class="text-center p-2 bg-warning">
                    <a class="text-dark" href="#">{{categoria}}</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-2 pt-2">
              <a href="#">
                <img src="../../assets/icons/ico_setaesquerda.svg" class="img-fluid">
              </a>
            </div>
            <div class="col-8 text-center pt-2">
              <h5 class="p-2 text-seminovos ml-2">
                {{anuncio_escolhido+1}}
                <span class="text-dark">de {{total_anuncios}}</span>
              </h5>
            </div>
            <div class="col-2 pt-2">
              <a href="#">
                <img src="../../assets/icons/ico_setadireita.svg">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <div class="row">
            <a href="#" class="col-2">
              <img src="../../assets/icons/ico_setaesquerda.svg" class="img-fluid">
            </a>
            <div class="col-10">
              <strong>VOLTAR PARA BUSCA</strong>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="row">
            <div v-for="categoria in categorias" :key="categoria.id" class="col-2">
              <div class="text-center p-1 bg-warning">
                <a class="text-dark" href="#">{{categoria}}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="row">
            <a href="#" class="col-2">
              <img src="../../assets/icons/ico_setaesquerda.svg" class="img-fluid">
            </a>
            <div class="p-0 col-2 text-muted">
              <small>
                <strong>Anterior</strong>
              </small>
            </div>
            <div class="p-0 col-4 text-center">
              <small class="p-2 text-seminovos ml-2">
                {{anuncio_escolhido+1}}
                <span class="text-dark">de {{total_anuncios}}</span>
              </small>
            </div>
            <div class="p-0 col-2 text-muted">
              <small>
                <strong>Próximo</strong>
              </small>
            </div>
            <a href="#" class="col-2">
              <img src="../../assets/icons/ico_setadireita.svg" class="img-fluid">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: ["loaded", "categorias", "anuncio_escolhido", "total_anuncios"],
  data() {
    return {
      t_categorias: [],
      t_anuncio_escolhido: {},
      t_total_anuncios: 0
    };
  },
  created() {
    this.t_categorias = this.categorias;
    this.t_anuncio_escolhido = this.anuncio_escolhido;
  }
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