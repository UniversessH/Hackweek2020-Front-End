<!-- 主页底部栏 -->
<template>
  <van-tabbar v-model="active" class="active_tab">
    <van-tabbar-item
      v-for="(item,index) in tabbars"
      :key="index"
      @click="tab(index,item.name)"
    >
      <span :class="currIndex == index ? active:''">{{item.title}}</span>
      <template slot="icon" slot-scope="props">
        <img :src="props.active ? item.active : item.normal">
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "AppDown",
  data() {
    return {
      currIndex: 0,
      active: 0,
      tabbars: [
        {
          name: "test",
          title: "首页",
          normal: require("@/assets/底部小图标/主页无.png"),
          active: require("@/assets/底部小图标/主页.png")
        },
        {
          name: "eat",
          title: "吃啥",
          normal: require("@/assets/底部小图标/吃无.svg"),
          active: require("@/assets/底部小图标/吃.svg")
        },
        {
          name: "publish",
          title: "发布",
          normal: require("@/assets/底部小图标/发布.jpg"),
          active: require("@/assets/底部小图标/发布.jpg")
        },
        {
          name: "list",
          title: "排行",
          normal: require("@/assets/底部小图标/排行无.png"),
          active: require("@/assets/底部小图标/排行.png")
        },
        {
          name: "my",
          title: "我的",
          normal: require("@/assets/底部小图标/我的无.png"),
          active: require("@/assets/底部小图标/我的.png")
        }
      ]
    };
  },
  methods: {
    tab(index, val) {
      this.currIndex = index;
      this.$router.push(val);
    }
  }
};
</script>

<style lang="scss" scoped>
.active_tab img {
  width: 26px;
  height: 26px;
}

.van-tabbar-item--active {
  color: #e10f02;
}
</style>

<!-- 主页底部栏 -->
<!-- <template>
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
    <van-tabbar-item icon="setting-o" to="/list">排行</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/my">我的</van-tabbar-item>
  </van-tabbar>
</template>-->

