/**
 * Sunny 2020/12/22 上午12:02
 * ogg sit down and start building bugs.
 * Author: Ogg <baoziyoo@gmail.com>
 */

import Vue from 'vue';
import constantConfig from "@/config/constantConfig";
import moment from "moment";

Vue.prototype.$constantConfig = constantConfig;

Vue.prototype.moment = moment;
moment.locale(Vue.prototype.$constantConfig.lang);
