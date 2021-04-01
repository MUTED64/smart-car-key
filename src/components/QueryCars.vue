<template>
  <ion-card class="car" color="light">
    <!-- <ion-item> -->
    <div>
      <img
        src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3399343206,2011389109&fm=26&gp=0.jpg"
      />
    </div>
    <!-- <ion-label>雪佛兰科迈罗</ion-label> -->
    <!-- </ion-item> -->
    <ion-card-content>id:{{car_id}}</ion-card-content>
    <ion-card-content>车辆类型：{{car_type}}</ion-card-content>
    <!-- <ion-card-content>xx元/天，租借x天，x年x月x日到期</ion-card-content>
    <ion-card-content>车牌号：qwerty</ion-card-content>-->
    <ion-card-content>位置：{{pos_x}},{{pos_y}}</ion-card-content>
    <ion-card-content>状态：{{state}}</ion-card-content>
  </ion-card>
</template>

<script>
import { IonCardContent, IonCard } from "@ionic/vue";

export default {
  components: {
    IonCardContent,
    IonCard,
  },
  props: ["car_id", "car_type", "pos_x", "pos_y", "state"],
};
</script>

<style scoped>
div {
  height: 135px;
}
img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
ion-card.car {
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  border-radius: 12px;
}
</style>