import $ from 'jquery'
import '../css/1.css'
import '../css/1.less'
import '../css/1.scss'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css'
import b,{v1} from './b'
import login from "../vue/login.vue";
import Vue from 'vue'
import VueRouter from 'vue-router'
import routertest  from "../vue/routertest.vue";
import rt1 from "../vue/rt1.vue";
import rt2 from "../vue/rt2.vue";

Vue.use(VueRouter)
var router = new VueRouter({
    routes: [
        { path:'/r1',component:rt1},
        { path:'/r2',component:rt2},
    ]
})

var app=new Vue({
    el:'#app',
    components:{
        login:login,
        rt1,rt2,routertest,
    },
    router:router,

    // render:c=>c(routertest)
    // render:createElement=>createElement(routertest)
    // render(createElement) {return createElement(routertest)   }
})

console.error(JSON.stringify(b))        //{user1name: 'a', age: 22}
console.error(v1)           //good
let f=require('./b.js').f1
console.error(f(666))       //good666