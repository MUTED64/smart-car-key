<template>
  <ion-modal :is-open="isOpen" css-class="modal1" @onDidDismiss="handleDidDismiss(true)">
    <form>
      <ion-item>
        <ion-label position="floating">MM/DD/YYYY</ion-label>
        <ion-datetime
          v-model="date"
          required
          display-format="MM/DD/YYYY"
          min="2021-05-12"
          max="2025-12-30"
        ></ion-datetime>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Password</ion-label>
        <ion-input type="password" v-model="password" required></ion-input>
      </ion-item>
      <ion-button type="button" @click.prevent="submit();handleDidDismiss(false)">Submit</ion-button>
      <ion-button @click.prevent="handleDidDismiss(false)">CLOSE</ion-button>
    </form>
  </ion-modal>
</template>
  
<script>
import {
  IonModal,
  IonItem,
  IonLabel,
  IonDatetime,
  IonInput,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "RentModal",
  data() {
    return {
      date: null,
      password: "",
    };
  },
  components: {
    IonModal,
    IonItem,
    IonLabel,
    IonDatetime,
    IonInput,
    IonButton,
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
  methods: {
    async submit() {
      console.log(this.date);
      console.log(this.password);
      console.log("submitted");
      return false;
    },
  },
});
</script>
  
<style scoped>
</style>