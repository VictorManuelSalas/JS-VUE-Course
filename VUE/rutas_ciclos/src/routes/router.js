import { createRouter, createWebHashHistory } from "vue-router";

//La carga lazy o perezosa hace que se genere menos tiempo de carga
const routes = [
  {
    path: "/",
    component: () => import(/*webpackChunkName: "ListPage"*/ "@/modules/pokemon/pages/ListPage"),
  },
  {
    path: "/about",
    //Esta es una carga de la ruta peresoza
    component: () => import(/*webpackChunkName: "AboutPage"*/ "@/modules/pokemon/pages/AboutPage"),
  },
  {
    path: "/:id",
    component: () => import(/*webpackChunkName: "PokemonPage"*/ "@/modules/pokemon/pages/PokemonPage"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import(/*webpackChunkName: "NoPageFound"*/ "@/modules/shared/pages/NoPageFound"),
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
