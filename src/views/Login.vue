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
    </ion-card>
  </base-layout>
</template>

<script>
import router from "../router";
import {
  IonButton,
  IonLabel,
  IonInput,
  IonItem,
  IonList,
  IonCard,
  IonCardTitle
} from "@ionic/vue";
// import router from '../router';
// import Axios from "axios";

export default {
  components: {
    IonButton,
    IonLabel,
    IonInput,
    IonItem,
    IonList,
    IonCard,
    IonCardTitle
  },
  data() {
    return {};
  },
  computed: {
    flag() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    login() {
      // Axios.post("/xxx/login", { user: "", password: "" }).then((data) => {
      //   //登录失败,先不讨论
      //   if (data.data.status != 200) {
      //     //iViewUi的友好提示
      //     alert(data.data.message);
      //     console.log("as");
      //     //登录成功
      //   } else {
      //     //设置Vuex登录标志为true，默认userLogin为false
      //     this.$store.dispatch("userLogin", true);
      //     //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
      //     //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
      //     localStorage.setItem("Flag", "isLogin");
      //     //iViewUi的友好提示
      //     this.$Message.success(data.data.message);
      //     //登录成功后跳转到指定页面
      //     this.$router.replace(router.currentRoute.value.query.redirect);
      //   }
      // });
      this.$store.dispatch("userLogin", true);
      localStorage.setItem("Flag", "isLogin");
      let redirectpath = router.currentRoute.value.query.redirect;
      router.replace(redirectpath ? redirectpath : "/");
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