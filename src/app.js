import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import Buttongroup from './button-group'
import chai from 'chai'
import spies from 'chai-spies'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group',Buttongroup)



new Vue({
    el: '#app',
    data: {
        loading1:false
    }
})

//单元测试
const expect = chai.expect
chai.use(spies)
{
    //测试按钮是否含有icon
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon:'settings'
        }
    })
    vm.$mount()
    let use = vm.$el.querySelector('use')
    expect(use.getAttribute('xlink:href')).to.eq('#i-settings')
    vm.$el.remove()
    vm.$destroy()
}
{
    //测试按钮loading状态
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading:true
        }
    })
    vm.$mount() //button.$mount()
    let use = vm.$el.querySelector('use')
    expect(use.getAttribute('xlink:href')).to.eq('#i-loading')
    vm.$el.remove()
    vm.$destroy()
}
{
    //测试SVG是否显示在正确位置
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings'
      }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}
{
    //测试SVG是否显示在正确位置
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
        icon: 'settings',
        iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}
//click事件单元测试
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon:'settings',
        }
    })
    vm.$mount()
    let spy = chai.spy(
        function(){}
    )
    vm.$on('click', spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
}