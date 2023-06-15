import z404 from "./src/404.vue";

z404.install = (Vue) => {
  Vue.component(z404.name, z404);
};

export default z404;
