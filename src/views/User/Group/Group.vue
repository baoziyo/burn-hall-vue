<!---
  - Sunny 2020/12/22 上午12:02
  - ogg sit down and start building bugs.
  - Author: Ogg <baoziyoo@gmail.com>
  -->

<template>
  <div class="user-group-container">
    <div class="page-bar mt-10 clearfix">
      <a-space class="pull-left">
        <a-button type="primary" class="button-color-green" :loading="addGroupLoading" @click="addModalVisible=true;">
          <a-icon type="plus" v-if="!addGroupLoading"/>
          添加用户组
        </a-button>
      </a-space>
    </div>

    <a-table :columns="columns" :data-source="groupData" class="mt-10" :pagination="false" rowKey='id'>
      <template slot="status" slot-scope="item">
        <Tag :status="item.status"></Tag>
      </template>

      <template slot="option" slot-scope="item">
        <a-dropdown placement="bottomCenter">
          <a-menu slot="overlay">
            <a-menu-item key="1" :disabled="deleteGroupLoading">
              <a-popconfirm placement="topLeft" ok-text="确定" cancel-text="取消" @confirm="deleteGroup(item.id)">
                <template slot="title">
                  <p>确定删除吗？</p>
                </template>
                <a-icon type="delete"/>
                删除
              </a-popconfirm>
            </a-menu-item>
          </a-menu>
          <a-button @click="editGroupId=item.id;editModalVisible=true;" :loading="editGroupLoading">
            修改
            <a-icon type="down"/>
          </a-button>
        </a-dropdown>
      </template>
    </a-table>

    <Pagination
      :paging="page"
      :currentPage="currentPage"
      :pageSize="currentPageSize"
      @onChange="onPaginationChange"/>

    <GroupModal :visible.sync="addModalVisible"
                @loading="(value)=>{this.addGroupLoading=value;}"/>

    <GroupModal :visible.sync="editModalVisible"
                :id="editGroupId"
                @loading="(value)=>{this.editGroupLoading=value;}"/>
  </div>
</template>

<style lang="less" scoped src='./group.less'/>
<script>
import Pagination from '@/components/Pagination/Pagination';
import GroupModal from './components/GroupModal';
import {searchGroup, deleteGroup} from '@/api/user/group';
import Tag from "@/components/Tag/Tag";
import {message} from "ant-design-vue";


export default {
  components: {Pagination, GroupModal, Tag},
  data() {
    return {
      columns: [
        {
          title: '用户组名称',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '状态',
          key: 'status',
          width: 80,
          scopedSlots: {customRender: 'status'},
        },
        {
          title: '操作',
          key: 'option',
          width: 80,
          scopedSlots: {customRender: 'option'},
        },
      ],
      page: {
        total: 0,
      },

      currentPage: 1,
      currentPageSize: 20,

      groupData: [],
      addModalVisible: false,
      addGroupLoading: false,

      deleteGroupLoading: false,

      editGroupId: null,
      editGroupLoading: false,
      editModalVisible: false,
    };
  },
  mounted() {
    this.searchGroup();
  },
  methods: {
    async searchGroup() {
      let response = await searchGroup({
        offset: (this.currentPage - 1) * this.currentPageSize,
        limit: this.currentPageSize,
      });

      this.groupData = response.data;
      this.page = response.paging;
    },

    onPaginationChange(value) {
      this.page = value.current;
      this.paging.offset = (value.current - 1) * value.pageSize;
      this.paging.limit = value.pageSize;
    },

    async deleteGroup(id) {
      this.deleteGroupLoading = true;

      try {
        await deleteGroup(id);
        message.success('删除成功');
        await this.searchGroup();
      } catch (error) {
        console.log(error);
      } finally {
        this.deleteGroupLoading = false;
      }
    }
  },
  created() {
  },
  watch: {
    addModalVisible(value) {
      if (value === false) {
        this.searchGroup();
      }
    },
    editModalVisible(value) {
      if (value === false) {
        this.searchGroup();
      }
    }
  }
}
</script>
