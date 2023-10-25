<script setup>

</script>

<template>

  <nav class="navbar navbar-expand-lg topbar">

    <div class="container">
        <div class="row">
          <div class="col-1 col-xl-1">
            <a class="navbar-brand" href="#">

              <img src="../assets/logo-red.png"
                   width="100"
                   height="35"
                   alt="marvel logo"
                   style="margin-top: 16px; margin-bottom: 16px; margin-left: 5%">
            </a>
          </div>
        </div>

      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style="color: white"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="col-7"></div>

      <div class="collapse navbar-collapse col-4 col-xl-6 col-md-8" id="navbarTogglerDemo01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link to="/">
            <button type="button" class="my-btn btn" style="margin-right: 5%; font-weight: normal">HOME</button>
          </router-link>

          <router-link to="/character">
            <button type="button" class="my-btn btn" style="margin-right: 5%; font-weight: normal">CHARACTERS</button>
          </router-link>

          <router-link to="/comics">
            <button type="button" class="my-btn btn" style="margin-right: 5%; font-weight: normal">COMICS</button>
          </router-link>

          <router-link to="/Events">
            <button type="button" class="my-btn btn" style="margin-right: 5%; font-weight: normal">EVENTS</button>
          </router-link>

          <router-link to="/contact">
            <button type="button" class="my-btn btn" style="margin-right: 5%; font-weight: normal">CONTACT</button>
          </router-link>
        </ul>

      </div>
    </div>
  </nav>

  <!--
  <nav class="navbar navbar-expand-lg topbar">
    <div class="container">
      <div class="row">
        <div class="col-2 col-xl-1">
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

        <div class=" col-12 col-xl-6 col-md-8" id="navbarSupportedContent" style="text-align: right;">

          <router-link to="/">
            <button type="button" class="my-btn btn" style="margin-right: 5%;">Home</button>
          </router-link>

          <router-link to="/character">
            <button type="button" class="my-btn btn" style="margin-right: 5%;">Characters</button>
          </router-link>

          <router-link to="/comics">
            <button type="button" class="my-btn btn" style="margin-right: 5%;">Comics</button>
          </router-link>

          <router-link to="/Events">
            <button type="button" class="my-btn btn" style="margin-right: 5%;">Events</button>
          </router-link>

          <router-link to="/contact">
            <button type="button" class="my-btn btn" style="margin-right: 5%;">Contact</button>
          </router-link>

        </div>
    </div>
  </nav>
  -->
</template>

<style scoped>
  .topbar {
    background-color: #EC1D24;
    display: flex;
  }

  .my-btn{
    font-weight: bold;
    color: white;
    border-radius: 0;
    flex-grow: 1;

  }
</style>