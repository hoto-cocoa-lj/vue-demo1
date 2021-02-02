import $ from 'jquery'

//import Vue from 'vue/dist/vue.js'
//import Vue from 'node_modules/vue/dist/vue.js'
import Vue from 'vue'

class P {
    static i = {user1name: 'a', age: 22}
}


$(function () {
    console.log($('.hello'));
    console.log(P.i);
    console.log(Vue)
})
export default P.i
export var v1='good'
export function f1(a){return v1+a}