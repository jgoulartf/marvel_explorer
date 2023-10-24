<script setup>

defineProps({
  thumb: String,
  comicTitle: String,
  comicPages: Number
})

</script>

<template>

  <div class="col">

    <div class="row">
      <img :src="thumb" alt="">
    </div>
    <div class="row" style="color: black; font-weight: bold;">
      <h5>{{ comicTitle }}</h5>
    </div>
    <div class="row" style="color: black;">
      PAGES: {{ comicPages }}
    </div>

  </div>


</template>

<style scoped>

</style>