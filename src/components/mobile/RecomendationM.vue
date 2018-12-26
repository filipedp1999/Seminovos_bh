<template>
  <div>
    <div class="mt-4 row">
      <!-- ANUNCIOS NA MESMA FAIXA DE PREÇO -->
      <div class="col-12 col-lg-6">
        <h4 class="border-bottom border-warning pb-2 mb-3">Na mesma Faixa de Preço</h4>
        <div class="row">
          <!-- ANUCIOS VINDO DA API -->
          <div
            v-for="anuncio in anuncio.relacionados.mesma_faixa_preco"
            :key="anuncio.id"
            class="col-12 col-lg-4 text-center"
          >
            <div class="row justify-content-center">
              <div class="col-12">
                <img :src="anuncio.foto" class="img-fluid">
              </div>
              <div class="col-12">
                <a href="#" class="text-dark">
                  <small>
                    <strong>{{anuncio.modelo}}</strong>
                  </small>
                </a>
              </div>
              <div class="col-12">
                <a href="#" class="text-warning">
                  <strong>R$ {{anuncio.valor | ToValor}}</strong>
                </a>
              </div>
              <div class="col-1 col-lg-2 p-1 pl-2 mt-1">
                <img src="../../assets/icons/ico_km.svg" class="img-fluid">
              </div>
              <div class="col-4 mt-2 text-left p-0 text-muted">
                <small class="fa-xs">
                  {{anuncio.km}}
                  <small>km</small>
                </small>
              </div>
              <div class="col-1 col-lg-2 p-2">
                <img src="../../assets/icons/ico_cambio.svg" class="img-fluid">
              </div>
              <div class="col-4 mt-2 text-muted text-left p-0">
                <small class="fa-xs">{{anuncio.cambio}}</small>
              </div>
            </div>
          </div>
          <!-- / ANUNCIOS VINDO DA API -->
        </div>
      </div>

      <!-- / ANUNCIOS NA MESMA FAIXA DE PREÇO -->
      <!-- ANUNCIOS NA MESMA CATEGORIA -->
      <div class="col-12 col-lg-6">
        <h4 class="border-bottom border-warning pb-2 mb-3">Na mesma categoria</h4>
        <div class="row">
          <!-- ANUCIOS VINDO DA API -->
          <div
            v-for="anuncio in anuncio.relacionados.mesma_categora"
            :key="anuncio.id"
            class="col-12 col-lg-4 text-center"
          >
            <div class="row justify-content-center">
              <div class="col-12">
                <img :src="anuncio.foto" class="img-fluid">
              </div>
              <div class="col-12">
                <a href="#" class="text-dark">
                  <small>
                    <strong>{{anuncio.modelo}}</strong>
                  </small>
                </a>
              </div>
              <div class="col-12">
                <a href="#" class="text-warning">
                  <strong>R$ {{anuncio.valor | ToValor}}</strong>
                </a>
              </div>
              <div class="col-1 mt-1 col-lg-2 p-1 pl-2">
                <img src="../../assets/icons/ico_km.svg" class="img-fluid">
              </div>
              <div class="col-4 mt-2 text-left p-0 text-muted">
                <small class="fa-xs">
                  {{anuncio.km}}
                  <small>km</small>
                </small>
              </div>
              <div class="col-1 col-lg-2 p-2">
                <img src="../../assets/icons/ico_cambio.svg" class="img-fluid">
              </div>
              <div class="col-4 mt-2 text-muted text-left p-0">
                <small class="fa-xs">{{anuncio.cambio}}</small>
              </div>
            </div>
          </div>
          <!-- / ANUNCIOS VINDO DA API -->
        </div>
      </div>
      <!-- / ANUNCIOS NA MESMA CATEGORIA -->
      <!-- ANUNCIOS VISITADOS -->
      <div class="col-12 col-lg-12">
        <h4 class="border-bottom border-warning pb-2 mb-3">ANÚNICOS VISITADOS</h4>
        <div class="row">
          <!-- ANUCIOS VINDO DA API -->
          <div
            v-for="anuncio in anuncio.relacionados.visitados"
            :key="anuncio.id"
            class="col-12 col-lg-2 text-center"
          >
            <div class="row justify-content-center">
              <div class="col-12">
                <img :src="anuncio.foto" class="img-fluid">
              </div>
              <div class="col-12">
                <a href="#" class="text-dark">
                  <small>
                    <strong>{{anuncio.modelo}}</strong>
                  </small>
                </a>
              </div>
              <div class="col-12">
                <a href="#" class="text-warning">
                  <strong>R$ {{anuncio.valor | ToValor}}</strong>
                </a>
              </div>
              <div class="col-1 mt-1 col-lg-2 p-1 pl-2">
                <img src="../../assets/icons/ico_km.svg" class="img-fluid">
              </div>
              <div class="col-4 mt-2 text-left p-0 text-muted">
                <small class="fa-xs">
                  {{anuncio.km}}
                  <small>km</small>
                </small>
              </div>
              <div class="col-1 col-lg-2 p-2">
                <img src="../../assets/icons/ico_cambio.svg" class="img-fluid">
              </div>
              <div class="col-4 mt-2 text-muted text-left p-0">
                <small class="fa-xs">{{anuncio.cambio}}</small>
              </div>
            </div>
          </div>
          <!-- / ANUNCIOS VINDO DA API -->
        </div>
      </div>
      <!-- / ANUNCIOS VISITADOS -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["loaded", "anuncio"],
  name: "RecomendationM",
  data() {
    return {};
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
