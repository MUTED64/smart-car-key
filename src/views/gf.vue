<template>
  <base-layout>
    <br />
    <br />
    <ion-button @click="test()">gen</ion-button>
  </base-layout>
</template>

<script>
import BaseLayout from "../components/BaseLayout.vue";
import { IonButton } from "@ionic/vue";
import {
  euclid,
  gen_pow_matrix,
  polydiv,
  minpoly,
  pm2,
  polyadd,
  polyval,
} from "../js/gf";
export default {
  components: { BaseLayout, IonButton },
  data() {
    return {
      pm: gen_pow_matrix(),
      R: pm2(64),
      t: 32,
    };
  },
  methods: {
    euclid: euclid,
    gen_pow_matrix: gen_pow_matrix,
    minpoly: minpoly,
    encode(U) {
      const n = 1023;
      let g = minpoly(this.R, this.pm);
      let k = n - g.length + 1;

      let V = [];

      if (U.length !== k) {
        console.log("error");
      } else {
        for (let i = 0; i < n; i++) {
          if (i < k) {
            V.push(U[i]);
          } else {
            V.push(0);
          }
        }
        V = polyadd(V, polydiv(V, g, this.pm)[1]);
        return V;
      }
    },

    decode(W) {
      console.time("dec");
      let V = JSON.parse(JSON.stringify(W));

      let s = polyval(V, this.R, this.pm);

      s.reverse().push(1);
      
      let x = new Array(2 * this.t + 1).fill(0);
      x[0] = 1;
      x = euclid(x, s, this.pm, this.t)[2];
      console.log(`x:${x}`);
      x = polyval(x, pm2(this.pm.length), this.pm);
      
      for (let i = 0; i < this.pm.length; i++) {
        if (x[i] === 0) {
          // console.log(`this.pm[this.pm[i][1] - 1][0] - 1:${this.pm[this.pm[i][1] - 1][0] - 1}`);
          V[this.pm[this.pm[i][1] - 1][0] - 1] ^= 1;
        }
      }
console.timeEnd("dec");
      return V;
    },

    test() {
      let test = [0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0];
      
      // for (let i = 0; i < 708; i++) {
      //   test.push(Math.floor(Math.random() * 2));
      // }
      console.log(test);

      let V = this.encode(test);
      console.log(`V:${V}`);
      V[3] ^= 1;
      V[1] ^= 1;
      V[15] ^= 1;
      V[16] ^= 1;
      V[10] ^= 1;
      console.log(`d:${this.decode(V)}`);
    },
  },
};
</script>

<style>
</style>