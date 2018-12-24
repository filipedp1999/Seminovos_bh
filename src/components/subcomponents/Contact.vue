<template>
  <div>
    <div class="border border-dark p-3">
      <div class="row">
        <!-- FORMULARIO DE CONTATO -->
        <div class="col-12">
          <div class="text-dark text-center">
            <h6>
              GOSTOU DESTE
              <span class="text-seminovos">VEÍCULO</span>?
            </h6>
            <h4>Faça uma proposta!</h4>
          </div>
          <div class="text-left">
            <small>It is a long established fact that a reader will be distracted by the readable content of a page.</small>
          </div>
          <!-- ITEM FORM -->
          <div class="input-group mt-2">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <i class="fas fa-user-alt"></i>
              </div>
            </div>
            <input
              type="text"
              class="form-control"
              id="inlineFormInputGroupUsername"
              placeholder="Nome"
            >
          </div>
          <!-- / ITEM FORM -->
          <!-- ITEM FORM -->
          <div class="input-group mt-2">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <i class="fas fa-envelope"></i>
              </div>
            </div>
            <input
              type="email"
              class="form-control"
              id="inlineFormInputGroupUsername"
              placeholder="E-mail"
            >
          </div>
          <!-- / ITEM FORM -->
          <!-- ITEM FORM -->
          <div class="input-group mt-2">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <i class="fas fa-mobile-alt"></i>
              </div>
            </div>
            <input
              type="text"
              class="form-control"
              id="inlineFormInputGroupUsername"
              placeholder="Telefone"
            >
          </div>
          <!-- / ITEM FORM -->
          <!-- ITEM FORM -->
          <div class="input-group mt-2">
            <textarea
              type="text"
              class="form-control"
              id="inlineFormInputGroupUsername"
              placeholder="Mensagem"
            ></textarea>
          </div>
          <!-- / ITEM FORM -->
          <div class="mt-3 text-center">
            <button class="btn btn-warning">ENVIAR</button>
          </div>
        </div>
        <!-- / FORMULARIO DE CONTATO -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: ["dados_anuncio", "loaded"],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
