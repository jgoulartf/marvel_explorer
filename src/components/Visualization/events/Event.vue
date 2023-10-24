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
  <div class="container">
    <div class="row">

      <div class="col-5">
        <img :src="thumb" alt="" height="230">
      </div>

      <div class="col-7">

        <div class="row my-text" >
          <h5>{{ eventTitle }}</h5>


          <h6>{{ eventDescription }}</h6>



        </div>
        <br>
        <b>DATE OF THE EVENT: {{ eventDate }}</b>

      </div>

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
}
</style>