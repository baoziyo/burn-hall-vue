import icon from "./icon";
import { Icon } from 'ant-design-vue';

const IconComponent = Icon.createFromIconfontCN({
  scriptUrl: icon
});

export default {
  install(Vue) {
    Vue.component('icon-font', IconComponent);
  }
};