<template>
  <base-layout page-title="输入验证码">
    <ion-card class="main">
      <ion-card-title color="medium">
        已向您的手机发送了验证码
        <br />请填入验证码以完成注册
      </ion-card-title>
      <form class="ion-padding" inset padding @submit.prevent="verification()">
        <ion-list>
          <ion-item>
            <!-- <ion-label position="floating" color="primary">短信验证码</ion-label> -->
            <ion-input
              v-model="verificationCode"
              name="verificationCode"
              type="number"
              spellcheck="false"
              autocapitalize="off"
              required
            ></ion-input>
            <ion-button size="default" type="button" @click="reSend" fill="clear" item-right expand="full">重新发送</ion-button>
          </ion-item>
        </ion-list>
        <ion-button type="submit" expand="block">提交</ion-button>
      </form>
    </ion-card>
  </base-layout>
</template>

<script>
import {
  IonButton,
//   IonLabel,
  IonInput,
  IonItem,
  IonList,
  IonCard,
  IonCardTitle,
} from "@ionic/vue";
// import router from "../router";
import Axios from "axios";

export default {
  components: {
    IonButton,
    // IonLabel,
    IonInput,
    IonItem,
    IonList,
    IonCard,
    IonCardTitle,
  },
  data() {
    return {
      verificationCode: null,
    };
  },
  methods: {
    async verification() {
      console.log("register");
      await Axios.post("folder/AboutMe", {
        verificationCode: this.verificationCode,
      }).then((data) => {
        //登录失败,先不讨论
        if (data.data.status != 200) {
          console.log("login failed");
          //登录成功
        } else {
          //跳转到验证码
          //   router.replace(redirectpath ? redirectpath : "/");
          console.log("success");
        }
      });
    },
    reSend(){
        console.log("reSend");
    }
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