import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/Pages/HomePage.vue";
import CountryPage from "@/Pages/CountryPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/country/:countryCode",
    name: "country",
    component: CountryPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
