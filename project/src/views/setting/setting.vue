<!-- 设置页面（从我的页面进入） -->
<template>
  <div>
    <van-cell-group>
      <van-nav-bar
        title="设置"
        left-arrow
        @click-left="onClickLeft"
      />
      <van-cell is-link>
        <template #title>
          <span class="custom-title">问题反馈</span>
        </template>
      </van-cell>
      <van-cell is-link>
        <template #title>
          <span class="custom-title">使用指南</span>
        </template>
      </van-cell>
      <van-cell is-link>
        <template #title>
          <span class="custom-title">用户协议</span>
        </template>
      </van-cell>
      <van-cell is-link>
        <template #title>
          <span class="custom-title">关于我们</span>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
  }
}
</script>
<style scoped>
.setting{
    margin-top: 2rem;
    margin-left: 1rem;
}
</style>