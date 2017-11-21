import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FormDocument from '@/components/FormDocument'
import ListOfDocuments from '@/components/ListOfDocuments'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/form-document',
      name: 'FormDocument',
      component: FormDocument
    },
    {
      path: '/list-of-documents',
      name: 'ListOfDocuments',
      component: ListOfDocuments
    }
  ],
  mode: 'history'
})
