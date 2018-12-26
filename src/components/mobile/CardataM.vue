<template>
  <div>
    <div class="container mt-3">
      <div class="row">
        <!-- SLIDER  -->
        <div class="col-12 col-lg-8 mt-3">
          <div class="row">
            <div class="col-12">
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
            <!-- GALERIA DE FOTOS -->
            <div class="col-12 mt-2">
              <div class="row pl-3 pr-3">
                <div v-for="foto in anuncio.fotos" :key="foto.id" class="p-0 col-4 col-lg-2">
                  <img :src="foto" class="img-fluid">
                </div>
              </div>
            </div>
            <!-- / GALERIA DE FOTOS -->
          </div>
        </div>

        <!-- MENU LATERAL -->
        <div class="col-11 col-lg-4 mt-2 mt-lg-0">
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
                <div class="col-5">
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
                <div class="col-5">
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
                <div class="col-5">
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
                <div class="col-5">
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
                <div class="col-5">
                  <span class="align-middle">PORTAS</span>
                </div>
                <div class="col-5">
                  <strong class="align-middle">{{anuncio.dados_carro.portas}}</strong>
                </div>
              </div>
            </div>
            <!-- / PORTAS  -->
            <!-- COR  -->
            <div class="border-bottom border-muted p-2 text-left col-12">
              <div class="row">
                <div class="col-2">
                  <img src="../../assets/icons/ico_cor.svg" class="img-fluid">
                </div>
                <div class="col-5">
                  <span class="align-middle">COR</span>
                </div>
                <div class="col-5">
                  <strong class="align-middle">{{anuncio.dados_carro.cor | ToMaiusculo}}</strong>
                </div>
              </div>
            </div>
            <!-- / COR  -->
            <!-- FINAL DA PLACA  -->
            <div class="border-bottom border-muted p-2 text-left col-12">
              <div class="row">
                <div class="col-2">
                  <img src="../../assets/icons/ico_finalplaca.svg" class="img-fluid">
                </div>
                <div class="col-5">
                  <span class="align-middle">FINAL PLACA</span>
                </div>
                <div class="col-5">
                  <strong class="align-middle">{{anuncio.dados_carro.final_placa | ToMaiusculo}}</strong>
                </div>
              </div>
            </div>
            <!-- / FINAL DA PLACA  -->
            <!-- ACEITA TROCA -->
            <div class="border-bottom border-muted p-2 text-left col-12">
              <div class="row">
                <div class="col-2">
                  <img src="../../assets/icons/ico_troca.svg" class="img-fluid">
                </div>
                <div class="col-5">
                  <span class="align-middle">ACEITA TROCA</span>
                </div>
                <div class="col-5">
                  <strong
                    class="align-middle"
                  >{{anuncio.dados_carro.aceita_troca | ToSouN | ToMaiusculo}}</strong>
                </div>
              </div>
            </div>
            <!-- / ACEITA TROCA -->
            <!-- BANNER FINANCIAMENTO -->
          </div>
          <div class="row justify-content-center">
            <div v-if="anuncio.aceita_financiamento" class="mt-3 ml-4 ml-lg-0 col-12">
              <img src="../../assets/img/banner_financiamento.jpg" class="img-fluid">
            </div>
            <!-- / BANNER FINANCIAMENTO -->
          </div>
        </div>
        <!-- / MENU LATERAL -->
        <!-- DETALHES -->
        <div class="col-12 mt-3">
          <div class="row">
            <!-- ELEMENTOS ESCONDIDOS -->
            <div class="col-12 bg-dark text-white text-center d-lg-none">
              <h5 class>
                <a
                  data-toggle="collapse"
                  data-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >Consultar</a>
              </h5>
              <div class="collapse mt-2" id="collapseExample">
                <div class="row text-center">
                  <div class="col-12 col-lg-2">Código: 0000{{anuncio.id}}</div>
                  <div class="col-6 col-lg-2">
                    <a href="#" class="text-white">Irregularidade</a>
                  </div>
                  <div class="col-6 col-lg-1">
                    <a href="#" class="text-white">Comparar</a>
                  </div>
                  <div class="col-6 col-lg-1">
                    <a href="#" class="text-white">Favoritar</a>
                  </div>
                  <div class="col-6 col-lg-1">
                    <a href="#" class="text-white">Vendido</a>
                  </div>
                  <div class="col-6 col-lg-1">
                    <a href="#" class="text-white">Imprimir</a>
                  </div>
                  <div class="col-12 col-lg-3">Cadastrado em {{anuncio.data_cadastro}}</div>
                </div>
              </div>
            </div>
            <!-- / ELEMENTOS ESCONDIDOS -->
            <div class="col-12 d-none p-1 d-lg-block">
              <div class="row text-left">
                <div class="col-lg-2">Código: 0000{{anuncio.id}}</div>
                <div class="col-lg-2 border-left p-1 border-dark">
                  <a href="#" class="text-dark">Irregularidade</a>
                </div>
                <div class="col-lg-2 border-left p-1 border-dark">
                  <a href="#" class="text-dark">Comparar</a>
                </div>
                <div class="col-lg-1 border-left p-1 border-dark">
                  <a href="#" class="text-dark">Favoritar</a>
                </div>
                <div class="col-lg-1 border-left p-1 border-dark">
                  <a href="#" class="text-dark">Vendido</a>
                </div>
                <div class="col-lg-1 border-left p-1 border-dark">
                  <a href="#" class="text-dark">Imprimir</a>
                </div>
                <div
                  class="col-lg-3 border-left border-dark"
                >Cadastrado em {{anuncio.data_cadastro}}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- / DETALHES -->
        <!-- ACESSÓRIOS -->
        <div class="col-12 mt-3">
          <div class="row">
            <!-- ELEMENTOS ESCONDIDOS -->
            <div class="col-12 text-dark p-1 text-center d-lg-none">
              <h5 class>
                <a
                  data-toggle="collapse"
                  data-target="#collapseExample1"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >Detalhes</a>
              </h5>
              <div class="collapse mt-2" id="collapseExample1">
                <div class="row text-left">
                  <div
                    v-for="acessorio in anuncio.dados_carro.acessorios"
                    :key="acessorio.id"
                    class="col-6"
                  >
                    <small href="#" class="text-dark">
                      <i class="fa-xs text-warning fas fa-circle"></i>
                      {{acessorio}}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <!-- / ELEMENTOS ESCONDIDOS -->
            <div class="col-12 d-none p-1 d-lg-block">
              <div class="row text-left">
                <div class="col-12 border-bottom border-muted mb-2">
                  <h4>Acessórios</h4>
                </div>
                <div
                  v-for="acessorio in anuncio.dados_carro.acessorios"
                  :key="acessorio.id"
                  class="col-3"
                >
                  <small href="#" class="fa-xs text-dark">
                    <i class="fa-xs text-warning fas fa-circle"></i>
                    {{acessorio}}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- / ACESSÓRIOS -->
        <!--  OBSERVAÇÕES -->
        <div class="col-12 p-1">
          <div class="row text-left">
            <div class="col-12 border-bottom border-muted mb-2">
              <h4>Observações</h4>
            </div>
            <div class="col-12">
              <small href="#" class="text-dark">{{anuncio.observacoes}}</small>
            </div>
          </div>
        </div>
        <!-- / OBSERVAÇÕES -->
        <!--  VALOR DE MERCADO -->
        <div class="col-12 p-1 mt-2">
          <div class="row text-left">
            <div class="col-12 mb-2">
              <h4>Valor de mercado</h4>
            </div>
            <div class="col-12">
              <div class="row">
                <!-- CARD - VALOR DE MERCADO -->
                <div class="mt-2 mt-lg-0 col-12 col-lg-4">
                  <div class="card">
                    <div class="pl-2 text-left">
                      <small>
                        Média
                        <a href="https://seminovos.com.br" class="text-dark">
                          <strong>Seminovos.com.br</strong>:
                        </a>
                      </small>
                    </div>
                    <div class="card-body text-center">
                      <h4
                        class="text-center mb-2 mt-3 text-dark"
                      >R$ {{anuncio.valor_mercado | ToValor}}</h4>
                      <small>
                        Anúncios em
                        <a href="#" class="text-dark">
                          <strong>Belo Horizonte</strong>
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
                <!-- / CARD - VALOR DE MERCADO -->
                <!-- CARD - VALOR ANUNCIADO -->
                <div class="mt-2 mt-lg-0 col-12 col-lg-4">
                  <div class="card">
                    <div class="pl-2 text-left">
                      <small>Valor Anunciado</small>
                    </div>
                    <div class="card-body text-center">
                      <h4 class="text-center mb-2 mt-3 text-warning">R$ {{anuncio.valor | ToValor}}</h4>
                      <small>
                        00%
                        <span class="text-danger">acima</span> da média
                      </small>
                    </div>
                  </div>
                </div>
                <!-- / CARD - VALOR ANUNCIADO -->
                <!-- CARD - TABELA FIPE -->
                <div class="mt-2 mt-lg-0 col-12 col-lg-4">
                  <div class="card">
                    <div class="pl-2 text-left">
                      <small>
                        Média
                        <strong>Tabela fipe</strong>
                      </small>
                    </div>
                    <div class="card-body text-center">
                      <h4
                        class="text-center mb-2 mt-3 text-dark"
                      >R$ {{anuncio.valor_fipe | ToValor}}</h4>
                      <small>
                        <a href="#" class="text-dark">Entenda como funciona</a>
                      </small>
                    </div>
                  </div>
                </div>
                <!-- / CARD - TABELA FIPE -->
              </div>
            </div>
          </div>
        </div>
        <!-- / VALOR DE MERCADO -->
        <button
          class="navbar-toggler bg-warning col-12 d-lg-none mt-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="text-dark">Faça uma proposta</span>
        </button>
        <div class="col-12 d-lg-none">
          <div class="collapse" id="navbarTogglerDemo02">
            <div class="container">
              <div class="row">
                <ContactM :loaded="loaded" :anuncio="anuncio"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactM from "./ContactM";
export default {
  props: ["loaded", "anuncio"],
  name: "CardataM",
  data() {
    return {};
  },
  components: {
    ContactM
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
