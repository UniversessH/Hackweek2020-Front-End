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
          title="略略略"
          desc="22：50 季季红火锅"
          class="card1"
          :thumb="require('@/assets/头像/2.jpeg')"
        >
          <template #tags>
            <br>
            <p>深夜火锅，针不戳</p>
          </template>
          <template #footer>
            <van-grid :column-num="2" icon-size="0.8rem">
              <van-grid-item class="grid-height" :icon="require('@/assets/点赞/点赞1.jpg')"/>
              <van-grid-item class="grid-height" :icon="require('@/assets/点赞/点赞2.jpg')"/>
            </van-grid>
          </template>
        </van-card>
        <van-card
          title="啦啦啦"
          desc="18：45 杨国福麻辣烫"
          class="card1"
          :thumb="require('@/assets/头像/6.jpg')"
        >
          <template #tags>
            <br>
            <p>听说冬天和麻辣烫更配哦~</p>
          </template>
          <template #footer>
            <van-grid :column-num="2" icon-size="0.8rem">
              <van-grid-item class="grid-height" :icon="require('@/assets/点赞/点赞1.jpg')"/>
              <van-grid-item class="grid-height" :icon="require('@/assets/点赞/点赞2.jpg')"/>
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
.grid-height{
  height: 2rem;
  align-items:center;
}
.card1 .van-image{
  height: 4.5rem !important;
  border-radius: 50%;
  width: 4.5rem !important;
  overflow: hidden;
}
</style>