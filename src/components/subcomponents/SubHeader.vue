<template>
  <div class="container">
    <br>
    <div class="d-flex flex-row align-items-center">
      <div class="p-1 flex-grow-1 text-dark">
        <h3>DETALHES DO VEÍCULO</h3>
      </div>
      <div class="p-1 align-self-center">
        <a class="btn btn-social-icon btn-facebook">
          <span class="text-white fab fa-facebook-f"></span>
        </a>
      </div>
      <div class="p-1 align-self-center">
        <a class="btn btn-social-icon btn-twitter">
          <span class="text-white fab fa-twitter"></span>
        </a>
      </div>
      <div class="p-1 align-self-center">
        <a class="btn btn-social-icon btn-google">
          <span class="text-white fab fa-google-plus-g"></span>
        </a>
      </div>

      <div class="p-1 align-self-center">
        <a class="btn btn-social-icon btn-openid email">
          <span class="text-white far fa-envelope"></span>
        </a>
      </div>
    </div>
    <hr class="line">
  </div>
</template>

<script>
export default {
  name: "SubHeader",
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
.titulo {
  font-family: Roboto bold;
}
.email {
  background-color: #df9f11;
}
.line {
  height: 2px;
  background-color: #dadada;
}
</style>
