<template>
  <ion-card class="main">
    <div class="iconWrapper">
      <ion-icon :icon="happy"></ion-icon>
    </div>
    <ion-card-title color="medium">当前没有异常行驶记录</ion-card-title>
  </ion-card>
</template>

<style scoped>
ion-card.main {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 90%;
  /* border: 3px solid #3880ff; */
  box-shadow: none;
  border-radius: 12px;
}
ion-card-title {
  text-align: center;
  margin-top: 10%;
  margin-bottom: 10%;
}
ion-button {
  margin-top: 5%;
  margin-bottom: 5%;
}
ion-icon {
  font-size: 60px;
  color: #d7d8da;
}
div.iconWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<script>
import { IonIcon, IonCard, IonCardTitle } from "@ionic/vue";
import { happy } from "ionicons/icons";

export default {
  components: { IonIcon, IonCard, IonCardTitle },
  data() {
    return {
      happy,
    };
  },
};
</script>