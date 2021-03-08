<template>
  <base-layout page-title="车辆租赁">
    <div id="container"></div>
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
          "AMap.Geolocation"
        ],
        AMapUI: {
          version: "1.1",
          plugins: ["overlay/SimpleMarker"],
        },
      })
        .then(() => {
          let map = new AMap.Map("container");
          map.addControl(new AMap.Scale());
          map.addControl(new AMap.Geolocation());
          map.add(
            new AMap.Marker({
              position: map.getCenter(),
            })
          );
        })
        .catch((e) => {
          console.error(e);
        });
    },
    getLocation() {
        const self = this
        AMap.plugin('AMap.Geolocation', function () {
            var geolocation = new AMap.Geolocation({
                // 是否使用高精度定位，默认：true
                enableHighAccuracy: true,
                // 设置定位超时时间，默认：无穷大
                timeout: 10000,
            })

            geolocation.getCurrentPosition()
            AMap.event.addListener(geolocation, 'complete', onComplete);
            AMap.event.addListener(geolocation, 'error', onError);

            function onComplete(data) {
                // data是具体的定位信息
                console.log('定位成功信息：', data);
            }

            function onError(data) {
                // 定位出错
                console.log('定位失败错误：', data);
                // 调用ip定位
                self.getLngLatLocation();
            }
        })
    },
  },
};
</script>

<style scoped>
#container {
  width: 100%;
  height: 100%;
}
</style>