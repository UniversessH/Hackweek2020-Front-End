<template>
  <!--<img :src="imgSrc" class="login-head" />-->
  <v-container>
    <v-container class="px-8">
      <img :src="imgSrc" class="login-head">
    </v-container>
    <v-form class="login-fo" ref="form" v-model="valid" lazy-validation>
  
      <v-text-field
        rounded
        v-model="username"
        :counter="19"
        label="输入账号(纯数字)"
        solo
        required
      ></v-text-field>
      <v-text-field
        rounded
        v-model="user.name"
        :counter="8"
        label="输入昵称(最多八字符)"
        solo
        required
      ></v-text-field>
      <v-text-field
        rounded
        v-model="user.password"
        :type="'password'"
        label="输入密码"
        solo
        required
      ></v-text-field>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="290">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              :loading="loading"
              :disabled="loading"
              rounded
              color="rgb(244,247,197)"
              @click="
                onRegister();
                loader = 'loading';
              "
              class="mr-4 login-btn"
              x-large
            >
              <span style="color: rgb(0, 0, 0)" class="text">注册</span>
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="justify-center" style="font-size: 0.3rem">{{
              message
            }}</v-card-title>
            <v-card-actions>
              <v-container justify="center">
                <v-btn
                  rounded
                  color="rgb(244,247,197)"
                  :style="{ left: '50%', transform: 'translateX(-50%)' }"
                  @click="
                    dialog = false;
                    clear();
                  "
                >
                  <span style="color=rgb(0,0,0)" class="text">关闭</span>
                </v-btn>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-form>
    <v-container class="my-6" style="text-align:center">
      <router-link :to="{ name: 'login' }">
        <span class="goLogin">返回登录</span>
      </router-link>
    </v-container>
  </v-container>
</template>

<script>
import imgUrl from "@/assets/logo.png";
import axios from "axios";
import md5 from "js-md5";
import qs from "qs";

export default {
  name: "Register",
  components: {},
  props: {},
  data() {
    return {
      status: false,
      close: false,
      message: "注册成功 ᕕ(ᐛ)ᕗ",
      dialog: false,
      loader: null,
      loading: false,
      valid: true,
      username: "",
      user: {
        password: "",
        name: "",
        salt: Math.floor(Date.now() / 1000),
        signkey: "",
      },
      imgSrc: imgUrl,
      nameRules: [
        (v) => !!v || "请输入账号:",
        (v) => (v && v.match(/^\d{1,19}$/)) || "只能输入不超过19位数字",
      ],
      passwordRules: [(v) => !!v || "请输入密码:"],
    };
  },
  methods: {
    clear() {
      this.username = "";
      this.user = "";
    },
    signkey(obj) {
      let t = "";
      for (let key in obj) {
        t += obj[key];
      }
      return md5(t + "aabb@#￥");
    },
    onRegister() {
      let user = this.user;
      user.password = md5(user.password);
      user.signkey = this.signkey(user);
      const url = "/api/admin/" + this.username;
      axios.defaults.baseURL = "https://hackweek.multmax.top";
      this.$axios({
        method: "post",
        url: url,
        data: user,
        transformRequest: [
          function (data) {
            return qs.stringify(data);
          },
        ],
        header: {
          "Content-type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => {
          this.dialog = true;
          console.log(response);
        })
        .catch((error) => {
          this.message = "注册失败 〒_〒";
          this.dialog = true;
          console.log(error); //注册失败
        });
    },
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      setTimeout(() => (this[l] = false), 1500);
      this.loader = null;
    },
  },
};
</script>

<style lang="less" scoped>
  .login-head {
    margin-top: 1%;
    display: block;
    margin: 0 auto;
    width: 50%;
  }
  /*.login-fo {
    margin-top: 8rem;
    padding: 5rem;
    min-width: 25rem;
    border-radius: 20%;
  }
  .login-btn {
    color: white;
  }*/
  .text{
    font-size: 0.3rem;
  }
  .goLogin {
    text-align: center;
    color: rgb(161, 194, 177);
  }
</style>
