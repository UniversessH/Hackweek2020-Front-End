<!-- 我的页面 -->
<template>
  <div>
    <van-cell-group
      border="true"
    >
      <van-cell
        title="单元格"
        value="内容"
        center
      >
        <van-image
          slot="icon"
          width="3rem"
          height="3rem"
          fit="cover"
          round
          :src="require('@/assets/头像/4.jpg')"
        />
        <div slot="title">如爱消</div>
        <div slot="label">美食大玩家</div>
        <van-button size="43rem">
          <van-icon name="setting-o" />
        </van-button>
      </van-cell>
      <van-grid>
        <van-grid-item>
          <div slot="text">
            <div class="num">543</div>
            <div class="text">测评</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="num">57</div>
            <div class="text">赞同</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="num">24</div>
            <div class="text">收藏</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="num">24</div>
            <div class="text">粉丝</div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <van-tabs v-model="active" animated>
      <van-tab title="勋章墙" name="test"></van-tab>
      <van-tab title="创作中心" name="square"></van-tab>
      <van-tab title="照片墙" name="follow"></van-tab>
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
      active: 0
    }
  },
  methods: {

  }
}
</script>
<style scoped>
.num {
  font-size: 15px;
  text-align: center;
}
.text {
  font-size: 16px;
  text-align: center;
}
</style>