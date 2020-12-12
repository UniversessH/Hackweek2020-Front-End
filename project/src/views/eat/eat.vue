<!-- 吃啥页面 -->
<template>
  <div>
    <van-nav-bar
      left-arrow
      @click-left="onClickLeft"
    >
      <van-button
        class="search"
        slot="title"
        round
      >
      <van-icon name="search" />
      </van-button>
    </van-nav-bar>
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
.search{
  width: 13rem;
  height: 2.5rem;
  background-color: #fbc687;
}
</style>
