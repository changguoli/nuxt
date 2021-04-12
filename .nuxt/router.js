import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bdff0e0c = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _7b3ba6af = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _271d10ce = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _6f18c5d9 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _054005f3 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _d59cc186 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _55e30926 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
    component: _bdff0e0c,
    children: [{
      path: "",
      component: _7b3ba6af,
      name: "home"
    }, {
      path: "/login",
      component: _271d10ce,
      name: "login"
    }, {
      path: "/register",
      component: _271d10ce,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _6f18c5d9,
      name: "profile"
    }, {
      path: "/settings",
      component: _054005f3,
      name: "settings"
    }, {
      path: "/editor",
      component: _d59cc186,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _55e30926,
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
