<template>
  <base-layout>
    <br />
    <br />
    <form @submit="authorization()">
      <ion-list>
        <ion-item>
          <ion-label position="floating" color="primary">密码</ion-label>
          <ion-input
            v-model="pwaut"
            name="password"
            type="text"
            spellcheck="false"
            autocapitalize="off"
            required
          ></ion-input>
        </ion-item>
      </ion-list>
      <ion-button @click="authorization()">submit</ion-button>
    </form>
  </base-layout>
</template>

<script>
import BaseLayout from "../components/BaseLayout.vue";
const { SM3 } = require("gm-crypto");

export default {
  components: { BaseLayout },
  data() {
    return {
      pwaut: "",
      Biaut: "",
      Bireg: "",
    };
  },
  methods: {
    authorization() {
      //   const Bireg = Rec(Biaut,S);
      const Bireg = "123456";
      const PWaut = SM3.digest(this.pwaut + Bireg, "hex", "hex");
      const PWi = this.$store.getters.userInfo.PWi;
      console.log(this.$store.getters.userInfo);
    //   if (SM3.digest(PWaut) === SM3.digest(PWi)) {
        const ri = PWaut ^ this.$store.getters.userInfo.M2;
        const RNUi = this.getRandomNumber();
        const R3 = RNUi ^ ri;
        const IDi = this.$store.getters.userInfo.IDi;
        const IDSNj = this.$store.getters.userInfo.IDSNj;
        const M4 = SM3.digest(IDi+IDSNj+ri+RNUi);
        const M5 = SM3.digest(IDi+RNUi)^IDSNj;
    //   }
    console.log(PWi);
    console.log(R3);
    console.log(M4);
    console.log(M5);
    },
    getRandomNumber() {
      let result = "";
      for (var i = 0; i < 16; i++) {
        result += Math.floor(Math.random() * 16).toString(16); //获取0-15并通过toString转16进制
      }
      //默认字母小写，手动转大写
      return result.toUpperCase();
    },
  },
};
</script>

<style>
</style>