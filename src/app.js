import Vue from "vue"
import Button from "./button"
import Icon from "./icon"
import Buttongroup from "./button-group"
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Footer from './footer'
import Sider from './sider'
import Content from './content'
import Toast from './toast'
import plugin from "./plugin";

Vue.use(plugin)

Vue.component("g-button", Button)
Vue.component("g-icon", Icon)
Vue.component("g-button-group", Buttongroup)
Vue.component("g-input", Input)
Vue.component("g-row", Row)
Vue.component("g-col",Col)
Vue.component("g-layout",Layout)
Vue.component("g-header",Header)
Vue.component("g-sider",Sider)
Vue.component("g-footer",Footer)
Vue.component("g-content",Content)
Vue.component("g-toast",Toast)

new Vue({
  el: "#app",
  data: {
    loading1: false,
  },
  mounted(){
    this.$toast('测试toast',{
      autoClose: false,
      position:'middle',
      closeButton: {
        text:'测试',
        callback:()=>{console.log('我是callback');}
      }
    })
  },
  methods:{

  }
})

//单元测试
// const expect = chai.expect
// chai.use(spies)
// {
//   //测试按钮是否含有icon
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: "settings"
//     }
//   })
//   vm.$mount()
//   let use = vm.$el.querySelector("use")
//   expect(use.getAttribute("xlink:href")).to.eq("#i-settings")
//   vm.$el.remove()
//   vm.$destroy()
// }
// {
//   //测试按钮loading状态
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: "settings",
//       loading: true
//     }
//   })
//   vm.$mount() //button.$mount()
//   let use = vm.$el.querySelector("use")
//   expect(use.getAttribute("xlink:href")).to.eq("#i-loading")
//   vm.$el.remove()
//   vm.$destroy()
// }
// {
//   //测试SVG是否显示在正确位置
//   const div = document.createElement("div")
//   document.body.appendChild(div)
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: "settings"
//     }
//   })
//   vm.$mount(div)
//   let svg = vm.$el.querySelector("svg")
//   let { order } = window.getComputedStyle(svg)
//   expect(order).to.eq("1")
//   vm.$el.remove()
//   vm.$destroy()
// }
// {
//   //测试SVG是否显示在正确位置
//   const div = document.createElement("div")
//   document.body.appendChild(div)
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: "settings",
//       iconPosition: "right"
//     }
//   })
//   vm.$mount(div)
//   let svg = vm.$el.querySelector("svg")
//   let { order } = window.getComputedStyle(svg)
//   expect(order).to.eq("2")
//   vm.$el.remove()
//   vm.$destroy()
// }
// //click事件单元测试
// {
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: "settings"
//     }
//   })
//   vm.$mount()
//   let spy = chai.spy(function() {})
//   vm.$on("click", spy)
//   let button = vm.$el
//   button.click()
//   expect(spy).to.have.been.called()
// }
