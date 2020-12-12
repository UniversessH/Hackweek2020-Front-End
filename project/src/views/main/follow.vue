<!-- 关注页面 -->
<template>
  <div>
    <!-- 顶部导航栏 -->
    <van-image
      fit="contain"
      class="image"
      round
      width="2.5rem"
      height="2.5rem"
      :src="require('@/assets/logo.png')"
    />
    <van-tabs v-model="active">
      <van-tab title="测评" name="test" to="/test"></van-tab>
      <van-tab title="广场" name="square" to="/square"></van-tab>
      <van-tab title="关注" name="follow" to="/follow">
        <van-tabs>
          <van-tab v-for="index in 8" :title="'标签 ' + index">
            内容 {{ index }}
          </van-tab>
          <van-skeleton
            title avatar :row="3">
            <div>实际内容</div>
          </van-skeleton>
        </van-tabs>
      </van-tab>
    </van-tabs>
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

<style scoped>
.image {
  float: left;
}
</style>
