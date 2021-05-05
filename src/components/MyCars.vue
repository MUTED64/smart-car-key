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
          <div class="ion-text-center">
            <ion-text color="dark"><h1 style="display: inline;">￥114</h1></ion-text><ion-text>/day</ion-text>
          </div>
        </ion-col>
        <ion-col>
          <ion-button
            class="right-bottom-button"
            expand="block"
            color="tertiary"
            >Details</ion-button
          >
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-card>
</template>

<script>
import { IonCardContent, IonCard, IonButton } from "@ionic/vue";

export default {
  components: {
    IonCardContent,
    IonCard,
    IonButton,
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
ion-card.car {
  margin-left: auto;
  margin-right: auto;
  width: 84%;
  border-radius: 1em;
}
.car-overview {
  min-height: 2rem;
  margin-top: 3%;
}
#car-brand {
  height: 2rem;
  float: left;
  margin-left: 7%;
  letter-spacing: 1.5px;
  font-size: 1.4rem;
}
#car-name {
  height: 2rem;
  padding: 0;
  float: right;
  margin-right: 7%;
  font-size: 1.2rem;
}
ion-button {
  --padding-bottom: 0;
  --padding-top: 0;
  --padding-start: 0;
  --padding-end: 0;
  margin: 0;
  min-height: 60px;
  max-height: 60px;
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
.right-bottom-button {
  --border-top-left-radius: 1rem;
  --border-top-right-radius: 0;
  --border-bottom-left-radius: 0;
  --border-bottom-right-radius: 1rem;
  --border-radius: var(--border-top-left-radius) var(--border-top-right-radius)
    var(--border-bottom-right-radius) var(--border-bottom-left-radius);
}
ion-text h1{
  margin: 0;
  line-height: 53px;
}
</style>
