<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft">
      <van-button @click="sorry" size="small" class="search" slot="title" round>
        <van-icon name="search" color="rgb(244,247,197)" /><span style="color:white">  搜索</span>
      </van-button>
    </van-nav-bar>
    <van-sidebar v-model="activeKey" @change="onChange">
      <van-sidebar-item title="一食堂" />
      <van-sidebar-item title="二食堂" />
      <van-sidebar-item title="三食堂" />
      <van-sidebar-item title="四食堂" />
      <van-sidebar-item title="五食堂" />
      <van-sidebar-item title="六食堂" />
      <van-sidebar-item title="七食堂" />
      <van-sidebar-item title="八食堂" />
      <van-sidebar-item title="九食堂" />
    </van-sidebar>
    <app-down></app-down>
    <router-view />
  </div>
</template>
<script>
import { Toast } from "vant";
import AppDown from "../layout/components/down";
export default {
  data() {
    return {
      activeKey: 0,
    };
  },
  methods: {
    sorry() {
      Toast("研发小哥哥/小姐姐正在努力开发此功能中！");
    },
    onChange(index) {},
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.search {
  width: 3rem;
  background-color: #fbc687;
}
</style>