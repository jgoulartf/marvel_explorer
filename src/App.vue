<script>
import {defineComponent} from "vue";
import TopBar from "./components/TopBar.vue";

export default defineComponent({
  components: {TopBar}
})


</script>

<template>

    <TopBar/>
    <main>
      <router-view />
    </main>

</template>

<style scoped>

</style>
