<template>
  <base-layout>
    <br />
    <br />
    <ion-button @click="euclid([1,1,1,1,1,1,1],[1,0,5,6,12,11],gen_pow_matrix(),3)">gen</ion-button>
  </base-layout>
</template>

<script>
import BaseLayout from "../components/BaseLayout.vue";
import { IonButton } from "@ionic/vue";
import { euclid, gen_pow_matrix } from "../js/gf";
export default {
  components: { BaseLayout, IonButton },
  data() {
    return {
      pm: "",
    };
  },
  methods: {
    euclid: euclid,
    gen_pow_matrix: gen_pow_matrix
  }
};
</script>

<style>
</style>