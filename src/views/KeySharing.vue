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
            <ion-card button="true" class="function-card">
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
} from "@ionic/vue";
import { defineComponent, reactive } from "vue";
import ShareModal from "../components/ShareModal.vue";

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
    receive() {
      console.log("receive");
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
