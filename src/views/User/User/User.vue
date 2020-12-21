<!---
  - Sunny 2020/12/22 上午12:02
  - ogg sit down and start building bugs.
  - Author: Ogg <baoziyoo@gmail.com>
  -->

<template>
  <div class="user-user-container">
    <div class="page-search-group">
      <a-form-model :label-col="{span:6}" :wrapper-col="{span:18}">
        <a-row>
          <a-col :span="6">
            <a-form-model-item label="用户名">
              <a-input/>
            </a-form-model-item>
          </a-col>
        </a-row>
      </a-form-model>
    </div>

    <a-table :columns="columns" :data-source="data" class="mt-20">
      <a slot="name" slot-scope="text">{{ text }}</a>
    </a-table>
  </div>
</template>

<style lang="less" scoped src='./user.less'/>
<script>
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
  components: {},
  data() {
    return {
      data,
      columns,
    };
  },
  mounted() {
  },
  methods: {},
  created() {
  },
  watch: {}
}
</script>
