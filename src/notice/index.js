import Vue from "vue";
const NoticeConstructor = Vue.extend(require("./notice.vue").default);

let nId = 1;
const Notice = (option) => {
  let id = "notice-" + nId++;

  const NoticeInstance = new NoticeConstructor({
    data: {
      content: option.message,
      type: option.type,
    },
  }); // 实例化一个带有content内容的Notice
  NoticeInstance.id = id;
  NoticeInstance.$mount(); // 挂载但是并未插入dom，是一个完整的Vue实例
  NoticeInstance.visible = true;
  let noticeDom = NoticeInstance.$el;
  document.body.appendChild(noticeDom); // 将dom插入body
  NoticeInstance.$el.style.zIndex = nId + 10000;
  return NoticeInstance;
};

export default {
  install: (Vue) => {
    Vue.prototype.$notice = Notice;
  },
};
