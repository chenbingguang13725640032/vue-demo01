import vue from "vue";
import VueRouter from "vue-router";
vue.use(VueRouter);

import home from "../pages/home/home.vue";
import items from "../pages/items/items.vue";
import result from "../pages/result/result.vue"


let router = new VueRouter({
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/home", component: home },
        { path: "/items", component: items },
        { path: "/result", component: result }
    ]
})

export default router;