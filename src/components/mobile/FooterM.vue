<template>
  <div>
    <div class="border-bottom border-muted">
      <!-- FOOTER MENU -->
      <div class="bg-grey">
        <div class="container mt-3 pb-3">
          <div class="row">
            <div class="col-12 col-lg-9 mt-2">
              <div class="row">
                <div v-for="item in menu" :key="item.id" class="col-4 text-left">
                  <a href="#" class="text-dark">
                    <small>{{item}}</small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- / FOOTER MENU -->
      <div class="container">
        <div class="row mt-4">
          <!-- FOOTER LETRAS PEQUENAS -->
          <div class="col-12 col-lg-8 text-left text-muted">
            <small class="fa-xs">
              <p>A SEMINOVOSBH Ltda não realizam qualquer intermediação na negociação entre os usuários, seja com relação à compra, troca ou qualquer outro tipo de negociação. As vendas e entregas aos usuários e/ou terceiros de produtos anunciados no site são de inteira responsabilidade do anunciante. As informações veiculadas nos anúncios deste site são de inteira responsabilidade do anunciante, não podendo o usuário responsabilizar o site pela veracidade e/ou autenticidade das mesmas, nem pelos danos diretos ou indiretos causados a terceiros. O usuário reconhece como sendo de sua exclusiva responsabilidade os riscos assumidos nas negociações que vier a efetuar com outros usuários do site.</p>
            </small>
          </div>
          <!-- FOOTER LETRAS PEQUENAS -->
          <!-- FOOTER REDES SOCIAIS -->
          <div class="col-12 col-lg-4 text-center">
            <h6>SIGA A SEMINOVOS NAS REDES</h6>
            <div class="row justify-content-center">
              <div class="col-2">
                <div class="p-2 btn m-2 btn-social-icon btn-facebook">
                  <span class="text-white fab fa-facebook-f"></span>
                </div>
              </div>
              <div class="col-2">
                <div class="p-2 btn m-2 btn-social-icon btn-instagram">
                  <span class="text-white fab fa-instagram"></span>
                </div>
              </div>
              <div class="col-2">
                <div class="p-2 btn m-2 btn-social-icon btn-google">
                  <span class="text-white fab fa-youtube"></span>
                </div>
              </div>
              <div class="col-2">
                <div class="p-2 btn m-2 btn-social-icon btn-twitter">
                  <span class="text-white fab fa-twitter"></span>
                </div>
              </div>
              <div class="col-2">
                <div class="p-2 btn m-2 btn-social-icon btn-google">
                  <span class="text-white fab fa-google-plus-g"></span>
                </div>
              </div>
            </div>
          </div>
          <!-- / FOOTER REDES SOCIAIS -->
        </div>
      </div>
    </div>
    <!-- COPYRIGHT   -->
    <div class="container mb-2">
      <div class="row text-center text-muted">
        <div class="col-12">
          <small class="fa-xs">© 2008 - 2018 SeminovosBH.com.br | Todos os direitos reservados</small>
        </div>
      </div>
    </div>
    <!-- / COPYRIGHT   -->
  </div>
</template>

<script>
export default {
  name: "FooterM",
  data() {
    return {
      menu: [
        "Home",
        "Quem Somos",
        "Notícias",
        "Anúncie seu veículo",
        "Publicidade",
        "Tabela FIPE",
        "Plano de anúncios",
        "Ajuda",
        "Parceiros",
        "Revendas",
        "Fale Conosco"
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
