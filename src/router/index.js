import Vue from "vue"

import VueRouter from "vue-router"
import Home from "@/views/home"
import Diskusi from '@/views/diskusi'
import About from "@/views/about"
import Detail from '@/views/detail'

Vue.use(VueRouter)


// pembuatan router

const router = new VueRouter({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/About',
        name: 'About',
        component: About
    },
    {
        path: '/Diskusi',
        name: 'diskusi',
        component: Diskusi
    },
    {
        path: '/Detail',
        name: 'detail-diskusi',
        component: Detail
    },

    ],
    mode: 'history'
})
export default router