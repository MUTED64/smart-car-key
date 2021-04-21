<template>
  <ion-modal :is-open="isOpen" css-class="modal1" @onDidDismiss="handleDidDismiss(true)">
    <ion-button @click.prevent="handleDidDismiss(false)">CLOSE</ion-button>
  </ion-modal>
</template>

<script>
import {
  IonModal,
  // IonHeader,
  // IonToolbar,
  // IonTitle,
  // IonContent,
  // IonButton,
  // IonList,
  // IonItem,
  // IonAvatar,
  // IonLabel,
  // IonImg,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SimpleModal",
  components: {
    IonModal,
    // IonHeader,
    // IonToolbar,
    // IonTitle,
    // IonContent,
    // IonButton,
    // IonList,
    // IonItem,
    // IonAvatar,
    // IonLabel,
    // IonImg,
  },
  props: {
    isOpen: {
      default: false,
      require: true,
    },
    title: {
      dafault: "a",
      require: false,
    },
  },
  setup(props, ctx) {
    const handleDidDismiss = (isCanceled) => {
      console.log(isCanceled);
      console.log(props);
      ctx.emit("modal-closed", { isCanceled });
    };
    return {
      handleDidDismiss,
    };
  },
});
</script>

<style scoped>

</style>