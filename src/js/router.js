import { createRouter, createWebHistory } from 'vue-router'

import HomeVisualization from "../components/Visualization/HomeVisualization.vue";
import CharacterVisualization from "../components/Visualization/characters/CharacterVisualization.vue";
import ComicsVisualization from "../components/Visualization/comics/ComicsVisualization.vue";
import EventsVisualization from "../components/Visualization/events/EventsVisualization.vue";
import ContactVisualization from "../components/Visualization/contact/ContactVisualization.vue";
import CharacterDetailVisualization from "../components/Visualization/characters/CharacterDetailVisualization.vue";

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
            path: '/comics',
            component: ComicsVisualization,
        },
        {
            path: '/events',
            component: EventsVisualization,
        },
        {
            path: '/contact',
            component: ContactVisualization,
        },
        {
            path: '/characterDetail/:id',
            name: 'characterDetail',

            component: CharacterDetailVisualization,
        },
    ],
})
