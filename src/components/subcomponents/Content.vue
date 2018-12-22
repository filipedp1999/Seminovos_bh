<template>
  <div>{{result}}</div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      result: {}
    };
  },
  created() {
    this.$http.get(this.bd_host + "anuncios").then(
      response => {
        // get body data
        this.result = response.body;
      },
      response => {
        // error callback
      }
    );
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
</style>
