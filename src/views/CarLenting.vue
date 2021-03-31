<template>
  <base-layout page-title="车辆租赁">
    <div id="container"></div>

    <ion-card>
      <!-- <ion-card-title>ABC</ion-card-title> -->
    </ion-card>

  </base-layout>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";

export default {
  mounted() {
    this.getGis();
  },
  methods: {
    getGis() {
      AMapLoader.load({
        //注册开发者/创建应用，选择web端JS API（必须）
        key: "9ca86d721d78f008dab740f3136c1a18", //首次load必填
        version: "2.0",
        plugins: [
          "AMap.Marker",
          "AMap.Map",
          "AMap.Geolocation",
          "AMap.Scale",
          "AMap.ToolBar",
          "AMap.Geolocation",
        ],
        AMapUI: {
          version: "1.1",
          plugins: ["overlay/SimpleMarker"],
        },
      })
        .then(async () => {
          let map = new AMap.Map("container", { resizeEnable: true });
          let location = new AMap.Geolocation({
            // 是否使用高精度定位，默认：true
            enableHighAccuracy: true,
            // 设置定位超时时间，默认：无穷大
            timeout: 10000,
            // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
            //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            zoomToAccuracy: true,
            //  定位按钮的排放位置,  RB表示右下
            position: "RB",
            offset:[10,70],
            borderRadius: '10px',
            buttonSize: '32px'
          });
          map.addControl(new AMap.Scale({offset:[10,70]}));
          map.addControl(location);
          console.log((await this.getLocation(location)).position);
          // map.add(
          //     new AMap.Marker({
          //       position: position.position,
          //     })
          //   );
          // console.log(map.getCenter());
        })
        .catch((e) => {
          console.error(e);
        });
    },
    async getLocation(geolocation) {
      return new Promise((resolve, reject) => {
        AMap.plugin("AMap.Geolocation", function () {
          geolocation.getCurrentPosition(function (status, result) {
            if (status == "complete") {
              onComplete(result);
            } else {
              onError(status);
            }
          });
        });

        function onComplete(result) {
          // data是具体的定位信息
          resolve(result);
        }

        function onError(status) {
          // 定位出错
          reject(status);
        }
      });
    },
  },
};
</script>

<style scoped>
#container {
  width: 100%;
  height: 80vh;
  z-index: -1;
  position: absolute;
}

ion-card{
  position: absolute;
  z-index:1;
  width: 100%;
  margin-left: 0%;
  margin-top: 72vh;
  border-top-left-radius: 1.5em;
  border-top-right-radius: 1.5em;
  min-height:15vh;
  box-shadow: none;
}
</style>