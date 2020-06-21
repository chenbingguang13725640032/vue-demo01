import Vue from "vue";
import App from "./App";
import "./config/rem";
import router from "./router/router"
import "./assets/global.css"
import store from "./store/index"
new Vue({
    el:"#app",
    render:h => h(App),
    router,
    store
})