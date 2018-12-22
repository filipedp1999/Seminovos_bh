<template>
  <header>
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
          <div class="p-1">HOME</div>
          <div class="p-1">PLANOS</div>
          <div class="p-1">ANUNCIE</div>
          <div class="p-1">REVENDAS</div>
          <div class="p-1">NOTICIAS</div>
          <div class="p-1">AJUDA</div>
          <div class="p-1">FALE CONOSCO</div>
        </div>
        <div class="d-flex flex-row-reverse">
          <div class="p-2">&nbsp; ACESSAR MEUS ANÚNCIOS</div>
          <img src="../../assets/icons/ico_areausuario.svg" class="align-middle icon">
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
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
.icon {
  width: 10%;
  height: 10%;
}
.menu {
  font-family: Roboto;
  font-size: 80%;
}
</style>
