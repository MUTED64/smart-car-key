<template>
  <!-- <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
    <ion-buttons slot="end">
      <ion-button onclick="dismissModal()">Close</ion-button>
    </ion-buttons>
  </ion-header>
  <ion-content class="ion-padding">{{ content }}</ion-content>-->
  <ion-header translucent>
    <ion-toolbar>
      <ion-title>{{title}}</ion-title>
      <!-- <ion-buttons slot="end">
        <ion-button @click="dismissModal()">Close</ion-button>
      </ion-buttons> -->
    </ion-toolbar>
  </ion-header>
  <ion-content fullscreen>
    <ion-list>
      <ion-item>
        <ion-avatar slot="start">
          <ion-img src="./avatar-gollum.jpg" />
        </ion-avatar>
        <ion-label>
          <h2>Gollum</h2>
          <p>Sneaky little hobbitses!</p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-avatar slot="start">
          <ion-img src="./avatar-frodo.jpg" />
        </ion-avatar>
        <ion-label>
          <h2>Frodo</h2>
          <p>Go back, Sam! I'm going to Mordor alone!</p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-avatar slot="start">
          <ion-img src="./avatar-samwise.jpg" />
        </ion-avatar>
        <ion-label>
          <h2>Samwise</h2>
          <p>What we need is a few good taters.</p>
        </ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonAvatar,
  IonItem,
  IonList,
  IonImg,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    title: { type: String, default: "Super Modal" },
  },
  data() {
    return {
      content: "Content",
    };
  },
  methods: {
  },
  components: {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonAvatar,
    IonItem,
    IonList,
    IonImg,
  },
});
</script>