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
    <van-sidebar v-model="activeKey" @change="onChange">
      <van-sidebar-item title="一食堂" />
      <van-sidebar-item title="二食堂" />
      <van-sidebar-item title="三食堂" />
      <van-sidebar-item title="四食堂" />
      <van-sidebar-item title="五食堂" />
      <van-sidebar-item title="六食堂" />
      <van-sidebar-item title="七食堂" />
      <van-sidebar-item title="八食堂" />
      <van-sidebar-item title="九食堂" />
    </van-sidebar>
  </div>
</template>
<script>
  export default {
  data() {
    return {
      activeKey: 0
    };
  },
  methods: {
    onChange(index) {

    },
    onClickLeft() {
      this.$router.go(-1)
    }
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