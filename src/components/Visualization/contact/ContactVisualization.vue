<script setup>
  import ContactForm from "./ContactForm.vue";
</script>

<template>
  <div class="container mt-3">
    <div>
      <div class="row float-start" style="color: #767676;">
        <div class="col-1">
          <ion-icon name="home" size="small"></ion-icon>
        </div>
        <div class="col-11">
          <h6 style="font-weight: normal">Contact</h6>
        </div>
        <div class="row">
          <div class="mt-2">
            <ContactForm/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>