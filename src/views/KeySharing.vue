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
            <ion-card button="true" href="/folder/AboutMe" class="function-card">
              <ion-thumbnail>
                <img src="assets/Send.png" alt="Send" />
              </ion-thumbnail>
              <ion-card-title class="ion-text-center function-title">Send</ion-card-title>
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
    <!-- <ion-toolbar>
      <ion-segment value="sharer" @ionChange="segmentChanged($event)">
        <ion-segment-button value="sharer">
          <ion-label>分享钥匙</ion-label>
        </ion-segment-button>
        <ion-segment-button value="receiver">
          <ion-label>接收钥匙</ion-label>
        </ion-segment-button>
      </ion-segment>
    </ion-toolbar>-->
    <!-- <ion-card>
      <ion-card-title v-if="state ==='sharer'">请输入接收用户的用户名和手机号</ion-card-title>
      <ion-card-title v-else>请输入分享用户的用户名和手机号</ion-card-title>
      <form class="ion-padding" @submit.prevent="state === 'sharer' ? share() : receive()">
        <ion-list>
          <ion-item>
            <ion-label position="floating" color="primary">用户名</ion-label>
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
            <ion-label position="floating" color="primary">手机号</ion-label>
            <ion-input
              v-model="telephone"
              name="telephone"
              type="tel"
              spellcheck="false"
              autocapitalize="off"
              required
            ></ion-input>
          </ion-item>
        </ion-list>
        <ion-button type="submit" expand="block">提交</ion-button>
      </form>
    </ion-card>-->
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
import { defineComponent } from "vue";
// import {stopCircleOutline} from "ionicons/icons"

export default defineComponent({
  components: {
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
    segmentChanged(ev) {
      this.state = ev.detail.value;
    },
    share() {
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
