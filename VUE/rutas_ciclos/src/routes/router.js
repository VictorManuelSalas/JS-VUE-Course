import { createRouter, createWebHashHistory } from "vue-router";

//La carga lazy o perezosa hace que se genere menos tiempo de carga
const routes = [
  {
    path: "/",
    component: () =>
      import(
        /*webpackChunkName: "ListPage"*/ "@/modules/pokemon/pages/ListPage"
      ),
  },
  {
    path: "/about",
    //Esta es una carga de la ruta peresoza
    component: () =>
      import(
        /*webpackChunkName: "AboutPage"*/ "@/modules/pokemon/pages/AboutPage"
      ),
  },
  {
    path: "/:id",
    name: "pokemon-id",
    component: () =>
      import(
        /*webpackChunkName: "PokemonPage"*/ "@/modules/pokemon/pages/PokemonPage"
      ),
    props: (route) => {
      //Se declara las props y esta recibe como parametro la ruta de la url, se le saca el id que se encuentra en route.params.id y convertirlo a tipo numero
      const id = Number(route.params.id);
      //Para que se puedan enviar y el componente pueda detectar la prop, se hace un return, y este se le hace una condicion de que si el id
      //no es numerico que mande 1 como id, si este es numerico que mande el correcto
      return isNaN(id) ? { id: 1 } : { id: id };
    },
  },
  {
    //eso es para que cuando el path no sea parecido a los que se tienen
    path: "/:pathMatch(.*)*",
    component: () =>
      import(
        /*webpackChunkName: "NoPageFound"*/ "@/modules/shared/pages/NoPageFound"
      ),
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
