<!-- 设置页面（从我的页面进入） -->
<template>
    <van-cell-group>
          <van-icon
            @click="goMy"
            name="arrow-left"
            color="rgb(156,157,159)"
            class="setting"
          />
        <a @click="goMy" style="color:rgb(243,195,133)">  设置</a>
      <van-cell is-link @click="sorry">
        <template #title>
          <span class="custom-title" style="color:rgb(243,195,133)">问题反馈</span>
        </template>
      </van-cell>
      <van-cell is-link @click="sorry">
        <template #title>
          <span class="custom-title" style="color:rgb(243,195,133)">使用指南</span>
        </template>
      </van-cell>
      <van-cell is-link @click="sorry">
        <template #title>
          <span class="custom-title" style="color:rgb(243,195,133)">用户协议</span>
        </template>
      </van-cell>
      <van-cell is-link>
        <template #title>
          <router-link :to="{ name: 'login' }">
            <span class="custom-title" style="color:rgb(243,195,133)">退出登录</span>
          </router-link>
        </template>
      </van-cell>
      <van-cell is-link>
        <template #title>
          <router-link :to="{ name: 'aboutus' }">
            <span class="custom-title" style="color:rgb(243,195,133)">关于我们</span>
          </router-link>
        </template>
      </van-cell>
    </van-cell-group>
</template>

<script>
import {Toast} from 'vant'
export default {
  methods: {
    sorry(){
      Toast('研发小哥哥/小姐姐正在努力开发此功能中！')
    },
    goMy(){
      this.$router.push("/my");
    }
  }
};
</script>

<style scoped>
.setting {
  margin-top: 2rem;
  margin-left: 1rem;
}
</style>