<!---
  - Sunny 2021/1/7 下午11:07
  - ogg sit down and start building bugs.
  - Author: Ogg <baoziyoo@gmail.com>
  -->

<template>
  <a-modal
    title="crontab定时任务"
    v-model="selfVisible"
    :maskClosable="true"
    :width="this.$constantConfig.modalSize.md"
    :footer="null"
    @cancel="$emit('update:visible', false)"
  >
    <a-table :columns="crontabColumns" :data-source="crontabData" rowKey='comments' :pagination="false"
             :bordered="true">
      <template slot="crontab" slot-scope="item">
        {{
          `${item.minutes} ${item.hours} ${item.dayOfMonth} ${item.months} ${item.dayOfWeek} ${item.taskCommandLine}
          ${item.comments}`
        }}
      </template>

      <template slot="status" slot-scope="item">
        <Tag :status="item.enabled"></Tag>
      </template>
    </a-table>
  </a-modal>
</template>

<script>
import {searchCrontab} from "@/api/system/crontab";
import Tag from "@/components/Tag/Tag";

export default {
  components: {Tag},
  props: {
    visible: {default: false},
  },
  data() {
    return {
      crontabData: [],
      crontabColumns: [
        {
          title: '定时任务',
          key: 'crontab',
          scopedSlots: {customRender: 'crontab'},
        },
        {
          title: '状态',
          key: 'status',
          width: 80,
          scopedSlots: {customRender: 'status'},
        },
      ],
      initCrontabLoading: false,
      selfVisible: false,
    };
  },
  mounted() {
  },
  methods: {
    async searchCrontabData() {
      this.$emit('loading', true);

      try {
        this.crontabData = await searchCrontab();
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
        this.searchCrontabData();
      }
      if (value === false) {
        this.selfVisible = false;
      }
    }
  },
}
</script>
