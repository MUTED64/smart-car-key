<template>
  <ion-modal backdropDismiss="false" :is-open="isOpen" css-class="modal4" @onDidDismiss="handleDidDismiss(true)">
    <form>
      <ion-label class="title" color="medium"><h1>Please fill in the verifiation code you received.</h1></ion-label>
      <ion-card>
        <ion-item lines="none">
          <ion-label color="medium" position="floating">Verification Code</ion-label>
          <ion-input required type="text" v-model="verificationCode"></ion-input>
        </ion-item>
      </ion-card>
      <div class="loginwrapper">
        <ion-button
          size="large"
          expand="block"
          type="button"
          @click.prevent="submit();"
        >Confirm</ion-button>
      </div>
    </form>
  </ion-modal>
</template>
  
<script>
import "@capacitor-community/http";
const { SM3, SM4 } = require("gm-crypto");
import Axios from "axios";
import qs from "qs";
import {
  Plugins,
  CameraResultType,
  CameraSource,
  CameraDirection,
} from "@capacitor/core";
const { Camera } = Plugins;
import {
  IonModal,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCard,
  isPlatform,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "RentModal",
  data() {
    return {
      verificationCode: "",
    };
  },
  components: {
    IonModal,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonCard,
  },
  props: {
    isOpen: {
      default: false,
      require: true,
    },
    title: {
      dafault: "a",
      require: false,
    },
  },
  setup(props, ctx) {
    const handleDidDismiss = (isCanceled) => {
      console.log(isCanceled);
      console.log(props);
      ctx.emit("modal-closed", { isCanceled });
    };
    return {
      handleDidDismiss,
    };
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
    async submit() {
      // await this.getFaceData();
      // let state = await this.authorization();
      this.handleDidDismiss(false);

      return false;
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
      let state = false;
      return state;
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
  },
});
</script>
  
<style scoped>
ion-card {
  box-shadow: none;
  border-radius: 1rem;
  margin: 32px;
  border: 2px solid var(--ion-color-primary);
}

ion-button {
  --border-radius: 1em;
}

.loginwrapper {
  margin: 28px;
}

#agree {
  margin-left: 16px;
}

h1{
  margin: 5% 9%;
  font-size: 1.25em;
}
</style>