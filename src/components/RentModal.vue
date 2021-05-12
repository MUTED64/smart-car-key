<template>
  <ion-modal :is-open="isOpen" css-class="modal1" @onDidDismiss="handleDidDismiss(true)">
    <form>
      <ion-card>
        <ion-item lines="none">
          <ion-label color="medium" position="floating">Choose Start Time</ion-label>
          <ion-datetime
            v-model="date"
            required
            display-format="YYYY/MM/DD"
            min="2021-05-12"
            max="2025-12-30"
          ></ion-datetime>
        </ion-item>
      </ion-card>
      <ion-card>
        <ion-item lines="none">
          <ion-label color="medium" position="floating">Choose End Time</ion-label>
          <ion-datetime
            v-model="date"
            required
            display-format="YYYY/MM/DD"
            min="2021-05-12"
            max="2025-12-30"
          ></ion-datetime>
        </ion-item>
      </ion-card>
      <ion-card>
        <ion-item lines="none">
          <ion-label color="medium" position="floating">Password</ion-label>
          <ion-input required type="password" v-model="password"></ion-input>
        </ion-item>
      </ion-card>
      <ion-item id="agree" lines="none"><ion-label><p>Agree the User Agreement</p></ion-label></ion-item>
      <div class="loginwrapper">
        <ion-button
          size="large"
          expand="block"
          type="button"
          @click.prevent="submit();handleDidDismiss(false)"
        >Rent the car</ion-button>
      </div>
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
  IonCard,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "RentModal",
  data() {
    return {
      startdate: null,
      enddate: null,
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
    IonCard,
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
ion-card {
  box-shadow: none;
  border-radius: 1rem;
  margin: 32px;
  border: 2px solid var(--ion-color-primary);
}

ion-button {
  --border-radius: 1em;
}

.loginwrapper {
  margin: 28px;
}

#agree{
  margin-left: 32px;
}
</style>