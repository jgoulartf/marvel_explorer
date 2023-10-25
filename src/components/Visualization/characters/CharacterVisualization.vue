<script setup>

import {ref} from "vue";
  import ClickableCharacter from "./ClickableCharacter.vue";

  let characters = ref([])


  // TODO: Montar array de personagens vindo da api
  const fetchCharacters = () => {
    let marvelURL = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=c9d540c85bf58fb51ee85c29e3d7f938&hash=d944602110d13bedeaa80996b4a069d6"
    fetch(marvelURL)
        .then(response => response.json())
        .then(json => {
          characters.value = json.data.results
          characters.value.map((characters) => {
            characters.thumbnail.path = characters.thumbnail.path + '.' + characters.thumbnail.extension
          })
        })
  }

  fetchCharacters()


</script>

<template>
  <div class="container mt-3">
    <div class="row float-start" style="color: #767676;">
      <div class="col" >
        <ion-icon name="home" size="small"></ion-icon>
      </div>
      <div class="col">
        <h6 style="font-weight: normal">Characters</h6>
      </div>
    </div>

    <div class="row float-start">

      <div class="col-6 col-md-3 col-sm-6 col-xl-2" v-for="(character, index) in characters" :key="index">
        <!-- Conteúdo do herói aqui -->
        <div  style="margin-top: 64px;">
          <!-- TODO: Adicionar ClickableCharacter -->
          <router-link :to="{ name: 'characterDetail', params: { id: character.id }}" style="color: black">
            <ClickableCharacter :character-name="character.name" :image="character.thumbnail.path"/>
          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>