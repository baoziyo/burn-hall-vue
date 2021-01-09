<!---
  - Sunny 2021/1/8 下午9:02
  - ogg sit down and start building bugs.
  - Author: Ogg <baoziyoo@gmail.com>
  -->

<template>
  <a-modal
    class="user-group-container-group"
    title="添加用户组"
    v-model="selfVisible"
    :maskClosable="true"
    :width="this.$constantConfig.modalSize.sm"
    :footer="null"
    @cancel="$emit('update:visible', false)"
  >
    <a-form-model :model="form" :label-col="{span:4}" :wrapper-col="{span:20}" ref="form" :rules="rules">
      <a-form-model-item label="用户组名称" prop="name">
        <a-input v-model="form.name"/>
      </a-form-model-item>
      <a-form-model-item label="状态" prop="status">
        <a-switch v-model="form.status"/>
      </a-form-model-item>
      <a-form-model-item label="权限菜单" prop="rules">
        <a-tree
          class="menu"
          v-model="form.rules"
          :tree-data="menuTree"
          :checkable="true"
          :defaultExpandAll="false"
          :replaceFields="{children:'children', title:'title', key:'name'}"
        />
      </a-form-model-item>

      <a-form-model-item :wrapper-col="{span:14,offset:4}">
        <a-space>
          <a-button type="primary" @click="onSubmit" :loading="submitLoading">
            保存
          </a-button>
          <a-button @click="resetForm">
            取消
          </a-button>
        </a-space>
      </a-form-model-item>
    </a-form-model>
  </a-modal>
</template>

<style lang="less" scoped src='./group_modal.less'/>

<script>
import {searchMenu} from '@/api/user/menu';
import {createGroup, getGroup, updateGroup} from '@/api/user/group';
import {message} from "ant-design-vue";

export default {
  components: {},
  props: {
    visible: {default: false},
    id: {default: null},
  },
  data() {
    return {
      selfVisible: false,
      form: {
        name: '',
        status: false,
        rules: [],
      },
      rules: {
        name: [
          {required: true, message: '请输入权限组名称', trigger: 'blur'},
        ],
      },
      menuTree: [],
      submitLoading: false,
    };
  },
  mounted() {
  },
  methods: {
    async getSearchMenu() {
      this.$emit('loading', true);

      try {
        if (this.id !== null) {
          let response = await getGroup(this.id);
          response.status = response.status === 1;

          this.form = response;
        }

        this.menuTree = await searchMenu();

        this.selfVisible = true;
      } catch (error) {
        console.log(error);
      } finally {
        this.$emit('loading', false);
      }
    },

    async createGroup(data) {
      this.submitLoading = true;
      try {
        await createGroup(data);
        message.success('创建成功');
        this.resetForm();
      } catch (error) {
        console.log(error);
      } finally {
        this.submitLoading = false;
      }
    },

    async updateGroup(id, data) {
      this.submitLoading = true;
      try {
        await updateGroup(id, data);
        message.success('更新成功');
        this.resetForm();
      } catch (error) {
        console.log(error);
      } finally {
        this.submitLoading = false;
      }
    },

    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (this.id !== null) {
            this.updateGroup(this.id, this.form);
          } else {
            this.createGroup(this.form);
          }
        } else {
          return false;
        }
      });
    },

    resetForm() {
      this.$refs.form.resetFields();
      this.$emit('update:visible', false);
    },
  },
  watch: {
    visible(value) {
      if (value === true) {
        this.getSearchMenu();
      }
      if (value === false) {
        this.selfVisible = false;
      }
    }
  },
}
</script>