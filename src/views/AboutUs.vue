<template>
  <base-layout>
    <ion-content fullscreen="true" slot="fixed"></ion-content>
  </base-layout>
</template>

<script>
import { IonContent } from "@ionic/vue";

export default {
  components: { IonContent },
};
</script>

<style scoped>
ion-content {
  --background: url("../../assets/AboutUs.png") no-repeat 50% 50% / 100% fixed,
    #fff;
  background-size: 100% auto;
}
</style>
