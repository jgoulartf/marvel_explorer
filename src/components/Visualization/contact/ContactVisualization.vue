<script setup>
  import ContactForm from "./ContactForm.vue";
</script>

<template>
  <div class="container">
    <div>
      <div class="row float-start" style="color: #767676;">
        <div class="col">
          <ion-icon name="home" size="small"></ion-icon>
        </div>
        <div class="col">
          <h6>Contact</h6>
        </div>
      </div>
      <div class="row">
        <div class="mt-5">
          <ContactForm/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>