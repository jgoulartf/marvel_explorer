<script>
import {defineComponent} from "vue";
import TopBar from "./components/TopBar.vue";

export default defineComponent({
  components: {TopBar}
})


</script>

<template>
  <div class="container">

    <TopBar/>
    <main>
      <router-view />
    </main>
  </div>

</template>

<style scoped>

</style>
