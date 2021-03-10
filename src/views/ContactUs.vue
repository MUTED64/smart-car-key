<template>
  <base-layout>
  <ion-button @click="setObject">set</ion-button>
  <ion-button @click="setObjectB">setb</ion-button>
  <ion-button @click="getObject">get</ion-button>
  <h1>{{ name }}</h1>
  </base-layout>
</template>

<script>
import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

export default {
  components: {
  },
  data(){
    return{
      name: null,
      id: null
    }
  },
  methods: {
    async setObject() {
      await Storage.set({
        key: "user",
        value: JSON.stringify({
          id: 1,
          name: "max",
        }),
      });
    },

    async setObjectB() {
      await Storage.set({
        key: "user",
        value: JSON.stringify({
          id: 2,
          name: "min",
        }),
      });
    },

    // JSON "get" example
    async getObject() {
      const ret = await Storage.get({ key: "user" });
      const user = JSON.parse(ret.value);
      console.log(user);
      this.name = user.name;
      this.id = user.id;
    },

    async setItem() {
      await Storage.set({
        key: "name",
        value: "Max",
      });
    },

    async getItem() {
      const { value } = await Storage.get({ key: "name" });
      console.log("Got item: ", value);
    },

    async removeItem() {
      await Storage.remove({ key: "name" });
    },

    async keys() {
      const { keys } = await Storage.keys();
      console.log("Got keys: ", keys);
    },

    async clear() {
      await Storage.clear();
    },
  },
};
</script>

<style>
</style>