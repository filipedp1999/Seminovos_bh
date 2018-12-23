<template>
  <div>
    <nav class="navbar navbar-light">
      <div class="container">
        <div class="row">
          <div class="col-2">
            <a class="navbar-brand" href="http://www.seminovos.com.br" target="_blank">
              <img src="../../assets/img/logo.svg" class="img">
            </a>
          </div>
          <div class="col-10">
            <img src="../../assets/img/banner.jpg" class="img">
          </div>
        </div>
      </div>
    </nav>
    <nav class="navbar navbar-dark bg-dark text-white">
      <div class="container menu">
        <!-- Navbar content -->
        <div class="d-flex flex-row">
          <div class="p-1">
            <a class="text-white" href="#">HOME</a>
          </div>
          <div class="p-1">
            <a class="text-white" href="#">PLANOS</a>
          </div>
          <div class="p-1">
            <a class="text-white" href="#">ANUNCIE</a>
          </div>
          <div class="p-1">
            <a class="text-white" href="#">REVENDAS</a>
          </div>
          <div class="p-1">
            <a class="text-white" href="#">NOTICIAS</a>
          </div>
          <div class="p-1">
            <a class="text-white" href="#">AJUDA</a>
          </div>
          <div class="p-1">
            <a class="text-white" href="#">FALE CONOSCO</a>
          </div>
        </div>
        <div class="d-flex flex-row-reverse">
          <div class="p-2">
            &nbsp;
            <a class="text-white" href="#">ACESSAR MEUS ANÚNCIOS</a>
          </div>
          <img src="../../assets/icons/ico_areausuario.svg" class="align-middle icon">
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
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
.ad {
  width: 970px;
  height: 90px;
}
.icon {
  width: 10%;
  height: 10%;
}
.menu {
  font-family: Roboto;
}
</style>
