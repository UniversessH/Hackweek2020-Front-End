<template>
  <v-app id="inspire">
    <v-app-bar app color="rgb(249,198,136)">
      <v-toolbar-title><div class="word">食遇管理后台</div></v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container id="input-usage" fluid>
        <v-row>
          <v-col>
            <span style="color: rgb(94, 173, 85)">在此输入商家信息</span>
          </v-col>
          <v-col cols="12">
            <v-text-field color="#1E88E5" label="商家名称" hide-details="auto" v-model="salerInfo.name">
            </v-text-field
            ><br />
            <v-text-field color="#1E88E5" label="地点" hide-details="auto" v-model="salerInfo.address">
            </v-text-field
            ><br />
            <v-form>
              <v-file-input
                ref="pic"
                v-model="files"
                prepend-icon="mdi-camera"
                show-size
                counter
                accept=".bmp,.jpg,.jpeg,.png,.webp"
                color="#1E88E5"
                multiple
                label="在此上传商家的照片(请确保单张照片大小小于4MB)"
              ></v-file-input>
            </v-form>
          </v-col>
          <v-col class="d-flex justify-center">
            <v-btn
              color="#03A9F4"
              class="ma-2 white--text"
              @click='upload'
            >
              <span class="word">上传</span>
              <v-icon right dark> mdi-cloud-upload </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import md5 from "js-md5";
import qs from "qs";

export default {
  data: () => {
    return {
      salerInfo:{
        name:"",
        pic:"",
        address:"",
        salt: Math.floor(Date.now() / 1000),
        signkey:""
      },
      files: null
    };
  },
  methods:{
    signkey(obj) {
      let t = "";
      for (let key in obj) {
        t += obj[key];
      }
      return md5(t + "aabb@#￥");
    },
    uploadPic (){
      axios.defaults.baseURL = "https://hackweek.multmax.top";
      if(this.files){
        let formData = new FormData();
        for(let file in this.files){
          formData.append("files", file, file.name)
        }
        //console.log(formData.getAll("cave"))
        //console.log(this.files)
        axios.post('/api/upload/1', formData
        ).then( response => {
          return response.data.id
        }).catch(err => {
          console.log(err);
        })
      }else{
        console.log("没有提交文件")
      }
    },
    upload (){
      let salerInfo=this.salerInfo
      salerInfo.pic=this.uploadPic()
      salerInfo.signkey=this.signkey(salerInfo)
      axios.defaults.baseURL = "https://hackweek.multmax.top";
      this.$axios({
        method: "post",
        url: "/api/biz/",
        data: salerInfo,
        transformRequest: [
          function (data) {
            return qs.stringify(data);
          },
        ],
        header: {
          "Content-type": "application/x-www-form-urlencoded",
        },
      }).then((response) => {
        if (response.data.status == "success"){
          //提交成功
          console.log("yes!")
        }
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
}

</script>

<style scoped>
#input-usage .v-input__prepend-outer,
#input-usage .v-input__append-outer,
#input-usage .v-input__slot,
#input-usage .v-messages {
  border: 1px dashed rgba(0, 0, 0, 0.4);
}
.word {
  margin: 0;
  font-size: 23px;
  text-align: center;
}
</style>