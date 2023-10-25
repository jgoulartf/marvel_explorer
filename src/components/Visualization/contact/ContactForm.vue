<script setup>
  import {onMounted} from "vue";
  import { Modal } from 'bootstrap'

  let modal;

  onMounted(() => {
    modal = new Modal(document.getElementById("modal"))
  })

  const showModal = () => {
    modal.show()
  }

</script>

<template>
  <div class="row">
    <div class="col-12" style="color:black">

      <form>

        <div class="form-group">
          <label for="name" class="fw-bold mb-2">Name</label>
          <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex.: Your full name">
        </div>

        <div class="form-group">
          <label for="email" class="fw-bold mb-2 mt-2">Email</label>
          <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Ex.: myemail@email.com">
        </div>

        <div class="form-group">
          <label for="email" class="fw-bold mb-2 mt-2">Phone</label>
          <input class="form-control" id="exampleInputPassword1" placeholder="Ex.: (99) 9 9999-9999">
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1" class="fw-bold mb-2 mt-2">Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <!-- TODO: Adicionar disabled do botao baseado nos campos do form-->

        <!-- Button trigger modal -->
        <button type="button" @click="showModal" class="btn btn-primary mt-3" >
          Send
        </button>
      </form>

    </div>

  </div>

  <!-- Modal -->
  <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel" style="color: black">Message sent successfully!</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" style="color: black">
          Thank you, we'll reach you as soon as possible
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" style="background-color: #EC1D24" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>



</template>

<style scoped>

</style>