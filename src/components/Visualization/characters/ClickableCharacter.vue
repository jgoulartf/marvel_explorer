<script setup>

  defineProps({
    image: String,
    characterName: String
  })

</script>

<template>

  <div class="container">
    <div class="row" style="width: 186px; height: 183px">
      <img :src="image" alt="" >
    </div>

    <div class="row mt-3">
      <h5 style="color: black">{{characterName}}</h5>
    </div>

  </div>




</template>

<style scoped>

</style>