<!---
  - Sunny 2020/12/28 下午9:00
  - ogg sit down and start building bugs.
  - Author: Ogg <baoziyoo@gmail.com>
  -->

<template>
  <a-tag color="green" v-if="status == 1">
    <a-badge color="green" status="processing"/>开启
  </a-tag>
  <a-tag color="blue" v-else>
    <a-badge color="blue" status="processing"/>关闭
  </a-tag>
</template>
<script>
export default {
  components: {},
  props: {
    status: {default: false},
  },
  watch: {},
  data() {
    return {};
  },
  methods: {},
  created() {
  },
  mounted() {
  },
}
</script>