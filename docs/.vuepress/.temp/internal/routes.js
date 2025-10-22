export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/usr/local/vuepress/vuepress-starter/weiyi-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/usr/local/vuepress/vuepress-starter/weiyi-docs/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/mode.html", { loader: () => import(/* webpackChunkName: "mode.html" */"/usr/local/vuepress/vuepress-starter/weiyi-docs/docs/.vuepress/.temp/pages/mode.html.js"), meta: {"title":"Js介绍"} }],
  ["/en/", { loader: () => import(/* webpackChunkName: "en_index.html" */"/usr/local/vuepress/vuepress-starter/weiyi-docs/docs/.vuepress/.temp/pages/en/index.html.js"), meta: {"title":"Home"} }],
  ["/en/about.html", { loader: () => import(/* webpackChunkName: "en_about.html" */"/usr/local/vuepress/vuepress-starter/weiyi-docs/docs/.vuepress/.temp/pages/en/about.html.js"), meta: {"title":"About"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/usr/local/vuepress/vuepress-starter/weiyi-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
