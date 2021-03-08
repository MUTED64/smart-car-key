<template>
  <base-layout page-title="共享钥匙">
    <ion-toolbar>
      <ion-segment value="sharer" @ionChange="segmentChanged($event)">
        <ion-segment-button value="sharer">
          <ion-label>分享钥匙</ion-label>
        </ion-segment-button>
        <ion-segment-button value="receiver">
          <ion-label>接收钥匙</ion-label>
        </ion-segment-button>
      </ion-segment>
    </ion-toolbar>
    <ion-card>
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
    </ion-card>
  </base-layout>
</template>

<style scoped>
ion-card {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 40%;
  transform: translateY(-50%);
  width: 90%;
  border: 3px solid #3880ff;
  box-shadow: none;
  border-radius: 12px;
}
ion-card-title {
  text-align: center;
  margin-top: 10%;
}
ion-button {
  margin-top: 10%;
}
</style>

<script>
import {
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonToolbar,
  IonCardTitle,
  IonInput,
  IonItem,
  IonList,
  IonButton,
  IonCard,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonToolbar,
    IonCardTitle,
    IonInput,
    IonItem,
    IonList,
    IonButton,
    IonCard,
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