// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

// components

import Home from './components/Home'
import FormDocument from './components/FormDocument'
import ListOfDocuments from './components/ListOfDocuments'

// --------
import App from './App'
import router from './router'

Vue.component('app-home', Home)
Vue.component('app-form-document', FormDocument)
Vue.component('app-list-of-documents', ListOfDocuments)

Vue.use(Vuetify, { theme: {
  primary: '#ee44aa',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
