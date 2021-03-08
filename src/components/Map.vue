<template>
  <div class="map" id="map"></div>
</template>

<script>
import { ref } from "vue";

// INITIALIZE GOOGLEMAPS
(() => {

  if (window.google?.maps) {
    window.initMap();
    return;
  }

  const key = "MAP-API-KEY";
  const googleMapScript = document.createElement("SCRIPT");
  googleMapScript.setAttribute(
    "src",
    `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`
  );
  googleMapScript.setAttribute("defer", "");
  googleMapScript.setAttribute("async", "");
  document.head.appendChild(googleMapScript);
})();

export default {
  name: "MySimpleMap",
  props: {
    msg: String,
    center: { lat: Number, lng: Number },
  },
  setup(props, ctx) {
    const map = ref();

    // from the callback, initialize the map when we know
    // the script is loaded
    window.initMap = () => {
      map.value = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: props.center,
        disableDefaultUI: true,
      });
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.map {
  width: 100%;
  height: 300px;
}