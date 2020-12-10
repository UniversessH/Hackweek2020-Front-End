<!-- 关注页面 -->
<template>
  <div>
    <!-- 顶部导航栏 -->
    <van-tabs v-model="active">
      <van-tab title="测评" name="test" to="/test"></van-tab>
      <van-tab title="广场" name="square" to="/square"></van-tab>
      <van-tab title="关注" name="follow" to="/follow"></van-tab>
    </van-tabs>
    <h1>关注</h1>
    <app-down></app-down>
    <router-view />
  </div>
</template>

<script>
import AppDown from '../layout/components/down'
export default {
  components: {
    AppDown
  },
  data () {
    return {
      active: 'follow'
    }
  },
  methods: {

  }
}
</script>
