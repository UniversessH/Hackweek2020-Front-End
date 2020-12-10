<!-- 主页底部栏 -->
<template>
  <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
    <van-tabbar-item to="/test">
      <span>主页</span>
      <template #icon="props">
        <img :src="props.active ? icon.active : icon.inactive" />
      </template>
    </van-tabbar-item>
    <van-icon class-prefix="my-icon" name="liebiao" />
    <van-tabbar-item icon="search" to="/eat">吃啥</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/publish">发布</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/health">健康</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/my">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'AppDown',
  components: {},
  props: {},
  data () {
    return {
      active: 0,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
