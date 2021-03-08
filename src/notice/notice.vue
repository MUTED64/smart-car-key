<template>
  <transition name="message-fade">
    <div :class="['message', 'notice-'+type]" v-show="visible">
      <i :class="'el-icon-'+type"></i>
      <div :class="['content', 'content-'+type]">{{content}}</div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      content: '',
      duration: 1000,
      visible: false,
      type: 'info',//'success','warning','error'
      hasClose: false,
      noticeTimer: null,
    }
  },
  mounted () {
    this.close()
  },
  methods: {
    close () {
      setTimeout(() => {
        this.visible = false
        setTimeout(() => {
          this.$destroy(true)
          this.$el.parentNode.removeChild(this.$el)
        }, 800)
      }, this.duration);
    }
  }
}
</script>

<style scoped>
.message {
  position: absolute;
  top: 12vh;
  left: 50%;
  padding: 20px 30px;
  border-radius: 8px;
  background-color: #fff;
  transform: translateX(-50%);
  transition: opacity 0.3s, transform 0.4s;
  font-size: 30px;
}
.content {
  display: inline-block;
  margin-left: 12px;
  min-width: 380px;
}
/* .#2ed573 */
.notice-success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}
.el-icon-success, .content-success {
  color: #67c23a;
}
.notice-warning {
  background-color: #fdf6ec;
  border-color: #faecd8;
}
.notice-warning .content-warning {
  color: #e6a23c;
}
.notice-error {
  background-color: #fef0f0;
  border-color: #fde2e2;
}
.notice-error .content-error {
  color: #f56c6c;
}

.message-fade-enter,
.message-fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-12vh);
}
.message-fade-enter-to,
.message-fade-leave {
  opacity: 1;
  transform: translateX(-50%) translateY(0px);
}

 .message-fade-enter-active {
  transition: all .5s ease;
}
.message-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.2, 0.8, 1.0);
}


</style>