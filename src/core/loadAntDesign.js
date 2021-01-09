/**
 * Sunny 2020/12/22 上午12:02
 * ogg sit down and start building bugs.
 * Author: Ogg <baoziyoo@gmail.com>
 */

import Vue from 'vue';

import {
  Button,
  message,
  ConfigProvider,
  Modal,
  Layout,
  Icon,
  Menu,
  Breadcrumb,
  Collapse,
  Dropdown,
  Avatar,
  FormModel,
  Input,
  Space,
  Spin,
  Col,
  Row,
  Table,
  Pagination,
  BackTop,
  Empty,
  Tag,
  Badge,
  Tooltip,
  Descriptions,
  Switch,
  Tree,
  Popconfirm,
} from 'ant-design-vue';

Vue.use(Button);
Vue.use(message);
Vue.use(ConfigProvider);
Vue.use(Modal);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Menu);
Vue.use(Breadcrumb);
Vue.use(Collapse);
Vue.use(Dropdown);
Vue.use(Avatar);
Vue.use(FormModel);
Vue.use(Input);
Vue.use(Space);
Vue.use(Spin);
Vue.use(Col);
Vue.use(Row);
Vue.use(Table);
Vue.use(Pagination);
Vue.use(BackTop);
Vue.use(Empty);
Vue.use(Tag);
Vue.use(Badge);
Vue.use(Tooltip);
Vue.use(Descriptions);
Vue.use(Switch);
Vue.use(Tree);
Vue.use(Popconfirm);

Vue.prototype.$message = message;
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
