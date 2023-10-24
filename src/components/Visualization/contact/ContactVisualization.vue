<script setup>

import ContactForm from "./ContactForm.vue";
</script>

<template>
  <div>
    <div class="row float-start" style="color: #767676;">
      <div class="col mt-1">
        <ion-icon name="home" size="small"></ion-icon>
      </div>
      <div class="col mt-1 mr-2">
        <h6>Contact</h6>
      </div>
    </div>
    <div class="row">
      <div class="mt-5">

        <ContactForm/>
      </div>
    </div>

  </div>

</template>

<style scoped>

</style>