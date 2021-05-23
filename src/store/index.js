import { createStore } from "vuex";
// import app from "../main";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [createPersistedState()],
  state() {
    return {
      isLogin: true,
      userInfo: {
        userId: "11451419198",
        N: null,
        PWi: "6b15b931b44477815b8f965e707a83c70773fe24fc8da5ffae5976ea294aa11f",
        M1:"7265f928f1b46af1142d0d625cd3ea066b37bbb2f049e5ab69c6487765d99e1b",
        M2:"8171b37fe0f445720c6eb91725a700c163ec13ac5577d52c688f54453222006d",
        treg:"",
        IDSNj: "1",
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
    userinfo(state, attribute, string){
      state.userInfo[attribute] = string;
    }
  },
  modules: {},
  // 应用mutations
  actions: {
    //获取登录状态
    userLogin({ commit }, flag) {
      commit("userStatus", flag);
    },
    userinfo({ commit },attribute,string){
      commit("userinfo",attribute,string);
    }
  },
});

export default store;
