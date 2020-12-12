<!-- 排行页面 -->
<template>
  <div>
    <van-nav-bar
      class="list-top"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="image">
      <img
        class="img"
        :src="require('@/assets/排行榜/美食排行榜.png')"
      />
    </div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 4);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 10) {
          this.finished = true;
        }
      }, 1000);
    },
  },
  }
</script>
<style scoped>
.list-top{
  background-color: #f4f7c5;
}
.image{
  background-color: #f4f7c5;
  display: flex;
  justify-content: center;
  align-items: center
}
</style>
