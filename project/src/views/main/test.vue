<!-- 测评页面 -->
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
    <van-tabs v-model="active" sticky>
      <van-tab title="测评" name="test" to="/test">
        <!-- 测评主页 -->
        <van-card
          v-for="index in 2"
          :key="index"
          title="小黑"
          desc="一食堂水饺"
          :thumb="require('@/assets/头像/3.jpg')"
        >
          <template #tags>
            <br>
            <p>可自己调酱料，可自己选水饺，也可小笼包等等，味道好评！绝不会踩雷！</p>
          </template>
          <template #footer>
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
          </template>
        </van-card>
      </van-tab>
      <van-tab title="广场" name="square" to="/square"></van-tab>
      <van-tab title="关注" name="follow" to="/follow"></van-tab>
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
      active: 'test'
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.image {
  float: left
}
</style>
