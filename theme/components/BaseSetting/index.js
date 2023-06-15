import zBaseSetting from "./src/BaseSetting.vue";

zBaseSetting.install = (Vue) => {
  console.log(1);
  Vue.component(zBaseSetting.name, zBaseSetting);
};

export default zBaseSetting;
