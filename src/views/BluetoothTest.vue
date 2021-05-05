<template>
  <base-layout page-title="项目信息">
    <ion-button @click="main()">connect</ion-button>
  </base-layout>
</template>

<script>
import {
  BleClient,
  textToDataView,
  numberToUUID,
} from "@capacitor-community/bluetooth-le";

const HEART_RATE_SERVICE = "0000180d-0000-1000-8000-00805f9b34fb";
const BODY_SENSOR_LOCATION_CHARACTERISTIC =
  "00002a38-0000-1000-8000-00805f9b34fb";

export default {
  methods: {
    async main() {
      try {
        await BleClient.initialize();

        const device = await BleClient
          .requestDevice
          // services: [HEART_RATE_SERVICE],
          // optionalServices: [BATTERY_SERVICE, POLAR_PMD_SERVICE],
          ();

        await BleClient.connect(device.deviceId);
        console.log("connected to device", device);

        const result = await BleClient.read(
          device.deviceId,
          HEART_RATE_SERVICE,
          BODY_SENSOR_LOCATION_CHARACTERISTIC
        );
        console.log("body sensor location", result.getUint8(0));

        await BleClient.write(
          device.deviceId,
          // POLAR_PMD_SERVICE,
          // POLAR_PMD_CONTROL_POINT,
          numberToUUID(0x181c),
          numberToUUID(0x2a8a),
          textToDataView("muted")
        );
        console.log("written muted");

        const re = await BleClient.read(
          device.deviceId,
          numberToUUID(0x181c),
          numberToUUID(0x2a8a)
        );
        console.log("name", re);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>