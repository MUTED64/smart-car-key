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
      <ion-button @click="return_car()">return</ion-button>
    </form>
  </base-layout>
</template>

<script>
import BaseLayout from "../components/BaseLayout.vue";
import { IonLabel, IonItem, IonInput, IonButton, IonList } from "@ionic/vue";
const { SM3, SM4 } = require("gm-crypto");
import Axios from "axios";
import qs from "qs";

export default {
  components: { BaseLayout, IonLabel, IonItem, IonInput, IonButton, IonList },
  data() {
    return {
      pwaut: "",
      Biaut: "",
      Bireg: "",
    };
  },
  methods: {
    async authorization() {
      //   const Bireg = Rec(Biaut,S);
      const Bireg = "123456";
      const PWaut = SM3.digest(this.pwaut + Bireg.toString(16), "utf8", "hex");
      const PWi = this.$store.getters.userInfo.PWi;
      const M1 = this.$store.getters.userInfo.M1;
      const M2 = this.$store.getters.userInfo.M2;
      
      console.log(PWaut);
      console.log(PWi);
      if (SM3.digest(PWaut) === PWi) {
        const ri = this.xor(PWaut, M2);

        const RNUi = this.getRandomHex();
        const M3 = this.xor(RNUi, ri);
        const IDi = this.$store.getters.userInfo.userId;
        const IDSNj = this.$store.getters.userInfo.IDSNj;
        //IDi十进制还是十六进制
        const M4 = SM3.digest(
          IDi + this.dec2hex(IDSNj) + ri + RNUi,
          "utf8",
          "hex"
        );
        console.log(`SM3:IDi+RNUi:${SM3.digest(IDi + RNUi, "utf8", "hex")}`);
        const M5 = this.xor(
          SM3.digest(IDi + RNUi, "utf8", "hex"),
          this.dec2hex(IDSNj)
        );

        const res = await Axios.post(
          "https://syml-gensokyo.cn:8888/index",
          qs.stringify({
            action: "RENT_CAR_REQUEST",
            m1: M1,
            m2: M2,
            m3: M3,
            m4: M4,
            m5: M5,
            t_reg: 1617001449,
          }),
          {
            "Content-Type": "application/x-www-form-urlencoded",
            withCredentials: true,
          }
        );

        const EkeyUS = res.EkeyUS;
        const M6 = res.M6;
        const M7 = res.M7;

        const RNs = this.xor(ri, M7);
        const KeyUS = SM3.digest(RNUi + RNs, "hex", "hex");
        const KeyUSN = SM4.decrypt(EkeyUS, KeyUS, {
          inputEncoding: "hex",
          outputEncoding: "hex",
        });
        this.$store.dispatch("userinfo", "RNs", RNs);
        this.$store.dispatch("userinfo", "KeyUS", KeyUS);
        this.$store.dispatch("userinfo", "KeyUSN", KeyUSN);
        console.log(`Bireg: ${Bireg}`);
        console.log(`PWaut: ${PWaut}`);
        console.log(`M2: ${M2}`);
        console.log(`ri: ${ri}`);
        console.log(`RNUi: ${RNUi}`);
        console.log(`PWi: ${PWi}`);
        console.log(`M3: ${M3}`);
        console.log(`M4: ${M4}`);
        console.log(`M5: ${M5}`);
        console.log(`EkeyUS: ${EkeyUS}`);
        console.log(`M6: ${M6}`);
        console.log(`M7: ${M7}`);
        console.log(this.pwaut);
        console.log(KeyUSN);
      }

      // console.log(SM3.digest("114514", "utf8", "hex"));
    },
    getRandomHex() {
      let result = "";
      for (var i = 0; i < 64; i++) {
        result += Math.floor(Math.random() * 16).toString(16); //获取0-15并通过toString转16进制
      }
      //默认字母小写，手动转大写
      return result;
    },
    hexToBytes(hex) {
      hex = hex.toString();
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },
    bytesToHex(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        var current = bytes[i] < 0 ? bytes[i] + 256 : bytes[i];
        hex.push((current >>> 4).toString(16));
        hex.push((current & 0xf).toString(16));
      }
      return hex.join("");
    },
    xor(a, b) {
      while (a.length > b.length) {
        b = "0" + b;
      }
      while (a.length < b.length) {
        a = "0" + a;
      }
      var x = this.hexToBytes(a);
      var y = this.hexToBytes(b);
      var z = new Array();
      for (var i = 0; i < x.length; i++) {
        z.push(x[i] ^ y[i]);
      }
      return this.bytesToHex(z);
    },
    dec2hex(str) {
      var dec = str.toString().split(""),
        sum = [],
        hex = [],
        i,
        s;
      while (dec.length) {
        s = 1 * dec.shift();
        for (i = 0; s || i < sum.length; i++) {
          s += (sum[i] || 0) * 10;
          sum[i] = s % 16;
          s = (s - sum[i]) / 16;
        }
      }
      while (sum.length) {
        hex.push(sum.pop().toString(16));
      }
      return hex.join("");
    },
    async return_car() {
      const res = await Axios.post(
        "https://syml-gensokyo.cn:8888/index",
        qs.stringify({
          action: "RETURN_CAR",
        }),
        {
          "Content-Type": "application/x-www-form-urlencoded",
          withCredentials: true,
        }
      );

      console.log(res);
    },
  },
};
</script>

<style></style>
