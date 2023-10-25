<script setup>

  import {toRefs} from "vue";

  const props = defineProps({
    thumb: String,
    eventTitle: String,
    eventDescription: String,
    eventDate: String
  })

  const { eventDate } = toRefs(props);
</script>

<template>
    <div class="row">

      <div class="col-xl-6 col-md-12 col-12">
        <img :src="thumb" alt="" height="230" width="300">
      </div>

      <div class="col-xl-6 col-md-6 col-12">

        <div class="row my-text justify-content-center" >
          <h5>{{ eventTitle }}</h5>

          <h6>{{ eventDescription }}</h6>

        </div>
        <br>
        <b style="color: black">DATE OF THE EVENT: {{ eventDate }}</b>

      </div>

    </div>






</template>

<style scoped>
.my-text {
  overflow: hidden; /* remove o estouro do elemento */
  text-overflow: ellipsis; /* adiciona “...” no final */
  display: -webkit-box;
  -webkit-line-clamp: 8; /* quantidade de linhas */
  -webkit-box-orient: vertical; /* conteúdo será apresentado verticalmente */
  color: black;
}
</style>