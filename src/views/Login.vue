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
import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

import {
  IonButton,
  IonLabel,
  IonInput,
  IonItem,
  IonList,
  IonCard,
  IonCardTitle,
  IonCardContent,
} from "@ionic/vue";
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
    async setObject() {
      await Storage.set({
        key: "user",
        value: JSON.stringify({
          id: 1,
          name: "Max",
        }),
      });
    },

    // JSON "get" example
    async getObject() {
      const ret = await Storage.get({ key: "user" });
      const user = JSON.parse(ret.value);
      console.log(user);
    },

    async setItem(key, value) {
      await Storage.set({
        key: key,
        value: value,
      });
    },

    async getItem() {
      const { value } = await Storage.get({ key: "name" });
      console.log("Got item: ", value);
    },

    async removeItem() {
      await Storage.remove({ key: "name" });
    },

    async keys() {
      const { keys } = await Storage.keys();
      console.log("Got keys: ", keys);
    },

    async clear() {
      await Storage.clear();
    },

    login() {
      Axios.post("http://182.92.211.131/", {
        user: this.username,
        password: this.password,
        timestamp: (new Date()).valueOf(),
      }).then((data) => {
        //登录失败,先不讨论
        console.log(data);
        if (data.status != 200) {
          //iViewUi的友好提示
          // alert(data.data.message);
          console.log("login failed");
          //登录成功
        } else {
          //设置Vuex登录标志为true，默认userLogin为false
          this.$store.dispatch("userLogin", true);
          //登录成功后跳转到指定页面
          let redirectpath = router.currentRoute.value.query.redirect;
          router.replace(redirectpath ? redirectpath : "/");
        }
      });

      // this.setItem("isLogin", "true");
      // localStorage.setItem("Flag", "isLogin");
      // this.$store.dispatch("userLogin", true);
      // let redirectpath = router.currentRoute.value.query.redirect;
      // router.replace({ path: redirectpath ? redirectpath : "/" });
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