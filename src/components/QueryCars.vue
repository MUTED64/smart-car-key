<template>
  <ion-card class="car">
    <div class="car-overview">
      <ion-card-title id="car-brand">PHIDEON</ion-card-title>
      <ion-card-content id="car-name">Volkswagen</ion-card-content>
    </div>

    <div>
      <img src="assets/car.png" />
    </div>

    <ion-text>
      <h2>{{car_id}}{{car_type}}{{pos_x}}{{pos_y}}{{state}}</h2>
    </ion-text>

    <ion-grid>
      <ion-row>
        <ion-col>
          <div class="ion-text-center">
            <ion-text color="dark">
              <h1 style="display: inline;">￥114</h1>
            </ion-text>
            <ion-text>/day</ion-text>
          </div>
        </ion-col>
        <ion-col>
          <ion-button
            class="right-bottom-button"
            expand="block"
            color="secondary"
            @click="showModal"
          >Rent</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-card>

  <rent-modal :is-open="modalInfo.show" @modal-closed="handleModalClosed" title="abc" />
  <transition name="slide-fade">
    <ion-content class="backdrop" v-show="modalInfo.show"></ion-content>
  </transition>
</template>

<script>
import {
  IonCardContent,
  IonCard,
  IonButton,
  IonRow,
  IonGrid,
  IonCol,
  IonContent,
  IonCardTitle,
  IonText
} from "@ionic/vue";
import { defineComponent, reactive } from "vue";
import "../theme/MyCars.scss";
import RentModal from "./RentModal.vue";

export default defineComponent({
  components: {
    IonCardContent,
    RentModal,
    IonCard,
    IonButton,
    IonRow,
    IonGrid,
    IonCol,
    IonContent,
    IonCardTitle,
    IonText
  },
  props: ["car_id", "car_type", "pos_x", "pos_y", "state"],
  setup() {
    const modalInfo = reactive({
      show: false,
      data: null,
    });

    const showModal = () => {
      modalInfo.show = true;
    };

    const handleModalClosed = (eventData) => {
      modalInfo.show = false;
      // alert(JSON.stringify(eventData));
      console.log(eventData);
    };

    return { showModal, handleModalClosed, modalInfo };
  },
});
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
  --border-top-left-radius: 1rem;
  --border-top-right-radius: 0;
  --border-bottom-left-radius: 0;
  --border-bottom-right-radius: 1rem;
  --border-radius: var(--border-top-left-radius) var(--border-top-right-radius)
    var(--border-bottom-right-radius) var(--border-bottom-left-radius);
}

.backdrop {
  position: fixed;
  z-index: 10000;
  --background: url("../../assets/ConfirmBackground.png") no-repeat 0 0 / 100%
      fixed,
    #fff;
  background-size: 100% auto;
  margin-bottom: 5%;
  top: 0;
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.35s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>