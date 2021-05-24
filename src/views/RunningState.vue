<template>
  <base-layout buttonColor="light">
    <ion-content>
      <exp-cars class="card"></exp-cars>
      <ion-title>
        <h1>Exception Log</h1>
      </ion-title>
      <ion-card color="light" class="exception" v-if="!exception">
        <ion-card-subtitle>
          <h2 class="subtitle">No Exception</h2>
        </ion-card-subtitle>
      </ion-card>
    </ion-content>
  </base-layout>
</template>

<script>
import ExpCars from "../components/ExpCars.vue";
import { IonTitle, IonCard, IonCardSubtitle, IonContent } from "@ionic/vue";

export default {
  data() {
    return {
      exception: undefined,
    };
  },
  components: { ExpCars, IonTitle, IonCard, IonContent, IonCardSubtitle },
};
</script>

<style scoped>
ion-content {
  width: 100%;
  height: 100%;
  --background: url("../../assets/exp.png") no-repeat 0 0 / 100% fixed, #fff;
  background-size: 100% auto;
  position: relative;
}

.card {
  margin-top: 30vw;
}

.exception {
  border-radius: 1rem;
  text-align: center;
  box-shadow: none;
  margin-left: 5%;
  margin-right: 5%;
}

.subtitle {
  color: var(--ion-color-medium);
  margin: 7% auto;
}
</style>