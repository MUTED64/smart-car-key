<template>
  <base-layout page-title="注册">
    <ion-card class="main">
      <ion-card-title color="medium">填写个人信息完成注册</ion-card-title>
      <form class="ion-padding" @submit.prevent="register()">
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
        <ion-button type="submit" expand="block">注册</ion-button>
      </form>
    </ion-card>
  </base-layout>
</template>

<script>
import {
  IonButton,
  IonLabel,
  IonInput,
  IonItem,
  IonList,
  IonCard,
  IonCardTitle,
} from "@ionic/vue";
import router from "../router";
import Axios from "axios";

export default {
  components: {
    IonButton,
    IonLabel,
    IonInput,
    IonItem,
    IonList,
    IonCard,
    IonCardTitle,
  },
  data() {
    return {
      username: null,
      password: null,
      showVerifyCode: false
    };
  },
  methods: {
    async register() {
      console.log("register");
      await Axios.post("folder/AboutMe", {
        user: this.username,
        password: this.password,
        timestamp: new Date().valueOf(),
      }).then((data) => {
        //登录失败,先不讨论
        if (data.data.status != 200) {
          console.log("login failed");
          //登录成功
        } else {
          //跳转到验证码
          router.replace("/folder/verification");
        }
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
  margin-top: 10%;
  margin-bottom: 7%;
}
ion-card-title {
  text-align: center;
  margin-top: 10%;
}
</style>