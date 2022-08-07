import zSearchController from './src/SearchController.vue';
 
zSearchController.install = (Vue) => {
  Vue.component(zSearchController.name,zSearchController)
}
 
export default zSearchController;