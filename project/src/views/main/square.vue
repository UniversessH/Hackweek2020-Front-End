<!-- 广场页面 -->
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
      <van-tab title="测评" name="test" to="/test"></van-tab>
      <van-tab title="广场" name="square" to="/square">
        <!-- 广场主页 -->
        <van-card
          v-for="index in 2"
          :key="index"
          title="略略略"
          desc="22：50 季季红火锅"
          :thumb="require('@/assets/头像/2.jpeg')"
        >
          <template #tags>
            <br>
            <p>深夜火锅，针不戳</p>
          </template>
          <template #footer>
            <van-grid :column-num="2" class="grid-height">
              <van-grid-item v-for="value in 2" :key="value" :icon="require('@/assets/logo.png')"/>
            </van-grid>
          </template>
        </van-card>
      </van-tab>
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
      active: 'square'
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .grid-height {
    height: 2rem;
  }
</style>

<style scoped>
.image {
  float: left;
}
</style>