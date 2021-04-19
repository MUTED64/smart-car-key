import { createStore } from "vuex";
// import app from "../main";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [createPersistedState()],
  state() {
    return {
      isLogin: false,
      userInfo: {
        userId: "1145141919",
        N: null,
        PWi: "123",
        M1:"123",
        M2:"123",
        treg:"",
        IDSNj: "123",
        RNUi: "123",
        S:"",
        KEYus: "",
        KEYusn : "",
        RNs: ""
      },
    };
  },
  getters: {
    //获取登录状态
    isLogin: (state) => state.isLogin,
    userInfo: (state) => state.userInfo
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
