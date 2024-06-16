import { createRouter, createWebHistory } from 'vue-router';

// Import your components

import DashboardComponent from "@/components/DashboardComponent.vue";
import NotFound from "@/views/NotFound.vue";
import HelloWorld from "@/components/HelloWorld.vue";

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: DashboardComponent,
    },
    {
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld,
    },
    {
        path: '/:catchAll(.*)',
        name: 'Not Found',
        component: NotFound
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
