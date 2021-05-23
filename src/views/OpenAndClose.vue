<template>
  <base-layout buttonColor="light">
    <ion-content fullscreen="true" slot="fixed">
      <ion-card class="main">
        <ion-title id="using-tips">
          <h4>Choose one of your cars:</h4>
        </ion-title>
        <ion-card class="car">
          <div class="car-overview">
            <ion-card-title id="car-brand">PHIDEON</ion-card-title>
            <ion-card-content id="car-name">Volkswagen</ion-card-content>
          </div>

          <div>
            <img src="assets/car.png" />
          </div>

          <ion-grid>
            <ion-row>
              <ion-col>
                <div class="ion-text-center">
                  <ion-text>
                    <h4>LOCKED</h4>
                  </ion-text>
                </div>
              </ion-col>
              <ion-col>
                <ion-button
                  class="right-bottom-button"
                  expand="block"
                  color="primary"
                  @click="open()"
                >OPEN</ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card>
      </ion-card>
    </ion-content>
  </base-layout>
</template>

<script>
import {
  IonCardContent,
  IonCard,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCardTitle,
  IonText,
  IonContent,
  IonTitle,
} from "@ionic/vue";
import "../theme/MyCars.scss";
import {
  BleClient,
  textToDataView,
  numberToUUID,
} from "@capacitor-community/bluetooth-le";

const HEART_RATE_SERVICE = "0000180d-0000-1000-8000-00805f9b34fb";
const BODY_SENSOR_LOCATION_CHARACTERISTIC =
  "00002a38-0000-1000-8000-00805f9b34fb";

export default {
  components: {
    IonCardContent,
    IonCard,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonCardTitle,
    IonText,
    IonContent,
    IonTitle,
  },
  methods: {
    async open() {
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
        await BleClient.startNotifications(
          device.deviceId,
          HEART_RATE_SERVICE,
          BODY_SENSOR_LOCATION_CHARACTERISTIC,
          (value) => {
            console.log("current value", value);
          }
        );
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
ion-content {
  --background: url("../../assets/UsingBackground.png") no-repeat 0 0 / 100%
      fixed,
    #fff;
  background-size: 100% auto;
}

ion-card.main {
  position: absolute;
  z-index: 1;
  width: 100%;
  margin-left: 0%;
  margin-top: calc(0.815 * 100vw);
  border-radius: 0;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  min-height: calc(100% - 0.815 * 100vw);
  box-shadow: none;
  margin-bottom: 0;
}

ion-button {
  --padding-bottom: 0;
  --padding-top: 0;
  --padding-start: 0;
  --padding-end: 0;
  margin: 0;
  min-height: 60px;
  max-height: 60px;
  font-size: 20px;
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

#using-tips {
  margin-left: 4%;
  margin-top: 14px;
  margin-bottom: 4px;
}
img {
  display: block;
  width: 70%;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
}
</style>
