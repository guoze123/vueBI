import Vue from "vue";
import VueRouter from "vue-router";
import TemplateManagement from "../views/TemplateManagement.vue";
import TemplateMaking from '../views/TemplateMaking.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/index",
    name: "TemplateManagement",
    component: TemplateManagement
  },
  {
    path: "/",
    name: "TemplateMaking",
    component: TemplateMaking
  }
];

const router = new VueRouter({
  mode: "hash",
  routes
});

export default router;
