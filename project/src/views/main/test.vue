<!-- 测评页面 -->
<template>
  <div>
    <!-- 顶部导航栏 -->
    <img src="@/assets/logo.png" class="image" />
    <van-tabs v-model="active" sticky title-active-color="rgb(243,195,133)" color="rgb(243,195,133)">
      <van-tab title="测评" name="test" to="/test">
        <!-- 测评主页 -->
        <br><br>
        <van-card
          title="小黑"
          desc="一食堂水饺"
          class="card1"
          :thumb="require('@/assets/头像/3.jpg')"
        >
          <template #tags>
            <br />
            <p>
              可自己调酱料，可自己选水饺，也可小笼包等等，味道好评！绝不会踩雷！
            </p>
          </template>
          <template #footer>
            <van-button
              class="btn"
              size="mini"
              :icon="require('@/assets/点赞/点赞1.jpg')"
            />
            <van-button
              class="btn"
              size="mini"
              :icon="require('@/assets/点赞/点赞2.jpg')"
            />
          </template>
        </van-card>
        <van-card
          title="大明"
          desc="九食堂二楼铁板烧"
          class="card1"
          :thumb="require('@/assets/头像/1.jpg')"
        >
          <template #tags>
            <br />
            <p>蒜蓉锅底值得一尝！</p>
          </template>
          <template #footer>
            <van-button
              class="btn"
              size="mini"
              :icon="require('@/assets/点赞/点赞1.jpg')"
            />
            <van-button
              class="btn"
              size="mini"
              :icon="require('@/assets/点赞/点赞2.jpg')"
            />
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
import AppDown from "../layout/components/down";
export default {
  components: {
    AppDown,
  },
  data() {
    return {
      active: "test",
    };
  },
  methods: {},
};
</script>

<style scoped>
.image {
  float: left;
  display: block;
  padding: 0 auto;
  margin: 2% 4%;
  width: 10%;
}
.card1 .van-image {
  height: 60% !important;
  border-radius: 50%;
  width: 60% !important;
  overflow: hidden;
}
.btn {
  border: none;
}
</style>
