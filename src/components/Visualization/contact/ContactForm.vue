<script setup>

</script>

<template>
  <div class="row">
    <div class="col">
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
        <button type="submit" class="btn btn-primary mt-2" style="width: 96px;height: 41px" >Send</button>


      </form>

    </div>
    <div class="col">

    </div>
  </div>



</template>

<style scoped>

</style>