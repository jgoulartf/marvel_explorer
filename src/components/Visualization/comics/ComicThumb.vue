<script setup>

defineProps({
  thumb: String,
  comicTitle: String,
  comicPages: Number
})

</script>

<template>

  <div class="col" style="height: 389px" width="186px">

    <div class="row">
      <img :src="thumb" alt="" height="283">
    </div>
    <div class="row mt-1" style="color: black; font-weight: bold;">
      <h5>{{ comicTitle }}</h5>
    </div>
    <div class="row" style="color: black;">
      PAGES: {{ comicPages }}
    </div>

  </div>


</template>

<style scoped>

</style>