<template>
  <ion-card class="car">
    <ion-card-title id="car-brand">PHIDEON</ion-card-title>
    <ion-card-content id="car-name">Volkswagen</ion-card-content>

    <div>
      <img src="assets/car.png" />
    </div>
  </ion-card>
</template>

<script>
import { IonCardContent, IonCard, IonCardTitle } from "@ionic/vue";

export default {
  components: {
    IonCardContent,
    IonCard,
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
  margin-top: -5%;
}
ion-card.car {
  opacity: 97%;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  min-height: 47vw;
  border-radius: 1rem;
  box-shadow: lightgray;
}
#car-brand {
  height: 2rem;
  margin-top: 4%;
  margin-left: 7%;
  letter-spacing: 1.5px;
  font-size: 1.4rem;
}
#car-name {
  height: 2rem;
  margin-left: 7%;
  padding: 0;
  font-size: 1.2rem;
}
</style>
