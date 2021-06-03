<template>
  <base-layout>
    <ion-content fullscreen="true" slot="fixed">
      <br />
      <br />
      <ion-title class="page-title">
        <h1>Share Key</h1>
      </ion-title>
      <div class="tips-wrapper">
        <ion-text color="medium" class="tips-text">
          On this page, you can send your car keys to others or receive keys
          shared by others.
        </ion-text>
      </div>

      <ion-title class="sub-title">
        <h2>Functions</h2>
      </ion-title>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card button="true" @click="share" class="function-card">
              <ion-thumbnail>
                <img src="assets/Send.png" alt="Share" />
              </ion-thumbnail>
              <ion-card-title class="ion-text-center function-title">Share</ion-card-title>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card button="true" @click="receive" class="function-card">
              <ion-thumbnail>
                <img src="assets/Receive.png" alt="Receive" />
              </ion-thumbnail>
              <ion-card-title class="ion-text-center function-title">Receive</ion-card-title>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-title class="sub-title">
        <h2>Authority</h2>
      </ion-title>
      <ion-card button="true" class="authority-card">
        <ion-item lines="none" color="transparent">
          <ion-label>
            <h1>Exclusive</h1>
            <p class="sub-text">Stop others from using my key</p>
          </ion-label>
          <ion-thumbnail slot="end" id="stop-icon">
            <img src="assets/stop.png" alt="Stop" />
          </ion-thumbnail>
        </ion-item>
      </ion-card>
    </ion-content>
    <share-modal :is-open="modalInfo1.show" @modal-closed="handleModalClosed1" title="abc" />
  </base-layout>
</template>

<script>
import {
  IonTitle,
  IonThumbnail,
  IonGrid,
  IonCol,
  IonRow,
  IonItem,
  IonText,
  IonCard,
  IonCardTitle,
  IonContent,
  IonLabel,
  alertController,
  isPlatform
} from "@ionic/vue";
import Axios from "axios";
import { defineComponent, reactive } from "vue";
import ShareModal from "../components/ShareModal.vue";
import {
  Plugins,
  CameraResultType,
  CameraSource,
  CameraDirection,
} from "@capacitor/core";
const { Camera } = Plugins;

export default defineComponent({
  setup() {
    const modalInfo1 = reactive({
      show: false,
      data: null,
    });

    const showModal1 = () => {
      modalInfo1.show = true;
    };

    const handleModalClosed1 = (eventData) => {
      modalInfo1.show = false;
      // alert(JSON.stringify(eventData));
      console.log(eventData);
    };

    return { showModal1, handleModalClosed1, modalInfo1 };
  },
  components: {
    ShareModal,
    IonTitle,
    IonThumbnail,
    IonGrid,
    IonCol,
    IonRow,
    IonItem,
    IonText,
    IonCard,
    IonCardTitle,
    IonContent,
    IonLabel,
  },
  data() {
    return {
      state: "sharer",
    };
  },
  methods: {
    share() {
      this.modalInfo1.show = true;
      console.log("share");
    },
    async receive() {
      await this.getFaceData();
      const alert = await alertController.create({
        cssClass: "my-custom-class",
        header: "Success",
        message: "You have successfully received your key!",
        buttons: ["OK"],
      });
      await alert.present();
      const { role } = await alert.onDidDismiss();
      console.log("onDidDismiss resolved with role", role);
      console.log("receive");
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
    async takePhoto() {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera,
        quality: 50,
        direction: CameraDirection.Front,
      });
      return await photo.base64String;
    },
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
  },
});
</script>

<style scoped>
ion-content {
  --background: #ebf0fc;
}
.tips-text {
  font-size: larger;
}
.tips-wrapper {
  margin-left: 10%;
  margin-right: 10%;
}
.page-title {
  margin-left: 5%;
}
.sub-title {
  margin-left: 5%;
}
ion-grid {
  width: 80%;
}
ion-thumbnail {
  margin: auto;
  margin-top: 24px;
  margin-bottom: 16px;
}

.function-card {
  border-radius: 1rem;
}
.function-title {
  margin-bottom: 24px;
}
.authority-card {
  border-radius: 1rem;
  margin: 4% 10%;
  padding: 0 2%;
}

.sub-text {
  margin-top: 6px;
  margin-bottom: 6px;
  font-size: 16px;
}
h3 {
  margin-top: 0;
}
#stop-icon {
  width: 40px;
  height: 40px;
}
</style>
