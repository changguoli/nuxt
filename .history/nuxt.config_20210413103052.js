/**
 * Nuxt.js 配置文件
 */
import cheerio from 'cheerio'
module.exports = {
    hooks: {
        'render:route': (url, result) => {
            console.log('1111',url, '22222', result)
               this.$ = cheerio.load(result.html,{decodeEntities: false});
               this.$(`meta`).removeAttr('data-n-head');
               result.html = this.$.html()
           }
       },
    head: {
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'hahah', content: 'width=device-width, initial-scale=1222' }
        ]
      },
    router: {
        // 自定义路由表规则
        extendRoutes(routes, resolve) {
            // 清除 Nust.js 基于 pages 目录默认生成的路由表规则
            routes.splice(0)
            routes.push(... [
                {
                    path: '/',
                    component: resolve(__dirname, 'pages/layout/'),
                    children: [
                        {
                            path: '', //默认子路由
                            name: 'home',
                            component: resolve(__dirname, 'pages/home/'),
                        },
                        {
                            path: '/login',
                            name: 'login',
                            component: resolve(__dirname, 'pages/login/'),
                        },
                        {
                            path: '/register',
                            name: 'register',
                            component: resolve(__dirname, 'pages/login/'),
                        },
                        {
                            path: '/profile/:username',
                            name: 'profile',
                            component: resolve(__dirname, 'pages/profile/'),
                        },
                        {
                            path: '/settings',
                            name: 'settings',
                            component: resolve(__dirname, 'pages/settings/'),
                        },
                        {
                            path: '/editor',
                            name: 'editor',
                            component: resolve(__dirname, 'pages/editor/'),
                        },
                        {
                            path: '/article/:slug',
                            name: 'article',
                            component: resolve(__dirname, 'pages/article/'),
                        }
                    ]
                }
            ])
        }
      }

}