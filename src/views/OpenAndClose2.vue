<template>
  <base-layout></base-layout>
</template>

<script>
import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

export default {
  components: {
  },
  methods: {
    async setObject() {
      await Storage.set({
        key: "user",
        value: JSON.stringify({
          id: 1,
          name: "Max",
        }),
      });
    },

    // JSON "get" example
    async getObject() {
      const ret = await Storage.get({ key: "user" });
      const user = JSON.parse(ret.value);
      console.log(user);
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