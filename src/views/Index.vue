<!---
  - Sunny 2020/12/22 上午12:02
  - ogg sit down and start building bugs.
  - Author: Ogg <baoziyoo@gmail.com>
  -->

<template>
  <a-layout class="layout-container">
    <a-layout-sider v-model="collapsed" ref="sider" :trigger="null" :collapsible="true">
      <div class="logo"/>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['4']">
        <a-menu-item key="1">
          <a-icon type="user"/>
          <span class="nav-text">nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera"/>
          <span class="nav-text">nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload"/>
          <span class="nav-text">nav 3</span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="bar-chart"/>
          <span class="nav-text">nav 4</span>
        </a-menu-item>
        <a-menu-item key="5">
          <a-icon type="cloud-o"/>
          <span class="nav-text">nav 5</span>
        </a-menu-item>
        <a-menu-item key="6">
          <a-icon type="appstore-o"/>
          <span class="nav-text">nav 6</span>
        </a-menu-item>
        <a-menu-item key="7">
          <a-icon type="team"/>
          <span class="nav-text">nav 7</span>
        </a-menu-item>
        <a-menu-item key="8">
          <a-icon type="shop"/>
          <span class="nav-text">nav 8</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <div class="layout-header">
        <div class="user">
          <a-dropdown>
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
              <a-avatar icon="user" size="small"/>
              Admin
              <a-icon type="down"/>
            </a>
            <a-menu slot="overlay">
              <a-menu-item key="0">
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
              </a-menu-item>
              <a-menu-item key="1">
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
              </a-menu-item>
              <a-menu-divider/>
              <a-menu-item key="2">
                <a target="_blank" rel="">
                  <a-icon type="poweroff"/>
                  退出登录
                </a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </div>


      <a-layout-content>
        <a-breadcrumb>
          <a-breadcrumb-item href="">
            <a-icon type="home"/>
          </a-breadcrumb-item>
          <a-breadcrumb-item href="">
            <a-icon type="user"/>
            <span>Application List</span>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            Application
          </a-breadcrumb-item>
        </a-breadcrumb>
        <div class="layout-content">
          <router-view/>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style lang="less" scoped src='./index.less'/>
<script>
export default {
  components: {},
  data() {
    return {
      collapsed: false,
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
