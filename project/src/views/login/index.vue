<!-- 登录页面 -->
<template>
  <div class="login-container">
    <div class="login">
      <img :src="imgSrc" class="login-head" />
      <v-form class="login-fo" ref="form" v-model="valid" lazy-validation>
        <v-text-field
          rounded
          v-model="user.username"
          :counter="19"
          label="账号"
          solo
          required
        ></v-text-field>
        <v-text-field
          rounded
          v-model="user.password"
          :type="'password'"
          label="密码"
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
                color="#ea907a"
                @click="
                  onLogin();
                  loader = 'loading';
                "
                class="mr-4 login-btn"
                x-large
              >
                登录
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="justify-center" style="font-size:1.6rem">{{ message }}</v-card-title>
              <v-card-actions>
                <v-container justify="center">
                  <v-btn
                    rounded
                    color="#ea907a"
                    :style="{ left: '50%', transform: 'translateX(-50%)' }"
                    @click="
                      dialog = false;
                      clear();
                      changePage();
                    "
                  >
                    <span style="color:#FFFFFF">关闭</span>
                  </v-btn>
                </v-container>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-form>
      <router-link :to="{ name: 'register' }">
        <span class="forgotten">注册 / </span>
      </router-link>
      <router-link :to="{ name: 'layout' }">
        <span class="forgotten">忘记密码</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import imgUrl from "@/assets/logo.png";
import axios from "axios";
import md5 from "js-md5";
import qs from "qs";
//import func from '../../../vue-temp/vue-editor-bridge';

export default {
  name: "Login",
  components: {},
  props: {},
  data() {
    return {
      status: false,
      closeByAdmin: false,
      closeByUser: false,
      message: "登陆成功 ᕕ(ᐛ)ᕗ",
      dialog: false,
      loader: null,
      loading: false,
      valid: true,
      user: {
        role: "admin",
        username: "",
        password: "",
        salt: Math.floor(Date.now() / 1000),
        signkey: "",
      },
      imgSrc: imgUrl,
      nameRules: [
        (v) => !!v || "请输入账号:",
        (v) => (v && v.match(/^\d{1,19}$/)) || "只能输入不超过19位数字",
      ],
      passwordRules: [(v) => !!v || "请输入密码:"],
      //RULES验证存在问题，暂时移除
    };
  },
  methods: {
    changePage() {
      if (this.user.role === "user" && this.status === true) {
        this.closeByUser = true;
      } else if (this.user.role === "admin" && this.status === true) {
        this.closeByAdmin = true;
      }
    },
    clear() {
      this.user.password = "";
    },
    signkey(obj) {
      let t = "";
      if (obj["signkey"]) obj["signkey"] = "";
      for (let key in obj) {
        t += obj[key];
      }
      return md5(t + "aabb@#￥");
    },
    onLogin() {
      let user = this.user;
      user.password = md5(user.password);
      user.salt = Math.floor(Date.now() / 1000);
      user.signkey = this.signkey(user);
      if (this.$route.query.role === "admin") user.role = "admin"; //隐式角色切换
      axios.defaults.baseURL = "https://hackweek.multmax.top";
      this.$axios({
        method: "post",
        url: "/api/login",
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
          //登陆成功
          this.message = "登录成功 ᕕ(ᐛ)ᕗ";
          this.dialog = true;
          if (response.data.status === "success") {
            this.status = true;
            console.log("success");
          } else {
            this.dialog = true;
            this.message = "登陆失败 〒_〒";
            console.log(response.data.msg);
          }
        })
        .catch((error) => {
          this.dialog = true;
          this.message = "登陆失败 〒_〒";
        });
    },
  },
  watch: {
    closeByUser: function () {
      this.$router.push("/test");
    },
    closeByAdmin: function () {
      this.$router.push("/admin");
    },
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      setTimeout(() => (this[l] = false), 3000);
      this.loader = null;
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  .login {
    text-align: center;
  }
  // 图片
  .login-head {
    position: absolute;
    margin-top: 1%;
    display: block;
    margin: 0 auto;
    width: 12rem;
    position: absolute;
    left: 50%;
    margin-left: -6rem;
  }
  .login-fo {
    margin-top: 8rem;
    padding: 5rem;
    min-width: 25rem;
    border-radius: 20%;
  }
  .login-btn {
    color: white;
  }
  .forgotten {
    text-align: center;
    color: #ea907a;
  }
}
</style>
