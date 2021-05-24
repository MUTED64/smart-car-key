<template>
  <base-layout>
    <!-- 未登录时登录 -->
    <ion-content fullscreen="true" slot="fixed">
      <ion-card class="main" color="primary">
        <form class="ion-padding" @submit.prevent="login()">
          <ion-list>
            <ion-item lines="none" color="primary">
              <ion-label position="floating" color="light"><h2>Phone Number</h2></ion-label>
              <ion-input
                v-model="username"
                name="username"
                type="text"
                spellcheck="false"
                autocapitalize="off"
                required
              ></ion-input>
            </ion-item>
            <ion-item lines="none" color="primary">
              <ion-label position="floating" color="light"><h2>Password</h2></ion-label>
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
          <ion-button type="submit" expand="block" color="tertiary">Log in</ion-button>
        </form>
        <ion-card-content>
          Have no account?
          <a @click="toRegister">Sign up</a>
        </ion-card-content>
      </ion-card>
    </ion-content>
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
  IonContent,
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
    IonContent,
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
        // "https://aip.baidubce.com/rest/2.0/face/v3/detect?access_token=24.adf4e216cc967c9c84f544aed604240b.2592000.1619166786.282335-23774832";
        "https://aip.baidubce.com/rest/2.0/face/v1/landmark?access_token=24.adf4e216cc967c9c84f544aed604240b.2592000.1619166786.282335-23774832";
      const faceData = (
        await this.postRequestCORS(
          BAIDU_API,
          {
            image: base64photo,
            image_type: "BASE64",
            face_field: "landmark72",
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
            "bd9967748c44213bd6bd18e8f354b6341c8bb7cc32a1d7748895fa38727b04ae",
          timestamp: parseInt(new Date().getTime()/1000),
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
  /*position: relative;
  top: 50%;
  transform: translateY(-50%); */
  /* width: 90%; */
  /* border: 3px solid var(--ion-color-primary); */
  width: 100%;
  box-shadow: none;
  border-top-left-radius: 1.5em;
  border-top-right-radius: 1.5em;
  position: fixed;
  bottom: 0;
  z-index: 1200;
}
ion-button {
  margin-top: 7%;
}
ion-card-title {
  text-align: center;
  margin-top: 10%;
}
ion-content {
  width: 100%;
  height: 100%;
  --background: url("../../assets/login.png") no-repeat 0 0 / 100% fixed, #fff;
  background-size: 100% auto;
  position: relative;
}
form {
  padding-top: 10px;
}
ion-card {
  min-height: 40vh+1.5em;
}
ion-list{
  margin: 0;
  padding: 0;
}
a{
  color:lightblue;
}
ion-item {
    min-height: 80px;
    background-color: var(--ion-color-primary);
}
</style>