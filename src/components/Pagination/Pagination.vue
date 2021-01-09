<!---
  - Sunny 2020/12/22 下午11:37
  - ogg sit down and start building bugs.
  - Author: Ogg <baoziyoo@gmail.com>
  -->

<template>
  <div class="mt-20 text-center">
    <a-pagination :pageSize="defaultPageSize"
                  :total="paging.total"
                  :current="currentPage"
                  :showSizeChanger="showSizeChanger"
                  :showQuickJumper="true"
                  :pageSizeOptions="this.$constantConfig.pageSizeOptions"
                  :show-total="showTotal"
                  @change="change"
                  @showSizeChange="showSizeChange"
    >
    </a-pagination>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    paging: {required: true},
    currentPage: {required: true},
    pageSize: {default: 20},
    showSizeChanger: {default: true},
  },
  watch: {
    pageSize(value) {
      this.defaultPageSize = value;
    }
  },
  data() {
    return {
      defaultPageSize: 0,
    };
  },
  methods: {
    change(page, pageSize) {
      this.$emit('onChange', {current: page, pageSize: pageSize});
    },
    showSizeChange(page, pageSize) {
      this.$emit('onChange', {current: page, pageSize: pageSize});
    },
    showTotal(total) {
      return `共${this.paging.total}条 当前第${this.currentPage}页/${Math.ceil(total / this.defaultPageSize)}页`;
    }
  },
  created() {
  },
  mounted() {
    // 默认每页展示条数和传入每页展示条数做兼容处理
    if (this.pageSize === 0) {
      this.defaultPageSize = parseInt(this.$constantConfig.pageSizeOptions[0]);
    } else {
      this.defaultPageSize = parseInt(this.pageSize);
    }
  },
}
</script>