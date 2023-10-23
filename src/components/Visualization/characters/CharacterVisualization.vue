<script setup>

import {ref} from "vue";
import ClickableCharacter from "./ClickableCharacter.vue";

// TODO: Montar array de personagens vindo da api
const characters = [{"name": "Spider Man"}, {"name": "Iron Man"}]



</script>

<template>
  <div>
    <div class="row float-start mt-3" style="color: #767676;">
      <div class="col" >
        <ion-icon name="home" size="small"></ion-icon>
      </div>
      <div class="col mt-1 mr-2">
        <h6>Characters</h6>
      </div>
    </div>

    <div class="row float-start">
      <div class="col" v-for="(character, index) in characters" :key="index">

        <!-- Conteúdo do herói aqui -->
        <div  style="margin-top: 64px;">

          <!-- TODO: Adicionar ClickableCharacter -->
          <router-link :to="{ name: 'characterDetail', query: { characterData: character } }">
            <ClickableCharacter :character-name="character.name" />
          </router-link>

        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>

</style>