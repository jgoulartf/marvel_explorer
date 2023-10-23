<script setup>

// TODO: Montar array de personagens vindo da api
import ClickableCharacter from "../characters/ClickableCharacter.vue";
import ComicThumb from "./ComicThumb.vue";

const comics = [
    {
      "thumb": "THUMB",
      "comicTitle": "MARVEL PREVIEWS 2017",
      "comicPages": 112
    },
    ]


</script>

<template>
  <div class="row float-start" style="color: #767676;">
    <div class="col mt-1">
      <ion-icon name="home" size="small"></ion-icon>
    </div>

    </div>
    <div class="row">

    <div class="col mt-1 mr-2">


      <div class="row float-start">
        <div class="col" v-for="(comic, index) in comics" :key="index">

          <!-- Conteúdo do herói aqui -->
          <div  style="margin-top: 64px;">
            <ComicThumb :thumb="comic.thumb" :comic-title="comic.comicTitle" :comic-pages="comic.comicPages" />
          </div>

        </div>
      </div>
    </div>


    </div>

  </div>

</template>

<style scoped>

</style>