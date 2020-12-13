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
        <van-tabs color="white">
          <van-tab v-for="index in 8" :title="'小家园' + index">
            <!-- 内容 {{ index }} -->
          </van-tab>
        </van-tabs>
         <van-card
          :key="index"
          title="小红"
          desc="九食堂面行人"
          class="card1"
          :thumb="require('@/assets/头像/4.jpg')"
        >
          <template #tags>
            <br>
            <p>美好的一天从干饭开始</p>
          </template>
          <template #footer>
            <van-button class="btn" size="mini" :icon="require('@/assets/点赞/点赞1.jpg')"/>
            <van-button class="btn" size="mini" :icon="require('@/assets/点赞/点赞2.jpg')"/>
          </template>
        </van-card>
        <van-card
          :key="index"
          title="资深熬夜党"
          desc="七食堂黄焖鸡米饭"
          class="card1"
          :thumb="require('@/assets/头像/7.jpg')"
        >
          <template #tags>
            <br>
            <p>让我康康是谁这么晚还在干饭呐？嗷，原来是我。</p>
          </template>
          <template #footer>
            <van-button class="btn" size="mini" :icon="require('@/assets/点赞/点赞1.jpg')"/>
            <van-button class="btn" size="mini" :icon="require('@/assets/点赞/点赞2.jpg')"/>
          </template>
        </van-card>
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
.card1 .van-image{
  height: 4.5rem !important;
  border-radius: 50%;
  width: 4.5rem !important;
  overflow: hidden;
}
.btn{
  border: none;
}
</style>
