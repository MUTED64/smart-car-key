<template>
  <base-layout page-title="开关车锁">
    <ion-card class="main">
      <div class="iconWrapper">
        <ion-icon :icon="search"></ion-icon>
      </div>
      <ion-card-title>搜寻附近的已租车辆</ion-card-title>
      <!-- <ion-card-subtitle>若搜寻到则可点击建立连接</ion-card-subtitle> -->
      <ion-button expand="block" fill="outline">打开蓝牙开始搜寻</ion-button>
    </ion-card>
  </base-layout>
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
  border-radius: 12px;
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
import { IonIcon, IonCard, IonCardTitle, IonButton } from "@ionic/vue";
import { search } from "ionicons/icons";

export default {
  components: { IonIcon, IonCard, IonCardTitle, IonButton },
  data() {
    return {
      search,
    };
  },
};
</script>