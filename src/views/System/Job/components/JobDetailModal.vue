<!---
  - Sunny 2021/1/8 上午12:04
  - ogg sit down and start building bugs.
  - Author: Ogg <baoziyoo@gmail.com>
  -->

<template>
  <a-modal
    title="任务详情"
    v-model="selfVisible"
    :maskClosable="true"
    :width="this.$constantConfig.modalSize.md"
    :footer="null"
    @cancel="$emit('update:visible', false)"
  >
    <a-descriptions bordered :title="`任务名称:${jobDetailData.name}`" size="default" :column="1">
      <a-descriptions-item label="Class">{{ jobDetailData.class }}</a-descriptions-item>
      <a-descriptions-item label="状态">
        <Tag :status="jobDetailData.status"></Tag>
      </a-descriptions-item>
      <a-descriptions-item label="执行表达式">{{ jobDetailData.expression }}</a-descriptions-item>
      <a-descriptions-item label="参数">{{ jobDetailData.args }}</a-descriptions-item>
      <a-descriptions-item label="上次执行时间">{{ jobDetailData.lastExecutionTime }}</a-descriptions-item>
      <a-descriptions-item label="下次执行时间">{{ jobDetailData.nextExecutionTime }}</a-descriptions-item>
    </a-descriptions>
  </a-modal>
</template>

<script>
import {getJob} from "@/api/system/crontab";
import Tag from "@/components/Tag/Tag";

export default {
  components: {Tag},
  props: {
    visible: {default: false},
    id: {default: null},
  },
  data() {
    return {
      selfVisible: false,
      jobDetailData: {},
    };
  },
  mounted() {
  },
  methods: {
    async getJobDetailData() {
      this.$emit('loading', true);

      try {
        this.jobDetailData = await getJob(this.id);
        this.selfVisible = true;
      } catch (error) {
        console.log(error);
      } finally {
        this.$emit('loading', false);
      }
    },
  },
  watch: {
    visible(value) {
      if (value === true) {
        this.getJobDetailData();
      }
      if (value === false) {
        this.selfVisible = false;
      }
    },
  },
}
</script>
