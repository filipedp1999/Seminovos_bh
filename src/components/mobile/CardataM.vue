<template>
  <div>
    <div class="container mt-3">
      <div class="row">
        <!-- SLIDER  -->
        <div class="col-12 col-lg-8">
          <div class="p-2 text-seminovos text-center d-block d-sm-none">
            <h4>{{anuncio.carro}}</h4>
            <h5>
              <small>{{anuncio.detalhes}}</small>
            </h5>
          </div>
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li
                v-for="foto in anuncio.fotos"
                :key="foto.id"
                data-target="#carouselExampleIndicators"
                data-slide-to="foto.id"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" :src="anuncio.foto_destaque" alt="First slide">
              </div>
              <div v-for="foto in anuncio.fotos" :key="foto.id" class="carousel-item">
                <img class="d-block w-100" :src="foto" alt="First slide">
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Anterior</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Próximo</span>
            </a>
          </div>
        </div>
        <!-- / SLIDER -->
        <!-- MENU LATERAL -->
        <div class="col-12 col-lg-4">
          <div class="row">
            <!-- NOME + DETALHES -->
            <div class="p-2 text-dark text-left col-12 d-none d-sm-block">
              <h4>{{anuncio.carro}}</h4>
              <h5>
                <small>{{anuncio.detalhes}}</small>
              </h5>
            </div>
            <!-- / NOME + DETALHES -->
            <!-- PRECO / VALOR  -->
            <div class="border-bottom border-muted p-2 text-left col-12">
              <h4 class="text-seminovos">
                R$ {{anuncio.valor | ToValor}}
                <small
                  class="text-muted"
                  v-if="anuncio.aceita_financiamento"
                >+ Financiamento</small>
              </h4>
            </div>
            <!-- / PRECO / VALOR  -->
            <!-- KM  -->
            <div class="border-bottom border-muted p-2 text-left col-12">
              <div class="row">
                <div class="col-2">
                  <img src="../../assets/icons/ico_km.svg" class="img-fluid">
                </div>
                <div class="col-4">
                  <span class="align-middle">KM</span>
                </div>
                <div class="col-5">
                  <strong class="align-middle">{{anuncio.dados_carro.km}}</strong>
                  <small class="align-middle">km</small>
                </div>
              </div>
            </div>
            <!-- / KM  -->
            <!-- COMBUSTÍVEL  -->
            <div class="border-bottom border-muted p-2 text-left col-12">
              <div class="row">
                <div class="col-2">
                  <img src="../../assets/icons/ico_combustivel.svg" class="img-fluid">
                </div>
                <div class="col-4">
                  <span class="align-middle">COMBUSTÍVEL</span>
                </div>
                <div class="col-5">
                  <strong class="align-middle">{{anuncio.dados_carro.combustivel | ToMaiusculo}}</strong>
                </div>
              </div>
            </div>
            <!-- / COMBUSTÍVEL  -->
            <!-- ANO/MODELO  -->
            <div class="border-bottom border-muted p-2 text-left col-12">
              <div class="row">
                <div class="col-2">
                  <img src="../../assets/icons/ico_cadastro.svg" class="img-fluid">
                </div>
                <div class="col-4">
                  <span class="align-middle">ANO/MODELO</span>
                </div>
                <div class="col-5">
                  <strong class="align-middle">{{anuncio.dados_carro.ano_modelo | ToMaiusculo}}</strong>
                </div>
              </div>
            </div>
            <!-- / ANO/MODELO  -->
            <!-- CÂMBIO  -->
            <div class="border-bottom border-muted p-2 text-left col-12">
              <div class="row">
                <div class="col-2">
                  <img src="../../assets/icons/ico_cambio.svg" class="img-fluid">
                </div>
                <div class="col-4">
                  <span class="align-middle">CÂMBIO</span>
                </div>
                <div class="col-5">
                  <strong class="align-middle">{{anuncio.dados_carro.cambio | ToMaiusculo}}</strong>
                </div>
              </div>
            </div>
            <!-- / CÂMBIO  -->
            <!-- PORTAS  -->
            <div class="border-bottom border-muted p-2 text-left col-12">
              <div class="row">
                <div class="col-2">
                  <img src="../../assets/icons/ico_portas.svg" class="img-fluid">
                </div>
                <div class="col-4">
                  <span class="align-middle">PORTAS</span>
                </div>
                <div class="col-5">
                  <strong class="align-middle">{{anuncio.dados_carro.portas}}</strong>
                </div>
              </div>
            </div>
            <!-- / PORTAS  -->
          </div>
        </div>
        <!-- / MENU LATERAL -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["loaded", "anuncio"],
  name: "CardataM",
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
