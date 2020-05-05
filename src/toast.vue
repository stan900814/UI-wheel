<template>
  <div class="toast" ref="toast" :class="toastClass">
    <slot></slot>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>

<script>
  export default {
    name: "GuluToast",
    props: {
      autoClose: { //是否自动关闭
        type: Boolean,
        default: true
      },
      autoCloseDelay: {//自动关闭延时
        type: Number,
        default: 3
      },
      closeButton: { //是否有关闭按钮
        type: Object,
        default() {
          return {
            text: '关闭', callback: undefined //点击关闭触发回掉函数
          }
        }
      },
      position: { //toast出现的位置
        type: String,
        default: 'top',
        validator: (value) => {
          return ['top', 'bottom', 'middle'].includes(value)
        }
      }
    },
    computed: {
      toastClass() {
        return {
          [`position-${this.position}`]: true
        }
      }
    },
    mounted() {
      this.updateStyle()
      this.execAutoClose()
    },
    methods: {
      execAutoClose() {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoCloseDelay * 1000)
        }
      },
      updateStyle() { //获取高度
        this.$nextTick(() => {
          this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
        })
      },
      close() {
        this.$el.remove()
        this.$destroy()
      },
      onClickClose() {
        this.close()
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback(this)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @keyframes fade-in {
    0% {opacity: 0}
    100% {opacity: 1}
  }

  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgb(0, 0, 0, 0.75);
  .toast {
    font-size: $font-size;
    min-height: $toast-min-height;
    line-height: 1.8;
    background: $toast-bg;
    color: white;
    display: flex;
    align-items: center;
    border-radius: 4px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    padding: 8px 16px;
    position: fixed;

    &.position-top {
      animation: fade-in 1s;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    &.position-bottom {
      animation: fade-in 1s;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    &.position-middle {
      animation: fade-in 1s;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .line {
    height: 100%;
    border-left: 1px solid #666666;
    margin-left: 16px;
  }

  .close {
    padding-left: 16px;
    flex-shrink: 0;
  }
</style>