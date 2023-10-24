<script setup>

  import { ref } from "vue";
  import Event from "./Event.vue";

  // URL que retorna as comics
  let events = ref([])
  const fetchEvents = () => {
    let marvelURL = "https://gateway.marvel.com:443/v1/public/events?ts=1&apikey=c9d540c85bf58fb51ee85c29e3d7f938&hash=d944602110d13bedeaa80996b4a069d6"
    fetch(marvelURL)
        .then(response => response.json())
        .then(json => {
          events.value = json.data.results
          events.value.map((event) => {
            event.thumbnail.path = event.thumbnail.path + '.' + event.thumbnail.extension
            console.log(event)
          })
        })
  }

  fetchEvents()


</script>

<template>
  <div class="container">
    <div class="row float-start mt-3" style="color: #767676;">
      <div class="col-1">
        <ion-icon name="home" size="small"></ion-icon>
      </div>
      <div class="col-2">
        <h6>Events</h6>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <div  v-for="(event, index) in events" :key="index">
          <!--Conteúdo do herói aqui-->
          <div style="margin-top: 64px;">
            <Event
                :thumb="event.thumbnail.path"
                :event-title="event.title"
                :event-description="event.description"
                :event-date="event.end"
            />
          </div>

        </div>
      </div>

      <div class="col-6">
        <div v-for="(event, index) in events" :key="index">
          <!--Conteúdo do herói aqui-->
          <div  style="margin-top: 64px;">
            <Event
                :thumb="event.thumbnail.path"
                :event-title="event.title"
                :event-description="event.description"
                :event-date="event.end"
            />
          </div>

        </div>
      </div>
    </div>




  </div>

</template>

<style scoped>

</style>