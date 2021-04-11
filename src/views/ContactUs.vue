<template>
<base-layout>
    <ion-content class="ion-padding">
      <ion-button @click="openModal">Open Modal</ion-button>
    </ion-content>
</base-layout>
</template>

<script>
import { IonButton, IonContent, modalController } from '@ionic/vue';
import Modal from './modal.vue'
import BaseLayout from '../components/BaseLayout.vue';

export default {
  components: { IonButton, IonContent, BaseLayout },
  data(){
    return{
      modal: null
    }
  },
  methods: {
    async openModal() {
      this.modal = await modalController
        .create({
          component: Modal,
          cssClass: 'my-custom-class',
          componentProps: {
            title: 'New Title'
          },
          presentingElement: top,
          swipeToClose: true,
        })
      return this.modal.present();
    },
    closeModal(){
      modalController.dismiss()
      console.log("a");
    }
  },
}
</script>