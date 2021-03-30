import { createStore } from "vuex";
// import app from "../main";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [createPersistedState()],
  state() {
    return {
      isLogin: false,
      userInfo: {
        userId: "",
        N: null,
        PWi: "",
        M1:"",
        M2:"",
        RNUi: "",
        KEYus: "",
        KEYusn : "",
        RNs: ""
      },
    };
  },
  getters: {
    //获取登录状态
    isLogin: (state) => state.isLogin,
  },

  // 设置属性状态
  mutations: {
    //保存登录状态
    userStatus(state, flag) {
      state.isLogin = flag;
    },
  },
  modules: {},
  // 应用mutations
  actions: {
    //获取登录状态
    userLogin({ commit }, flag) {
      commit("userStatus", flag);
    },
  },
});

export default store;
