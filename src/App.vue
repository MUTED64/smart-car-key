<template>
  <IonApp>
    <IonSplitPane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-card id="top-card" color="primary">
              <img id="menu-logo" src="assets/MENU.png"/>
          </ion-card>
          <ion-list id="menulist">
            <ion-menu-toggle
              auto-hide="false"
              v-for="(p, i) in appPages.slice(0, 6)"
              :key="i"
            >
              <ion-item
                @click="selectedIndex = i"
                router-direction="root"
                :router-link="p.url"
                lines="none"
                detail="false"
                class="hydrated menuitem"
                :class="{ selected: selectedIndex === i }"
              >
                <ion-icon slot="start" :md="p.mdIcon"></ion-icon>
                <ion-label id="menu-list-item">{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>

          <div class="loginwrapper">
            <ion-button
              class="loginbutton"
              v-show="!isLogin"
              expand="block"
              fill="solid"
              @click="login"
              >Log In</ion-button
            >
            <ion-button
              class="loginbutton"
              v-show="isLogin"
              expand="block"
              fill="solid"
              @click="logout"
              >Log Out</ion-button
            >
          </div>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </IonSplitPane>
  </IonApp>
</template>

<script>
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonSplitPane,
  IonButton,
  menuController,
  IonCard,
  IonList,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import {
  personCircleSharp,
  carSportSharp,
  keySharp,
  lockOpenSharp,
  speedometerSharp,
  informationCircleSharp,
  callSharp,
} from "ionicons/icons";
import router from "./router";
// import { Storage } from "@capacitor/core";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonMenu,
    IonMenuToggle,
    IonRouterOutlet,
    IonSplitPane,
    IonButton,
    IonCard,
    IonList,
  },
  setup() {
    const selectedIndex = ref(0);
    const appPages = [
      {
        title: "User Info",
        url: "/folder/AboutMe",
        mdIcon: personCircleSharp,
      },
      {
        title: "Exception Log",
        url: "/folder/RunningState",
        mdIcon: speedometerSharp,
      },
      {
        title: "Car Rental",
        url: "/folder/CarLenting",
        mdIcon: carSportSharp,
      },
      {
        title: "Using Key",
        url: "/folder/OpenAndClose",
        mdIcon: lockOpenSharp,
      },
      {
        title: "Share Key",
        url: "/folder/KeySharing",
        mdIcon: keySharp,
      },
      {
        title: "About Us",
        url: "/folder/AboutProject",
        mdIcon: informationCircleSharp,
      },
    ];

    const path = window.location.pathname.split("folder/")[1];

    if (path !== undefined) {
      selectedIndex.value = appPages.findIndex(
        (page) => page.url.split("folder/")[1] === path
      );
    }

    const route = useRoute();

    return {
      selectedIndex,
      appPages,
      personCircleSharp,
      carSportSharp,
      keySharp,
      lockOpenSharp,
      speedometerSharp,
      informationCircleSharp,
      callSharp,
      isSelected: (url) => (url === route.path ? "selected" : ""),
    };
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    async logout() {
      this.$store.dispatch("userLogin", false);
      this.login();
    },
    login() {
      router.replace({
        path: "/folder/login",
      });
      menuController.close();
    },
  },
});
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 10px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#main-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#main-list ion-list-header {
  font-size: x-large;
  font-weight: bolder;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}

div {
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
}

/* .list-card {
  margin: 10px 10px 0 -10px;
  box-shadow: none !important;
  border-radius: 0;
  border-top-right-radius: 1em;
  position: absolute;
  width: 95%;
  padding-bottom: 20px;
} */

#top-card {
  margin: 0;
  border-radius: 0 0 1em 1em;
  min-height: 24vh;
  position: relative;
  box-shadow: none;
}

.loginwrapper {
  width: 90%;
}
.loginbutton {
  --border-radius: 1em;
}
.menuitem {
  margin: 8px;
}
#menulist {
  margin: 10px;
}
#menu-logo{
  margin-left: 30%;
  margin-right: 10%;
  bottom: 20%;
  position: absolute;
  width: 60%;
}
#menu-list-item{
  font-size: 1.1rem;
}
</style>
