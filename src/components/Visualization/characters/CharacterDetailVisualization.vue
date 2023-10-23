<script setup>
import {onMounted} from "vue";

  defineProps({
    imageURL: String,
    characterName: String,
    characterData: Object
  })

  onMounted(function() {

    const heroData = this.$route.query.characterData;
    console.log(heroData); // O objeto heroData passado
  })


</script>

<template>
  <div class="row float-start mt-3" style="color: #767676;">
    <div class="col" >
      <ion-icon name="home" size="small"></ion-icon>
    </div>
    <div class="col mt-1 mr-2">
      <h6> Characters / {{ characterName }}</h6>
    </div>
  </div>



</template>

<style scoped>

</style>