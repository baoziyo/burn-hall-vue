<!---
  - Sunny 2020/12/22 上午12:02
  - ogg sit down and start building bugs.
  - Author: Ogg <baoziyoo@gmail.com>
  -->

<template>
  <div class="system-job-container">
    <div class="page-search-group">
      <a-form-model :label-col="{span:7}" :wrapper-col="{span:17}" :model="searchForm">
        <a-row>
          <a-col :span="6">
            <a-form-model-item label="任务名称">
              <a-input placeholder="请输入任务名称" v-model="searchForm.name" @pressEnter="search()"/>
            </a-form-model-item>
          </a-col>
          <a-col :span="6" class="pl-30">
            <a-form-model-item>
              <a-space>
                <a-button type="primary" @click="search()" :loading="searchLoading">
                  <a-icon type="search" v-if="!searchLoading"/>
                  搜索
                </a-button>
              </a-space>
            </a-form-model-item>
          </a-col>
        </a-row>
      </a-form-model>
    </div>

    <div class="page-bar mt-10 clearfix">
      <a-space class="pull-left">
        <a-button type="primary" class="button-color-green" @click="initCrontab()" :loading="initCrontabLoading">
          <icon-font class="icon" type="icon-init" v-if="!initCrontabLoading"/>
          {{ crontabData.length > 0 ? '重新' : '' }}初始化定时任务
        </a-button>
        <a-button type="primary" @click="crontabModalVisible=true;" v-if="crontabData.length > 0"
                  :loading="crontabModalLoading">
          查看定时任务
        </a-button>
      </a-space>
    </div>

    <a-empty v-if="crontabData.length <= 0" class="mt-10">
      <span slot="description">请先初始化定时任务</span>
      <a-button type="primary" class="button-color-green" @click="initCrontab()" :loading="initCrontabLoading">
        <icon-font class="icon" type="icon-init" v-if="!initCrontabLoading"/>
        {{ crontabData.length > 0 ? '重新' : '' }}初始化定时任务
      </a-button>
    </a-empty>

    <a-table :columns="jobColumns" :data-source="jobData" class="mt-10" rowKey='id' :pagination="false"
             :bordered="true" v-if="crontabData.length > 0">
      <template slot="status" slot-scope="item">
        <Tag :status="item.status"></Tag>
      </template>

      <template slot="status" slot-scope="item">
        <Tag :status="item.status"></Tag>
      </template>

      <template slot="args" slot-scope="item">
        {{ item }}
        <a-tooltip placement="top">
          <template slot="title">
            <span>{{ item }}</span>
          </template>
          <div class="text-center"><a>详情</a></div>
        </a-tooltip>
      </template>

      <template slot="option" slot-scope="item">
        <a-dropdown placement="bottomCenter">
          <a-menu slot="overlay">
            <a-menu-item key="1" @click="setJob(item.id,item.status)" :disabled="jobSetStatusLoading">
              <icon-font class="icon" :type="`icon-${item.status !== 1 ? 'start' : 'stop'}`"/>
              {{ item.status !== 1 ? '开启' : '停止' }}
            </a-menu-item>
            <a-menu-item key="2" @click="jobLodId=item.id;jobLogModalVisible=true;" :disabled="jobLogLoading">
              <icon-font class="icon" type="icon-log"/>
              日志
            </a-menu-item>
          </a-menu>
          <a-button :loading="jobDetailLoading" @click="jobDetailId=item.id;jobDetailModalVisible=true;">详情
            <a-icon type="down"/>
          </a-button>
        </a-dropdown>
      </template>
    </a-table>

    <Pagination
      :paging="jobPage"
      :currentPage="jobCurrentPage"
      :pageSize="jobCurrentPageSize"
      @onChange="onJobPaginationChange"/>

    <CrontabModal :visible.sync="crontabModalVisible"
                  @loading="(value)=>{this.crontabModalLoading=value;}"/>

    <JobLogModal :visible.sync="jobLogModalVisible"
                 :id="jobLodId"
                 @loading="(value)=>{this.jobLogLoading=value;}"/>

    <JobDetailModal :visible.sync="jobDetailModalVisible"
                    :id="jobDetailId"
                    @loading="(value)=>{this.jobDetailLoading=value;}"/>
  </div>
