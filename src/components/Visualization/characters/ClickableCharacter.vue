<script setup>
defineProps({
  imageURL: String,
  characterName: String
})
</script>

<template>


  <div class="card">
    <img :src="imageURL" class="card-img-top" alt="Hero Image">
    <div class="card-body">
      <h5 class="card-title">{{ characterName }}</h5>

    </div>
  </div>


</template>

<style scoped>

</style>