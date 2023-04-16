export const siteData = JSON.parse("{\"base\":\"/knownledge/\",\"lang\":\"en-US\",\"title\":\"个人知识库\",\"description\":\"Analysis vue.js deeply\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/logo.png\"}],[\"link\",{\"rel\":\"manifest\",\"href\":\"/manifest.json\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#3eaf7c\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-capable\",\"content\":\"yes\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
