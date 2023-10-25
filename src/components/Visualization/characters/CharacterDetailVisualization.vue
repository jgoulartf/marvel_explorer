<script setup>

  import {ref, toRefs} from "vue";
  import ComicThumb from "../comics/ComicThumb.vue";
  import { useRoute } from 'vue-router'

  // Router e props
  const route = useRoute()
  const props = defineProps({
    charID: Number,
  })

  const { charID } = toRefs(props);

  let character = ref({})

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

  // Busca personagem pelo ID
  const fetchCharacterByID = (charID) => {
    let characterURL = `https://gateway.marvel.com:443/v1/public/characters/${charID}?ts=1&apikey=c9d540c85bf58fb51ee85c29e3d7f938&hash=d944602110d13bedeaa80996b4a069d6`

    // TODO: Fetch character by id
    // Abomination id -> 1009146
    fetch(characterURL)
      .then(response => response.json())
      .then(json => {
        character.value = json.data.results[0]
        character.value.thumbnail.path = character.value.thumbnail.path + '.' + character.value.thumbnail.extension
      })
  }

  const id = route.params.id

  fetchComics()
  fetchCharacterByID(id)
  //console.log('char id', charID.value)

</script>

<template>
  <div class="container">

      <div class="row float-start mt-3" style="color: #767676;">
        <div class="col-1">
          <ion-icon name="home" size="small"></ion-icon>
        </div>
        <div class="col-11">
          <h6> Character / {{ character.name }}</h6>
        </div>
        <div class="col-6 col-xl-3 col-">

          <div class="row align-items-center justify-content-center" style="width: 330px; height: 324px;margin-top: 4%">
            <img :src="character.thumbnail.path" alt="">
          </div>
        </div>


          <div class="col-12 col-xl-6" style="margin-left: 1%">
            <div class="col">
              <div class="row " style="margin-top: 1.5%; color: black">

                <h2>
                  <b>{{ character.name }}</b>
                </h2>
              </div>

              <div class="row " style="color: black">
                <h6>
                  {{ character.description ? character.description : "Sem descrição disponível para esse personagem" }}
                </h6>

              </div>
            </div>

          <div class="row">
            <h2 style="color:black">
              <b>Comics</b>
            </h2>
            <div class="row">
              <div class="col-6 col-md-6 col-lg-6 col-xl-3" v-for="(comic, index) in comics" :key="index">

                <!-- Conteúdo do herói aqui -->
                <div  class="mt-3">
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
        </div>
      </div>



</template>

<style scoped>

</style>