<!---
  - Sunny 2020/12/22 上午12:02
  - ogg sit down and start building bugs.
  - Author: Ogg <baoziyoo@gmail.com>
  -->

<template>
  <div class="login-container">
    <a-layout>
      <a-layout-content>
        <h1>Login</h1>
        <a-form-model :label-col="{span:10}" :wrapper-col="{span:5}">
          <a-form-model-item label="用户名">
            <a-input placeholder="请输入账号">
              <a-icon slot="prefix" type="user"/>
            </a-input>
          </a-form-model-item>
          <a-form-model-item label="密码">
            <a-input placeholder="请输入密码" type="password">
              <a-icon slot="prefix" type="key" />
            </a-input>
          </a-form-model-item>
          <a-form-model-item label="验证码">
            <a-input placeholder="请输入验证码" :maxLength="4">
              <a-icon slot="prefix" type="lock" />
              <div slot="addonAfter" style="min-width:80px;">
                <a-spin :spinning="verificationCodeLoading">
                  <img class="verification-code-img" :src="verificationCodeImg" @click="getVerificationCode()">
                </a-spin>
              </div>
            </a-input>
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-space>
              <a-button type="primary">
                登录
              </a-button>
            </a-space>
          </a-form-model-item>
        </a-form-model>
      </a-layout-content>
      <a-layout-footer>Powered by Ogg © 2020</a-layout-footer>
    </a-layout>
  </div>
</template>

<style lang="less" scoped src='./login.less'/>
<script>
import {getVerificationCode} from '@/api/system/verificationCode';

export default {
  components: {},
  data() {
    return {
      verificationCodeImg: '',
      verificationCodeLoading: false,
    };
  },
  mounted() {
  },
  methods: {
    async getVerificationCode() {
      this.verificationCodeLoading = true;

      try {
        const response = await getVerificationCode();
        this.verificationCodeLoading = false;
        this.verificationCodeImg = response.img;
      } finally {
        this.verificationCodeLoading = false;
      }
    }
  },
  created() {
    this.getVerificationCode();
  },
  watch: {}
}
</script>
