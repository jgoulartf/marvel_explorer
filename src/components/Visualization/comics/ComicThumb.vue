<script setup>

defineProps({
  thumb: String,
  comicTitle: String,
  comicPages: Number
})

</script>

<template>

  <div class="col-12" style="height: 389px">

    <div class="row">
      <img :src="thumb" alt="" height="283">
    </div>
    <div class="row mt-1 my-text" style="color: black; font-weight: bold;">
      <h5>{{ comicTitle }}</h5>
    </div>
    <div class="row" style="color: black;">
      PAGES: {{ comicPages }}
    </div>

  </div>


</template>

<style scoped>
.my-text {
  overflow: hidden; /* remove o estouro do elemento */
  text-overflow: ellipsis; /* adiciona “...” no final */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* quantidade de linhas */
  -webkit-box-orient: vertical; /* conteúdo será apresentado verticalmente */
}
</style>