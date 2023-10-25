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
          })
        })
  }

  fetchEvents()


</script>

<template>
  <div class="container mt-3">
    <div class="row float-start" style="color: #767676;">
      <div class="col-1">
        <ion-icon name="home" size="small"></ion-icon>
      </div>
      <div class="col-10">
        <h6 style="font-weight: normal">Events</h6>
      </div>
      <div class="row">
        <div class="col-xl-6 col-md-6 col-12">
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

        <div class="col-xl-6 col-md-6 col-12">
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






  </div>

</template>

<style scoped>

</style>