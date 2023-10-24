<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg topbar">
    <div class="container">
      <div class="row">
        <div class="col-2">
          <a class="navbar-brand" href="#">

          <img src="../assets/logo-red.png"
               width="100"
               height="35"
               alt="marvel logo"
               style="margin-top: 16px; margin-bottom: 16px; margin-left: 5%">
          </a>
        </div>

      </div>

        <div class="col-2"></div>

        <div class="col-8" id="navbarSupportedContent" style="text-align: right;">

          <router-link to="/">
            <button type="button" class="my-btn btn">Home</button>
          </router-link>

          <router-link to="/character">
            <button type="button" class="my-btn btn">Characters</button>
          </router-link>

          <router-link to="/comics">
            <button type="button" class="my-btn btn">Comics</button>
          </router-link>

          <router-link to="/Events">
            <button type="button" class="my-btn btn">Events</button>
          </router-link>

          <router-link to="/contact">
            <button type="button" class="my-btn btn">Contact</button>
          </router-link>

        </div>
    </div>
  </nav>
</template>

<style scoped>
  .topbar {
    background-color: #EC1D24;
  }

  .my-btn{
    font-weight: bold;
    color:white;
  }
</style>