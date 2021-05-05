<template>
  <base-layout buttonColor="primary">
    <ion-card id="top-bar">
      <ion-avatar>
        <img src="../../public/assets/avatar.png" />
      </ion-avatar>
      <div class="ion-text-center sub">
        <ion-title id="hello" color="light">Hello, Muted</ion-title>
        <ion-text color="light">Sun,April 11,2021</ion-text>
      </div>
    </ion-card>
    <ion-title class="ion-text-left">Personal Details</ion-title>
    <ion-item lines="none">
      <ion-thumbnail slot="start">
        <img src="assets/circle.png" />
      </ion-thumbnail>
      <ion-label>
        <h2>phone number</h2>
        <p>1234567890</p>
      </ion-label>
    </ion-item>
    <ion-item lines="none">
      <ion-thumbnail slot="start">
        <img src="assets/circle.png" />
      </ion-thumbnail>
      <ion-label>
        <h2>E-mail</h2>
        <p>1234567890@outlook.com</p>
      </ion-label>
    </ion-item>

    <ion-title class="ion-text-left">Rented Car</ion-title>
    <my-cars></my-cars>
  </base-layout>
</template>

<script>
import {
  IonAvatar,
  IonTitle,
  IonItem,
  IonCard,
  IonText,
  IonThumbnail,
  IonLabel,
} from "@ionic/vue";
import MyCars from "../components/MyCars.vue";
// import { Plugins } from '@capacitor/core';
import BaseLayout from "../components/BaseLayout.vue";
import "../theme/AboutMe.scss";
// const { App } = Plugins;

export default {
  name: "Folder",
  components: {
    IonAvatar,
    IonCard,
    IonTitle,
    IonItem,
    MyCars,
    BaseLayout,
    IonText,
    IonThumbnail,
    IonLabel,
  },
  data() {
    return {
      username: "",
    };
  },
};
</script>

<style scoped>
#top-bar {
  position: relative;
  --background: url("../../assets/AboutMeBackground.png") no-repeat 0 0 / 100%
      fixed,
    #fff;
  background-size: 100% auto;
  margin-bottom: 5%;
}

#hello {
  margin-bottom: 3%;
  font-size: 30px;
}

.sub {
  margin-bottom: 6%;
}

ion-avatar {
  width: 22%;
  --width: 22%;
  height: var(--width);
  --border-radius: 0;
  margin-bottom: 4%;
}

ion-thumbnail {
  max-width: 1.5rem;
  max-height: 1.5rem;
}

ion-item{
  margin-left: 5%;
}
</style>
