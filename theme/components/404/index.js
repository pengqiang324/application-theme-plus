import z404 from './src/404.vue';

z404.install = Vue => {
    console.log(123);
    Vue.component(z404.name, z404);
};

export default z404;
