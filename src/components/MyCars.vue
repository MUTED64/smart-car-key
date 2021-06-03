<template>
  <ion-card class="car">
    <div class="car-overview">
      <ion-card-title id="car-brand">PHIDEON</ion-card-title>
      <ion-card-content id="car-name">Volkswagen</ion-card-content>
    </div>

    <div>
      <img src="assets/car.png" />
    </div>

    <ion-grid>
      <ion-row>
        <ion-col>
          <ion-button class="left-bottom-button" expand="block" color="light">Return</ion-button>
        </ion-col>
        <ion-col>
          <ion-button class="right-bottom-button" expand="block" color="tertiary">Details</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-card>
</template>

<script>
import {
  IonCardContent,
  IonCard,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCardTitle,
} from "@ionic/vue";
import "../theme/MyCars.scss";

export default {
  components: {
    IonCardContent,
    IonCard,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonCardTitle,
  },
};
</script>

<style scoped>
img {
  display: block;
  width: 70%;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
}
ion-button {
  --padding-bottom: 0;
  --padding-top: 0;
  --padding-start: 0;
  --padding-end: 0;
  margin: 0;
  min-height: 60px;
  max-height: 60px;
  font-size: 18px;
}
ion-grid {
  padding: 0;
}
ion-row {
  padding: 0;
}
ion-col {
  padding: 0;
}
ion-text h1 {
  margin: 0;
  line-height: 53px;
}
.right-bottom-button {
  --border-top-left-radius: 0;
  --border-top-right-radius: 0;
  --border-bottom-left-radius: 0;
  --border-bottom-right-radius: 1rem;
  --border-radius: var(--border-top-left-radius) var(--border-top-right-radius)
    var(--border-bottom-right-radius) var(--border-bottom-left-radius);
}
.left-bottom-button {
  --border-top-left-radius: 0;
  --border-top-right-radius: 0;
  --border-bottom-left-radius: 1rem;
  --border-bottom-right-radius: 0;
  --border-radius: var(--border-top-left-radius) var(--border-top-right-radius)
    var(--border-bottom-right-radius) var(--border-bottom-left-radius);
}
</style>
