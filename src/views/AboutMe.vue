<template>
  <base-layout buttonColor="primary">
    <ion-card id="top-bar">
      <ion-avatar>
        <img
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1003701334,2835357039&fm=26&gp=0.jpg"
        />
      </ion-avatar>
      <div class="ion-text-center">
        <ion-title>Hello, Muted</ion-title>
        <ion-text>Sun,April 11,2021</ion-text>
      </div>
    </ion-card>
    <ion-title class="ion-text-left">Personal Details</ion-title>
    <ion-item lines="none">
      <ion-thumbnail slot="start">
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
      </ion-thumbnail>
      <ion-label>
        <h1>phone number</h1>
        <p>1234567890</p>
      </ion-label>
    </ion-item>
    <ion-item lines="none">
      <ion-thumbnail slot="start">
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
      </ion-thumbnail>
      <ion-label>
        <h1>E-mail</h1>
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
</style>