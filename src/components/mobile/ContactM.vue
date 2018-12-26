<template>
  <div>
    <div class="border border-muted row mt-4 justify-content-center pb-4">
      <div class="col-12 p-0 text-center">
        <h5 class="mb-0">
          GOSTOU DESTE
          <span class="text-warning">VEÍCULO</span>?
        </h5>
        <span>Faça agora uma proposta</span>
      </div>
      <div class="col-12">
        <small
          class="fa-xs"
        >It is a long established fact that a reader will be distracted by the readable content of a page.</small>
      </div>
      <div class="col-12 p-1">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-user"></i>
            </span>
          </div>
          <input type="text" class="form-control" placeholder="Nome">
        </div>
      </div>
      <div class="col-12 p-1">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="far fa-envelope"></i>
            </span>
          </div>
          <input type="email" class="form-control" placeholder="Email">
        </div>
      </div>
      <div class="col-12 p-1">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-mobile-alt"></i>
            </span>
          </div>
          <input type="number" class="form-control" placeholder="Telefone">
        </div>
      </div>
      <div class="col-12 p-1 mt-0">
        <textarea class="form-control" rows="5" placeholder="Mensagem"></textarea>
      </div>

      <button class="col-11 btn btn-warning text-white text-center">ENVIAR PROPOSTA</button>
    </div>
    <div class="row mt-3 ml-0">
      <h5>Contato</h5>
    </div>
    <div class="row border border-muted">
      <div class="col-12">
        <div class="row p-2 border-bottom border-dark">
          <div class="col-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Csn46JnFF3i1imRa7QCoi7AU3b9QTXh_9A91WK5cfICbaS-Fiw"
              class="img-fluid rounded-circle"
              alt
              srcset
            >
          </div>
          <div class="p-0 col-8">
            <small>
              <strong>{{anuncio.contato.nome}}</strong>
            </small>
            <small class="text-success">
              <strong>{{anuncio.contato.status | ToMaiusculo}}</strong>
              <small>
                <a href="#" class="text-dark">- Fale com o vendedo</a>
              </small>
            </small>
          </div>
        </div>
        <div class="row p-2">
          <div class="col-2 p-2">
            <img src="../../assets/icons/ico_telefone.svg" alt srcset>
          </div>
          <div class="col-5 p-0 mt-2">
            <strong>{{anuncio.contato.telefone}}</strong>
          </div>
          <div class="col-1 p-0 mt-2">
            <i class="fab fa-lg fa-whatsapp text-success"></i>
          </div>
          <div class="col-4 mt-2">
            <strong class="text-primary">{{anuncio.contato.operadora}}</strong>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-4 mt-4 p-0">
        <img src="../../assets/img/absmotors.jpg" class="img-fluid" alt srcset>
      </div>
      <div class="col-8 mt-4 p-0 pl-2">
        <h5>Activa Multímarcas</h5>
        <small>Belo Horizonte</small>
      </div>
      <div class="col-12 bg-grey">
        <div class="row">
          <div class="col-1 pt-4">
            <i class="fas fa-map-marker-alt fa-2x text-muted"></i>
          </div>
          <div class="col-9 ml-2 p-2">
            <span>Rua Senador Lima Guimarães, 108, Buritis Belo Horizonte - MG</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12 mt-4">
        <div class="row">
          <div class="col-2">
            <i class="fas fa-exclamation-triangle fa-2x text-danger"></i>
          </div>
          <div class="col-10 mt-2">
            <h5>
              <strong>Dicas de Segurança</strong>
            </h5>
          </div>
        </div>
      </div>
      <div class="border border-muted col-12">
        <div class="row justify-content-center">
          <div class="col-12 mt-2">
            <small>
              <strong>
                <i class="fa-xs text-dark fas fa-circle"></i>
                Evite furadas:
              </strong>
            </small>
            <br>
            <small
              class="fa-xs"
            >Não pague adiantado ou dê entradas para reservar seu veículo Desconfie de preços muito abaixo do esperado</small>
          </div>
          <div class="col-12 mt-2">
            <small>
              <strong>
                <i class="fa-xs text-dark fas fa-circle"></i>
                Certifique-se antes de fechar negócio: :
              </strong>
            </small>
            <br>
            <small
              class="fa-xs"
            >Sugerimos sempre uma vistoria cautelar antes de fazer o pagamento. Confie apenas em laudos verificados</small>
          </div>
          <div class="col-12 mt-2">
            <small>
              <strong>
                <i class="fa-xs text-dark fas fa-circle"></i>
                Vai combinar de se encontrar?
              </strong>
            </small>
            <br>
            <small
              class="fa-xs"
            >Fale por telefone antes e priorize sempre espaços públicos: evite lugares isolados ou residências</small>
          </div>
          <button class="btn btn-dark text-white col-11 mt-2 mb-2">CONFIRA MAIS DICAS</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactM",
  props: ["laoded", "anuncio"],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
