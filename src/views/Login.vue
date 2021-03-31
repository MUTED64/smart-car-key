<template>
  <base-layout page-title="用户登录">
    <!-- 未登录时登录 -->
    <ion-card class="main">
      <ion-card-title color="medium">
        您还没有登录
        <br />请登录以使用更多内容
      </ion-card-title>
      <form class="ion-padding" @submit.prevent="login()">
        <ion-list>
          <ion-item>
            <ion-label position="floating" color="primary">电话号码</ion-label>
            <ion-input
              v-model="username"
              name="username"
              type="text"
              spellcheck="false"
              autocapitalize="off"
              required
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating" color="primary">密码</ion-label>
            <ion-input
              v-model="password"
              name="password"
              type="text"
              spellcheck="false"
              autocapitalize="off"
              required
            ></ion-input>
          </ion-item>
        </ion-list>
        <ion-button type="submit" expand="block">登录</ion-button>
      </form>
      <ion-card-content>
        没有帐号？
        <a @click="toRegister">去注册</a>
      </ion-card-content>
    </ion-card>
  </base-layout>
</template>

<script>
import router from "../router";
import "@capacitor-community/http";
import {
  Plugins,
  CameraResultType,
  CameraSource,
  CameraDirection,
} from "@capacitor/core";

const { Camera } = Plugins;

import {
  IonButton,
  IonLabel,
  IonInput,
  IonItem,
  IonList,
  IonCard,
  IonCardTitle,
  IonCardContent,
  isPlatform,
} from "@ionic/vue";
import Axios from "axios";
import qs from "qs";

export default {
  components: {
    IonButton,
    IonLabel,
    IonInput,
    IonItem,
    IonList,
    IonCard,
    IonCardTitle,
    IonCardContent,
  },
  data() {
    return {
      username: null,
      password: null,
    };
  },
  computed: {
    flag() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    async postRequestCORS(url, data, headers) {
      if (isPlatform("capacitor")) {
        const { Http } = Plugins;

        const onPost = async () => {
          const ret = await Http.request({
            method: "POST",
            url: url,
            headers: headers,
            data: data,
          });
          return ret;
        };

        return onPost();
      } else if (url.indexOf("baidu") != -1) {
        return await Axios.post(
          // `/api/FaceApi/rest/2.0/face/v3/detect?access_token=24.adf4e216cc967c9c84f544aed604240b.2592000.1619166786.282335-23774832`,
          `https://api-cors-proxy-devdactic.herokuapp.com/${url}`,
          data,
          headers
        );
        // ).then((data) => {
        //   console.log(data);
        //   return data;
        // });
      } else {
        return await Axios.post(url, data, headers);
      }
    },

    async takePhoto() {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera,
        quality: 50,
        direction: CameraDirection.Front,
      });
      return await photo.base64String;
    },

    async login() {
      // this.getFaceData();
      this.loginToBackEnd();
    },

    async getFaceData() {
      let base64photo = await this.takePhoto();

      const BAIDU_API =
        "https://aip.baidubce.com/rest/2.0/face/v3/detect?access_token=24.adf4e216cc967c9c84f544aed604240b.2592000.1619166786.282335-23774832";
      const faceData = (
        await this.postRequestCORS(
          BAIDU_API,
          {
            image: base64photo,
            image_type: "BASE64",
          },
          {
            "Content-Type": "application/json",
          }
        )
      ).data;
      console.log(faceData);
    },

    loginToBackEnd() {
      Axios.post(
        "https://syml-gensokyo.cn:8888/login",
        qs.stringify({
          id: 11451419198,
          passwd:
            "384fde3636e6e01e0194d2976d8f26410af3e846e573379cb1a09e2f0752d8cc",
          timestamp: 1617001449,
          rand_num: 114514,
        }),
        {
          "Content-Type": "application/x-www-form-urlencoded",
          withCredentials: true,
        }
      ).then((data) => {
        console.log(data);
        this.$store.dispatch("userLogin", true);
        let redirectpath = router.currentRoute.value.query.redirect;
        router.replace(redirectpath ? redirectpath : "/");
      });
    },

    toRegister() {
      router.replace({
        path: "/folder/register",
      });
    },
  },
};
</script>

<style scoped>
ion-card.main {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 90%;
  border: 3px solid #3880ff;
  box-shadow: none;
  border-radius: 12px;
}
ion-button {
  margin-top: 7%;
  margin-bottom: 7%;
}
ion-card-title {
  text-align: center;
  margin-top: 10%;
}
</style>