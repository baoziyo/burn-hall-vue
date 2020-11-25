<template>
  <a-config-provider :locale="zh_CN" id="app">
    <router-view/>
  </a-config-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/es/locale-provider/zh_CN';

export default {
  components: {},
  data() {
    return {
      zh_CN,
    };
  },
}
</script>
