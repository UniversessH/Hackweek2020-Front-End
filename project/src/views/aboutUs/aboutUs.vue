<!--关于我们-->
<template>
  <v-layout row wrap align-center justify-center fill-height>
    <v-card class="mx-auto" width="73%" height="70%">
      <v-img class="text" width="100%" height="40%" src="@/assets/Bar.png" />
      <div class="textField">
        <p class="verText">食遇1.0.0</p>
        <div class="textField">
          <li style="color: #ea907a">食遇项目团队</li>
          <li>产品组: 甘渊</li>
          <li>运营组: 周晓珩</li>
          <li>行政组: 毛羽箫</li>
          <li>设计组: 高格</li>
          <li>设计组: 李怡杰</li>
          <li>研发组-后端: 谭欣</li>
          <li>研发组-前端: 黄锦川</li>
          <li>研发组-前端: 江思颖</li>
        </div>
        <span style="color: rgb(89, 47, 231)">感谢与你们相遇</span>
      </div>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.textField {
  margin-top: 2%;
  margin-bottom: 0%;
  margin-left: 5%;
  margin-right: 5%;
  padding-top: 0;
  padding-bottom: 5%;
}
.verText {
  color: rgb(103, 237, 163);
  margin: 0;
  font-size: 0.15rem;
}
.last {
  color: rgb(89, 47, 231);
  font-size: 0.2rem;
}
</style>