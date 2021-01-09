<!---
  - Sunny 2020/12/22 上午12:02
  - ogg sit down and start building bugs.
  - Author: Ogg <baoziyoo@gmail.com>
  -->

<template>
  <a-config-provider :locale="zh_CN" id="app" v-cloak>
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
