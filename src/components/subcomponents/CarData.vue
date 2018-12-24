<template>
  <div>
    <div class="row" v-if="loaded">
      <div class="col-8">
        <div class="row">
          <div class="col-12">
            <img :src="dados_anuncio.foto_destaque" class="img">
          </div>
          <div v-for="foto in dados_anuncio.fotos" :key="foto.id" class="col-2">
            <img :src="foto" class="fix_grid border border-dark">
          </div>
        </div>
      </div>
      <div class="col-4">
        <a>{{dados_anuncio.carro}}</a>
        <a>{{dados_anuncio.detalhes}}</a>
        <a>
          R$ {{dados_anuncio.valor}}
          <a v-show="dados_carro.aceita_financiamento">+ Financiamento</a>
        </a>
        <div class="row">
          <div class="col-6">KM</div>
          <div class="col-6">{{dados_carro.km}}</div>
          <div class="col-6">COMBUSTÍVEL</div>
          <div class="col-6">{{dados_carro.combustivel}}</div>
          <div class="col-6">ANO/MODELO</div>
          <div class="col-6">{{dados_carro.ano_modelo}}</div>
          <div class="col-6">CÂMBIO</div>
          <div class="col-6">{{dados_carro.cambio}}</div>
          <div class="col-6">PORTAS</div>
          <div class="col-6">{{dados_carro.portas}}</div>
          <div class="col-6">COR</div>
          <div class="col-6">{{dados_carro.cor}}</div>
          <div class="col-6">FINAL PLACA</div>
          <div class="col-6">{{dados_carro.final_placa}}</div>
        </div>

        <img src="../../assets/img/banner_financiamento.jpg" class="img mt-2">
      </div>
      <div class="col-12 mt-2">
        <div class="d-flex bg-grey flex-row">
          <div class="p-2 flex-grow-1">
            <a class="text-dark" href="#">Código: {{dados_anuncio.id}}</a>
          </div>
          <div class="p-1">
            <div class="border-left border-dark">
              <a class="ml-2 text-dark" href="#">Irregularidade</a>
            </div>
          </div>
          <div class="p-1">
            <div class="border-left border-dark">
              <a class="ml-2 text-dark" href="#">Comparar</a>
            </div>
          </div>
          <div class="p-1">
            <div class="border-left border-dark">
              <a class="ml-2 text-dark" href="#">Favoritar</a>
            </div>
          </div>
          <div class="p-1">
            <div class="border-left border-dark">
              <a class="ml-2 text-dark" href="#">Vendido</a>
            </div>
          </div>
          <div class="p-1">
            <div class="border-left border-dark">
              <a class="ml-2 text-dark" href="#">Imprimir</a>
            </div>
          </div>
          <div class="p-1">
            <div class="border-left border-dark">
              <a class="text-dark ml-2" href="#">Cadastrado em: {{dados_anuncio.data_cadastro}}</a>
            </div>
          </div>
        </div>
      </div>
      <!-- SESSÃO DE ACESSÓRIOS -->
      <div class="col-12 9mt-2">
        <p class="h5">Acessórios</p>
        <div class="row">
          <div
            v-for="acessorio in dados_carro.acessorios"
            :key="acessorio.id"
            class="col-3 text-left"
          >
            <span class="fa-xs">
              <i class="fa-xs fas fa-circle text-seminovos"></i>
              {{acessorio}}
            </span>
          </div>
        </div>
      </div>
      <!-- / SESSÃO DE ACESSÓRIOS -->
      <!-- CONTAINER DE OBSERVACOES -->
      <div class="col-12 mt-2">
        <p class="h5">Observações</p>
        <p>{{dados_anuncio.observacoes}}</p>
      </div>
      <!-- CARD 1 -->
      <div class="col-12 mt-2">
        <p class="h5">Valor de Mercado</p>
        <div class="row">
          <div class="col-4">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <p class="card-subtitle mb-2">
                  Média
                  <a href="https://seminovos.com.br" class="text-dark">
                    <strong>Seminovos.com.br:</strong>
                  </a>
                </p>
                <h2
                  class="card-text text-center text-dark"
                >R$ {{dados_anuncio.valor_seminovos | ToValor}}</h2>
                <p class="card-text text-muted text-center">
                  <small>Anuncios em Belo Horizonte</small>
                </p>
              </div>
            </div>
          </div>
          <!-- / CARD 1 -->
          <!-- CARD 2 -->
          <div class="col-4">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <p class="card-subtitle mb-2">Valor anunciado:</p>
                <h2 class="card-text text-center text-seminovos">R$ {{dados_anuncio.valor |ToValor}}</h2>
                <p href="#" class="card-text text-muted text-center">
                  <!-- Não calcula realmente pois o valor do anuncio é 0 e 0/0 da erro fatal :( -->
                  <small>
                    0%
                    <span class="text-danger">acima</span>
                    da média
                  </small>
                </p>
              </div>
            </div>
          </div>
          <!-- / CARD 2 -->
          <!-- CARD 3 -->
          <div class="col-4">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <p class="card-subtitle mb-2">
                  Média
                  <strong>Tabela Fipe</strong>:
                </p>
                <h2
                  class="card-text text-center text-seminovos"
                >R$ {{dados_anuncio.valor_fipe |ToValor}}</h2>
                <div class="text-center">
                  <small>
                    <a
                      href="https://seminovos.com.br"
                      class="card-text text-muted"
                    >Entenda como funciona?</a>
                  </small>
                </div>
              </div>
            </div>
          </div>
          <!-- / CARD 3 -->
        </div>
      </div>
      <!-- / CONTAINER DE OBSERVACOES -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["dados_anuncio", "loaded"],
  name: "CarData",
  data() {
    return {
      data: { dados_carro: {} }
    };
  },
  created() {
    this.dados_carro = this.dados_anuncio.dados_carro;
  },
  computed: {},
  mounted() {},
  filters: {
    ToValor: value => {
      value = parseFloat(value);
      return value.toFixed(2);
    }
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
.fix_grid {
  margin-top: 10px;
  width: 75px;
  height: 75px;
}

.icon {
  width: 10%;
  height: auto;
}
</style>
