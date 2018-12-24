<template>
  <div v-if="loaded">
    <div class="row mt-3">
      <!-- RECOMENDADOS MESMO PREÇO -->
      <div class="col-6">
        <h5 class="border-bottom border-warning pb-2">Na mesma faixa de preço:</h5>
        <div class="row">
          <div
            v-for="anuncio in dados_anuncio.relacionados.mesma_faixa_preco"
            :key="anuncio.id"
            class="col-4"
          >
            <img :src="anuncio.foto" class="img" alt srcset>
            <div class="text-center border-bottom border-dark pb-1">
              <small>
                <strong class="text-dark">{{anuncio.modelo}}</strong>
                <strong class="text-seminovos">R$ {{anuncio.valor|ToValor}}</strong>
              </small>
            </div>
            <div class="row mt-2">
              <div class="col-6">
                <img src="../../assets/icons/ico_km.svg" class="icon">
                <small>{{anuncio.km}}</small>
              </div>
              <div class="col-6">
                <!-- <img src="../../assets/icons/ico_cambio.svg" class="icon"> -->
                <small>{{anuncio.cambio}}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- / RECOMENDADOS MESMO PREÇO -->
      <!-- RECOMENDADOS MESMA CATEGORIA -->
      <div class="col-6">
        <h5 class="border-bottom border-warning pb-2">Na mesma categoria:</h5>
        <div class="row">
          <div
            v-for="anuncio in dados_anuncio.relacionados.mesma_categora"
            :key="anuncio.id"
            class="col-4"
          >
            <img :src="anuncio.foto" class="img" alt srcset>
            <div class="text-center border-bottom border-dark pb-1">
              <small>
                <strong class="text-dark">{{anuncio.modelo}}</strong>
                <strong class="text-seminovos">R$ {{anuncio.valor|ToValor}}</strong>
              </small>
            </div>
            <div class="row mt-2">
              <div class="col-6">
                <img src="../../assets/icons/ico_km.svg" class="icon">
                <small>{{anuncio.km}}</small>
              </div>
              <div class="col-6">
                <!-- <img src="../../assets/icons/ico_cambio.svg" class="icon"> -->
                <small>{{anuncio.cambio}}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- / RECOMENDADOS MESMA CATEGORIA -->
      <!-- ANUNCIOS VISITADOS -->
      <div class="col-12 mt-4">
        <h5 class="pb-2">Anuncios Visitados:</h5>
        <div class="row">
          <div
            v-for="anuncio in dados_anuncio.relacionados.visitados"
            :key="anuncio.id"
            class="col-2"
          >
            <img :src="anuncio.foto" class="img" alt srcset>
            <div class="text-center border-bottom border-dark pb-1">
              <small>
                <strong class="text-dark">{{anuncio.modelo}}</strong>
                <strong class="text-seminovos">R$ {{anuncio.valor|ToValor}}</strong>
              </small>
            </div>
            <div class="row mt-2">
              <div class="col-6">
                <img src="../../assets/icons/ico_km.svg" class="icon">
                <small>{{anuncio.km}}</small>
              </div>
              <div class="col-6">
                <!-- <img src="../../assets/icons/ico_cambio.svg" class="icon"> -->
                <small>{{anuncio.cambio}}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- / ANUNCIOS VISITADOS  -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommendations",
  props: ["dados_anuncio", "loaded"],
  data() {
    return {};
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
