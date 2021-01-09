<!---
  - Sunny 2020/12/22 上午12:02
  - ogg sit down and start building bugs.
  - Author: Ogg <baoziyoo@gmail.com>
  -->

<template>
  <div class="user-user-container">
    <div class="page-search-group">
      <a-form-model :label-col="{span:7}" :wrapper-col="{span:17}">
        <a-row>
          <a-col :span="6">
            <a-form-model-item label="用户名">
              <a-input placeholder="请输入用户名"/>
            </a-form-model-item>
          </a-col>
          <a-col :span="6" class="pl-30">
            <a-form-model-item>
              <a-space>
                <a-button type="primary">
                  <a-icon type="search"/>
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
        <a-button type="primary" class="button-color-green">
          <a-icon type="plus"/>
          添加用户
        </a-button>
      </a-space>

      <a-space class="pull-right">
        <a-button type="primary">
          <icon-font class="icon" type="icon-import"/>
          导入
        </a-button>
        <a-button type="primary">
          <icon-font class="icon" type="icon-export"/>
          导出
        </a-button>
      </a-space>
    </div>

    <a-table :columns="columns" :data-source="data" class="mt-10" :pagination="false">
      <a slot="name" slot-scope="text">{{ text }}</a>
    </a-table>

    <Pagination
      :paging="{total:200}"
      :currentPage="page"
      :pageSize="1"
      @onChange="onPaginationChange"/>
  </div>
</template>

<style lang="less" scoped src='./user.less'/>
<script>
import Pagination from '@/components/Pagination/Pagination'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: {customRender: 'name'},
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true,
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {
  components: {Pagination},
  data() {
    return {
      data,
      columns,
      page: 1,
    };
  },
  mounted() {
  },
  methods: {
    onPaginationChange(value) {
      this.page = value.current;
      this.paging.offset = (value.current - 1) * value.pageSize;
      this.paging.limit = value.pageSize;
    }
  },
  created() {
  },
  watch: {}
}
</script>
