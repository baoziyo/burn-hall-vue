import Vue from 'vue';

import {
  Button,
  message,
  ConfigProvider,
  Modal,
} from 'ant-design-vue';

Vue.use(Button);
Vue.use(message);
Vue.use(ConfigProvider);
Vue.use(Modal);

Vue.prototype.$message = message;
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
