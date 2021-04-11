<template>
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
    --background: url(../../assets/background_full.jpg) no-repeat top center/cover fixed, #fff;
    position: relative;
    height: 100%;
    width: 100%;
}
</style>

<script>
import {
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

// const { App } = Plugins;

export default {
  name: "Folder",
  components: {
    IonAvatar,
    IonCard,
    IonCardTitle,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonCardSubtitle,
    IonItem,
    IonCardContent,
    MyCars, 
    BaseLayout,
  },
  data() {
    return {
      username: "",
    };
  },
};
</script>