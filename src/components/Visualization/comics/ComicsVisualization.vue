<script setup>

  import ComicThumb from "./ComicThumb.vue";
  import {ref} from "vue";

  // URL que retorna as comics
  let comics = ref([])
  const fetchComics = () => {
    let marvelURL = "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=c9d540c85bf58fb51ee85c29e3d7f938&hash=d944602110d13bedeaa80996b4a069d6"
    fetch(marvelURL)
        .then(response => response.json())
        .then(json => {
          comics.value = json.data.results
          comics.value.map((comic) => {
            comic.thumbnail.path = comic.thumbnail.path + '.' + comic.thumbnail.extension

          })
        })
  }

  fetchComics()


</script>

<template>
  <div class="container mt-3">
    <div class="row float-start" style="color: #767676;">
      <div class="col-1">
        <ion-icon name="home" size="small"></ion-icon>
      </div>
      <div class="col-2">
        <h6 style="font-weight: normal"> Comics</h6>
      </div>
    </div>


    <div class="">

      <div class="row float-start">
        <div class="col-6 col-xl-2" v-for="(comic, index) in comics" :key="index">

          <!-- Conteúdo do herói aqui -->
          <div  style="margin-top: 5%;">
            <ComicThumb
                :thumb="comic.thumbnail.path"
                :comic-title="comic.title"
                :comic-pages="comic.pageCount"
            />
          </div>

        </div>
      </div>
    </div>
  </div>




</template>

<style scoped>

</style>