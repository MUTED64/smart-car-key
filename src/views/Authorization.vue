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
import Axios from "axios";
import qs from "qs";

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
    async authorization() {
      //   const Bireg = Rec(Biaut,S);
      const Bireg =
        "1234567812345678123456781234567812345678123456781234567812345678";
      const PWaut = SM3.digest(this.pwaut + Bireg.toString(16), "hex", "hex");
      const PWi = this.$store.getters.userInfo.PWi;
      const M2 = this.$store.getters.userInfo.M2;
      //   if (SM3.digest(PWaut) === SM3.digest(PWi)) {
      const ri = this.xor(PWaut, M2);

      const RNUi = this.getRandomHex();
      const M3 = this.xor(RNUi ,ri);
      const IDi = this.$store.getters.userInfo.userId;
      const IDSNj = this.$store.getters.userInfo.IDSNj;
      //IDi十进制还是十六进制
      const M4 = SM3.digest(IDi + IDSNj + ri + RNUi, "hex", "hex");
      const M5 = this.xor(
        SM3.digest(IDi + RNUi, "hex", "hex"),
        IDSNj
      );
      
      const res = await Axios.post(
        "https://syml-gensokyo.cn:8888/index",
        qs.stringify({
          action: "RENT_CAR_REQUEST",
          M3: M3,
          M4: M4,
          M5: M5,
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

      // const RNs = this.xor(ri, M7);
      // const KeyUS = SM3.digest(RNUi + RNs,"hex","hex");
      // const KeyUSN = DMKUS(EkeyUS);
      //   }
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
      var x = this.hexToBytes(a);
      var y = this.hexToBytes(b);
      var z = new Array();
      for (var i = 0; i < x.length; i++) {
        z.push(x[i] ^ y[i]);
      }
      return this.bytesToHex(z);
    },
  },
};
</script>

<style>
</style>