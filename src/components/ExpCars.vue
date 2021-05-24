<template>
  <ion-card class="car">
    <ion-card-title id="brand">PHIDEON</ion-card-title>
    <ion-card-content id="name">Volkswagen</ion-card-content>

    <div>
      <img src="assets/car.png" />
    </div>
  </ion-card>
</template>

<script>
import { IonCardContent, IonCard, IonCardTitle } from "@ionic/vue";
import '../theme/ExpCars.scss';

export default {
  components: {
    IonCardContent,
    IonCard,
    IonCardTitle,
  },
};
</script>

<style scoped>
</style>
