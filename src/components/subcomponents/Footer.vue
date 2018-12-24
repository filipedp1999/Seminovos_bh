<template>
  <div class="bg-grey">
    <div class="container mt-3 pb-3">
      <div class="row">
        <div class="col-9 mt-2">
          <div class="row">
            <div v-for="item in menu" :key="item.id" class="mt-2 col-4 text-left">
              <a href="#" class="text-dark">{{item}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ad",
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
