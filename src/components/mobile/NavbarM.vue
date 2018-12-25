<template>
  <div>
    <!-- PRIMEIRO MENU ( PROPAGANDA ) -->
    <nav class="navbar navbar-light bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-lg-2 col-3">
                <img src="../../assets/img/logo.svg" class="img-fluid">
              </div>
              <div class="col-lg-10 col-9">
                <img src="../../assets/img/banner.jpg" class="img-fluid">
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- / PRIMEMIRO MENU -->
    <!-- SEGUNDO MENU ( MENU DE VERDADE ) -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <div class="container">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active p-1">
              <a class="nav-link" href="#">HOME</a>
            </li>
            <li class="nav-item p-1">
              <a class="nav-link" href="#">PLANOS</a>
            </li>
            <li class="nav-item p-1">
              <a class="nav-link" href="#">ANUNCIE</a>
            </li>
            <li class="nav-item p-1">
              <a class="nav-link" href="#">REVENDAS</a>
            </li>
            <li class="nav-item p-1">
              <a class="nav-link" href="#">NOTÍCIAS</a>
            </li>
            <li class="nav-item p-1">
              <a class="nav-link" href="#">AJUDA</a>
            </li>
            <li class="nav-item p-1">
              <a class="nav-link" href="#">FALE CONOSCO</a>
            </li>
            <li class="nav-item p-1 active">
              <a class="nav-link" href="#">
                <i class="fas fa-user"></i>
                <span class="ml-2">ACESSAR MEUS ANÚNCIO</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- / SEGUNDO MENU -->
  </div>
</template>

<script>
export default {
  name: "NavbarM",
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
