<template>
  <base-layout></base-layout>
  <ion-button @click="clickButton"></ion-button>
</template>

<script>
// import defineComponent from 'vue';

export default {
  methods: {
    clickButton() {
      // 调用send方法，以字符串形式发送数据
      this.$socket.send("some data");
      // 如果fomat配置为了json，即可调用sendObj方法来发送数据
      // this.$socket.sendObj({ awesome: 'data'} );
    //   this.$options.sockets.onmessage = (res) => {
    //     console.log(res);
    //   };
    },
  },
};
</script>