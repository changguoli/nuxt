import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _77db8db6 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _7be68b2a = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _7fc2db5d = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _73a0489d = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _dcae48a2 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _6c0cb3f9 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _5a6a8bea = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _77db8db6,
    children: [{
      path: "",
      component: _7be68b2a,
      name: "home"
    }, {
      path: "/login",
      component: _7fc2db5d,
      name: "login"
    }, {
      path: "/register",
      component: _7fc2db5d,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _73a0489d,
      name: "profile"
    }, {
      path: "/settings",
      component: _dcae48a2,
      name: "settings"
    }, {
      path: "/editor",
      component: _6c0cb3f9,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _5a6a8bea,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
