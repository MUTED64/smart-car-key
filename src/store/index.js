import { createStore } from "vuex";
// import app from "../main";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [createPersistedState()],
  state() {
    return {
      isLogin: true,
      userInfo: {
        userId: "1145141919",
        N: null,
        PWi: "1234567812345678123456781234567812345678123456781234567812345678",
        M1:"1234",
        M2:"1234567812345678123456781234567812345678123456781234567812345678",
        treg:"",
        IDSNj: "1234",
        RNUi: "1234",
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
