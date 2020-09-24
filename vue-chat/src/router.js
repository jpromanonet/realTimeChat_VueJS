import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  router: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
  ],
});
