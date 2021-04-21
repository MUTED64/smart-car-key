<template>
  <base-layout>
  <br/>
    <ion-button @click="showModal">Show Modal</ion-button>
    <simple-modal :is-open="modalInfo.show" @modal-closed="handleModalClosed" title="abc" />
  </base-layout>
</template>

<script>
import { IonButton } from "@ionic/vue";
import { defineComponent, reactive } from "vue";
import BaseLayout from "../components/BaseLayout.vue";
import SimpleModal from "./modal.vue";

export default defineComponent({
  components: { IonButton, SimpleModal, BaseLayout },
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
      alert(JSON.stringify(eventData));
    };

    return { showModal, handleModalClosed, modalInfo };
  },
});
</script>