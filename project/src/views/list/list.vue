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
    <!-- <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    > -->
    <van-list>
      <van-cell v-for="(item,index) in list" :key="item" class="all">
        <span class="num">{{index+4}}</span>
        <span class="name">{{item.name}}</span>
        <van-icon :name="item.icon" class="icon"/>
        <span class="score">{{item.score}}分</span>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      list: [
        {
          name: "三食堂澳门烤饭",
          score: "94",
          icon:"good-job-o"
        },
        {
          name: "九食堂面行人",
          score: "92",
          icon:"good-job-o"
        },
        {
          name: "九食堂膳当家",
          score: "89",
          icon:"good-job-o"
        },
        {
          name: "一食堂华麦基",
          score: "88",
          icon:"good-job-o"
        },
        {
          name: "七食堂黄焖鸡米饭",
          score: "85",
          icon:"good-job-o"
        },
        {
          name: "一食堂极道咖喱饭",
          score: "84",
          icon:"good-job-o"
        },
        {
          name: "三食堂鸡公煲",
          score: "81",
          icon:"good-job-o"
        },
        {
          name: "六食堂品味轩养生粥",
          score: "79",
          icon:"good-job-o"
        },
        {
          name: "商业街熊本豚屋拉面",
          score: "78",
          icon:"good-job-o"
        }
      ],
      loading: false,
      finished: false,
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    // onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
        // for (let i = 0; i < 1; i++) {
        //   this.list.push(this.list.length + 4);
        // }

        // 加载状态结束
        // this.loading = false;

        // 数据全部加载完成
      //   if (this.list.length >= 10) {
      //     this.finished = true;
      //   }
      // }, 1000);
    },
  // },
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
.all{
  display: flex;
}
.num{
  background-color:  #f4f7c5;
}
.score{
  float: right;
}
.icon{
  float: right;
}
</style>