</template>

<style lang="less" scoped src='./job.less'/>
<script>
import {searchCrontab, initCrontab, searchJob, setJobStatus} from "@/api/system/crontab";
import Tag from "@/components/Tag/Tag";
import Pagination from '@/components/Pagination/Pagination';
import CrontabModal from './components/CrontabModal';
import JobDetailModal from './components/JobDetailModal';
import JobLogModal from './components/JobLogModal';

export default {
  components: {Tag, Pagination, CrontabModal, JobDetailModal, JobLogModal},
  data() {
    return {
      crontabModalLoading: false,
      crontabModalVisible: false,

      jobDetailId: null,
      jobDetailLoading: false,
      jobDetailModalVisible: false,

      jobLodId: null,
      jobLogModalVisible: false,
      jobLogLoading: false,


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

      jobData: [],
      jobColumns: [
        {
          title: '表达式',
          key: 'expression',
          dataIndex: 'expression',
        },
        {
          title: '任务名称',
          key: 'name',
          dataIndex: 'name',
        },
        {
          title: '执行方法',
          key: 'class',
          dataIndex: 'class',
        },
        {
          title: '参数',
          key: 'args',
          ellipsis: true,
          dataIndex: 'args',
          scopedSlots: {customRender: 'args'},
        },
        {
          title: '状态',
          key: 'status',
          width: 80,
          scopedSlots: {customRender: 'status'},
        },
        {
          title: '上次执行时间',
          key: 'lastExecutionTime',
          width: 190,
          dataIndex: 'lastExecutionTime',
        },
        {
          title: '下次执行时间',
          key: 'nextExecutionTime',
          width: 190,
          dataIndex: 'nextExecutionTime',
        },
        {
          title: '操作',
          key: 'option',
          scopedSlots: {customRender: 'option'},
        },
      ],
      jobPage: {
        total: 0,
      },

      jobCurrentPage: 1,
      jobCurrentPageSize: 20,

      jobSetStatusLoading: false,

      searchLoading: false,
      searchForm: {
        name: '',
      },
    };
  },
  mounted() {
  },
  methods: {
    async initCrontab() {
      this.initCrontabLoading = true;
      try {
        await initCrontab({enforce: true});
        this.$message.success('初始化成功！');
      } catch (error) {
        console.log(error);
      } finally {
        await this.searchCrontab();
        await this.searchJob();
        this.initCrontabLoading = false;
      }
    },

    async searchCrontab() {
      this.crontabData = await searchCrontab();
    },

    async searchJob() {
      let response = await searchJob({
        conditions: this.searchForm,
        offset: (this.jobCurrentPage - 1) * this.jobCurrentPageSize,
        limit: this.jobCurrentPageSize,
      });

      this.jobData = response.data;
      this.jobPage = response.paging;
    },

    onJobPaginationChange(page) {
      this.jobCurrentPage = page.current;
      this.jobCurrentPageSize = page.pageSize;

      this.searchJob();
    },

    async setJob(id, status) {
      this.jobSetStatusLoading = true;

      try {
        await setJobStatus(id, status);
        await this.searchJob();
      } catch (error) {
        console.log(error);
      } finally {
        this.jobSetStatusLoading = false;
      }
    },

    async search() {
      this.searchLoading = true;

      try {
        await this.searchJob();
      } catch (error) {
        console.log(error);
      } finally {
        this.searchLoading = false;
      }
    },
  },
  created() {
    this.searchCrontab();
    this.searchJob();
  },
  watch: {}
}
</script>
