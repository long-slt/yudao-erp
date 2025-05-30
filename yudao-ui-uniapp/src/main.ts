import { createSSRApp } from 'vue'
import App from './App.vue'
import store from './store'
import {
  routeInterceptor,
  requestInterceptor,
  prototypeInterceptor
} from './interceptors'
import './utils/mockExtend'
import 'virtual:uno.css'
import '@/style/index.scss'
import formCreateMobile from '@form-create/vant/src'
import install from '@form-create/vant/auto-import'
import 'vant/lib/index.css'

export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  app.use(routeInterceptor)
  app.use(requestInterceptor)
  app.use(prototypeInterceptor)
  // formcreate-vant
  formCreateMobile.use(install)
  app.use(formCreateMobile)
  return {
    app
  }
}
