import Vue from 'vue';
import constantConfig from "@/config/constantConfig";
import moment from "moment";

Vue.prototype.$constantConfig = constantConfig;

Vue.prototype.moment = moment;
moment.locale(Vue.prototype.$constantConfig.lang);
