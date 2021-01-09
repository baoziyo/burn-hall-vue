<!---
  - Sunny 2021/1/8 上午12:04
  - ogg sit down and start building bugs.
  - Author: Ogg <baoziyoo@gmail.com>
  -->

<template>
  <a-modal
    title="job日志"
    v-model="selfVisible"
    :maskClosable="true"
    :width="this.$constantConfig.modalSize.md"
    :footer="null"
    @cancel="$emit('update:visible', false)"
  >
    <a-table :columns="jobLogColumns" :data-source="jobLogData" rowKey='id' :pagination="false"
             :bordered="true">
      <template slot="args" slot-scope="item">
        {{ item }}
        <a-tooltip placement="top">
          <template slot="title">
            <span>{{ item }}</span>
          </template>
          <div class="text-center"><a>详情</a></div>
        </a-tooltip>
      </template>

      <template slot="resulted" slot-scope="item">
        {{ item === 1 ? '执行成功' : '执行失败' }}
      </template>

      <template slot="trace" slot-scope="item">
        {{ item }}
        <a-tooltip placement="top">
          <template slot="title">
            <span>{{ item }}</span>
          </template>
          <div class="text-center"><a>详情</a></div>
        </a-tooltip>
      </template>

      <template slot="createTime" slot-scope="item">
        {{ moment(item).format('YYYY-MM-DD HH:mm:ss') }}
      </template>
    </a-table>

    <Pagination
      :paging="page"
      :currentPage="currentPage"
      :pageSize="pageSize"
      @onChange="onPaginationChange"/>
  </a-modal>
</template>

<script>
import {getJobLog} from "@/api/system/crontab";
import Pagination from '@/components/Pagination/Pagination';

export default {
  components: {Pagination},
  props: {
    visible: {default: false},
    id: {default: null},
  },
  data() {
    return {
      selfVisible: false,
      jobLogData: {},
      jobLogColumns: [
        {
          title: '参数',
          key: 'args',
          dataIndex: 'args',
          scopedSlots: {customRender: 'args'},
        },
        {
          title: '执行时间',
          key: 'costTime',
          dataIndex: 'costTime',
        },
        {
          title: '执行结果',
          key: 'resulted',
          dataIndex: 'resulted',
          scopedSlots: {customRender: 'resulted'},
        },
        {
          title: '报错信息',
          key: 'trace',
          dataIndex: 'trace',
          scopedSlots: {customRender: 'trace'},
        },
        {
          title: '执行时间',
          key: 'createTime',
          dataIndex: 'createTime',
          scopedSlots: {customRender: 'createTime'},
        },
      ],

      page: {
        total: 0,
      },

      currentPage: 1,
      pageSize: 10,
    };
  },
  mounted() {
  },
  methods: {
    async getJobDetailData() {
      this.$emit('loading', true);

      try {
        let response = await getJobLog({
          jobId: this.id,
          offset: (this.currentPage - 1) * this.pageSize,
          limit: this.pageSize,
        });
        this.jobLogData = response.data;
        this.page = response.paging;

        this.selfVisible = true;
      } catch (error) {
        console.log(error);
      } finally {
        this.$emit('loading', false);
      }
    },

    async onPaginationChange(page) {
      this.currentPage = page.current;
      this.pageSize = page.pageSize;

      let response = await getJobLog({
        jobId: this.id,
        offset: (this.currentPage - 1) * this.pageSize,
        limit: this.pageSize,
      });
      this.jobLogData = response.data;
      this.page = response.paging;
    },
  },
  watch: {
    visible(value) {
      if (value === true) {
        this.currentPage = 1;
        this.pageSize = 10;
        this.getJobDetailData();
      }
      if (value === false) {
        this.selfVisible = false;
      }
    },
  },
}
</script>
