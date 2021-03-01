<template>
  <IonApp>
    <IonSplitPane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="main-list">
            <ion-list-header>智能汽车租赁</ion-list-header>
            <ion-note>Smart Key App</ion-note>
          </ion-list>

          <ion-list id="main-list">
            <ion-note>信息查看</ion-note>
            <ion-menu-toggle auto-hide="false" v-for="(p, i) in appPages.slice(0,2)" :key="i">
              <ion-item
                @click="selectedIndex = i"
                router-direction="root"
                :router-link="p.url"
                lines="none"
                detail="false"
                class="hydrated"
                :class="{ selected: selectedIndex === i }"
              >
                <ion-icon slot="start" :md="p.mdIcon"></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>

          <ion-list id="main-list">
            <ion-note>车辆租借</ion-note>
            <ion-menu-toggle auto-hide="false" v-for="(p, i) in appPages.slice(2,5)" :key="i">
              <ion-item
                @click="selectedIndex = i+2"
                router-direction="root"
                :router-link="p.url"
                lines="none"
                detail="false"
                class="hydrated"
                :class="{ selected: selectedIndex === i+2 }"
              >
                <ion-icon slot="start" :md="p.mdIcon"></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>

          <ion-list id="main-list">
            <ion-note>关于</ion-note>
            <ion-menu-toggle auto-hide="false" v-for="(p, i) in appPages.slice(5,)" :key="i">
              <ion-item
                @click="selectedIndex = i+5"
                router-direction="root"
                :router-link="p.url"
                lines="none"
                detail="false"
                class="hydrated"
                :class="{ selected: selectedIndex === i+5 }"
              >
                <ion-icon slot="start" :md="p.mdIcon"></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>

          <!-- <ion-list id="labels-list">
            <ion-list-header>Labels</ion-list-header>
            <ion-item v-for="(label, index) in labels" lines="none" :key="index">
              <ion-icon slot="start" :md="bookmarkSharp"></ion-icon>
              <ion-label>{{ label }}</ion-label>
            </ion-item>
          </ion-list> -->
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
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
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

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
    IonRouterOutlet,
    IonSplitPane,
  },
  setup() {
    const selectedIndex = ref(0);
    const appPages = [
      {
        title: "我的信息",
        url: "/folder/我的信息",
        mdIcon: personCircleSharp,
      },
      {
        title: "行驶状况",
        url: "/folder/行驶状况",
        mdIcon: speedometerSharp,
      },
      {
        title: "车辆租赁",
        url: "/folder/车辆租赁",
        mdIcon: carSportSharp,
      },
      {
        title: "开关车锁",
        url: "/folder/开关车锁",
        mdIcon: lockOpenSharp,
      },
      {
        title: "共享钥匙",
        url: "/folder/共享钥匙",
        mdIcon: keySharp,
      },
      {
        title: "项目信息",
        url: "/folder/项目信息",
        mdIcon: informationCircleSharp,
      },
      {
        title: "联系我们",
        url: "/folder/联系我们",
        mdIcon: callSharp,
      },
    ];
    const labels = [
      "Family",
      "Friends",
      "Notes",
      "Work",
      "Travel",
      "Reminders",
    ];

    const path = window.location.pathname.split("folder/")[1];

    if (path !== undefined) {
      selectedIndex.value = appPages.findIndex(
        (page) => encodeURIComponent(page.title) === path
      );
    }

    const route = useRoute();

    return {
      selectedIndex,
      appPages,
      labels,
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
});
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
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
  font-size: 22px;
  font-weight: 600;

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
</style>