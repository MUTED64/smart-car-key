<template>
<<<<<<< HEAD
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
=======
  <base-layout page-title="我的信息">
    <!-- <ion-content fullscreen="true" slot="fixed">
      <div class="card">
        <div class="header">
          <div class="avatar">
            <img src="../../assets/player104.png" alt />
          </div>
        </div>
        <div class="card-body">
          <div class="user-meta ion-text-center">
            <h3 class="playername">Roger Federer</h3>
            <h5 class="country">Switzerland</h5>
            <h6 class="ranking">
              Current ranking:
              <ion-chip>
                <ion-label>2</ion-label>
              </ion-chip>
            </h6>
          </div>

          <ion-button expand="full" color="primary">http://rogerfederer.com</ion-button>
          <ion-button expand="full" color="secondary">@RogerFederer on Twitter</ion-button>
          <ion-button expand="full" color="secondary">View profile at ATP</ion-button>
        </div>
      </div>
    </ion-content> -->
    <ion-card class="main" color="light">
      <div>
        <ion-avatar>
          <img
            src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1003701334,2835357039&fm=26&gp=0.jpg"
          />
        </ion-avatar>
        <ion-card-title style>小明</ion-card-title>
      </div>
      <ion-header translucent>
        <ion-toolbar color="primary">
          <ion-title>个人信息</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-item color="light">
        <ion-card-subtitle>电话</ion-card-subtitle>
        <ion-card-content>1234567890</ion-card-content>
      </ion-item>
      <ion-item color="light">
        <ion-card-subtitle>邮箱</ion-card-subtitle>
        <ion-card-content>1234567890@outlook.com</ion-card-content>
      </ion-item>
      <ion-header translucent>
        <ion-toolbar color="primary">
          <ion-title>已租车辆</ion-title>
        </ion-toolbar>
      </ion-header>
      <my-cars></my-cars>
    </ion-card>
>>>>>>> c837da1cf362b5eff9cc2ac7f4e1c68b383b99ac
  </base-layout>
</template>

<style scoped>
ion-card.main {
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  border: 3px solid var(--ion-color-primary);
  border-radius: 12px;
  margin-top: 7%;
}
ion-avatar {
  margin-top: 7%;
  margin-bottom: 7%;
  margin-left: auto;
  margin-right: auto;
}
ion-card-title {
  text-align: center;
  font-weight: bolder;
  font-size: xx-large;
  margin-bottom: 5%;
  --color: #808289;
}
ion-item {
  margin-left: auto;
  margin-right: auto;
  padding: 0;
}
ion-card.car {
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  border-radius: 12px;
}
ion-img {
  width: 50%;
}

ion-content {
  --background: url(../../assets/background_full.jpg) no-repeat top center/cover
      fixed,
    #fff;
  position: relative;
  height: 100%;
  width: 100%;
}

#top-bar {
  margin: 0;
  border-radius: 0 0 1em 1em;
}
</style>

<script>
import {
<<<<<<< HEAD
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
=======
IonAvatar,
IonCard,
IonCardTitle,
IonTitle,
IonToolbar,
IonHeader,
IonCardSubtitle,
IonItem,
IonCardContent,
} from "@ionic/vue";
import MyCars from "../components/MyCars.vue";
// import { Plugins } from '@capacitor/core';
import BaseLayout from '../components/BaseLayout.vue';
>>>>>>> c837da1cf362b5eff9cc2ac7f4e1c68b383b99ac

// const { App } = Plugins;

export default {
  name: "Folder",
  components: {
    IonAvatar,
    IonCard,
<<<<<<< HEAD
    IonTitle,
    IonItem,
    MyCars,
    BaseLayout,
    IonText,
    IonThumbnail,
    IonLabel,
=======
    IonCardTitle,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonCardSubtitle,
    IonItem,
    IonCardContent,
    MyCars, 
    BaseLayout,
>>>>>>> c837da1cf362b5eff9cc2ac7f4e1c68b383b99ac
  },
  data() {
    return {
      username: "",
    };
  },
};
</script>