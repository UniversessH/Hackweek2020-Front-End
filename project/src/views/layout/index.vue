<template>
  <div>
    <!-- 顶部导航栏 -->
    <van-tabs v-model="active">
      <van-tab title="测评" name="test" to="/test"></van-tab>
      <van-tab title="广场" name="square" to="/square"></van-tab>
      <van-tab title="关注" name="follow" to="/follow"></van-tab>
    </van-tabs>
    <app-down></app-down>
    <router-view />
  </div>
</template>

<script>
import AppDown from './components/down'
export default {
  name: 'LayoutIndex',
  components: {
    AppDown
  },
  // props: {},
  data () {
    return {
      active: 'test'
    }
  }
  // computed: {},
  // watch: {},
  // created: {},
  // mounted: {},
  // methods: {
  // }
}
</script>

<style lang="less" scoped>

</style>
