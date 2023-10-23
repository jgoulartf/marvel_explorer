import { createRouter, createWebHistory } from 'vue-router'

import HomeVisualization from "../components/Visualization/HomeVisualization.vue";
import CharacterVisualization from "../components/Visualization/characters/CharacterVisualization.vue";
import ContactVisualization from "../components/Visualization/contact/ContactVisualization.vue";
import EventsVisualization from "../components/Visualization/events/EventsVisualization.vue";
import ComicsVisualization from "../components/Visualization/comics/ComicsVisualization.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeVisualization,
        },
        {
            path: '/character',
            component: CharacterVisualization,
        },
        {
            path: '/contact',
            component: ContactVisualization,
        },
    ],
})
