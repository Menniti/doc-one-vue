'use strict'

import axios from 'axios'

export default {
  state: {
    documents: []
  },
  mutations: {
    newDocument (state, payload) {
      state.documents.push(payload)
    },
    getAllDocumentsDatabase (state, payload) {
      console.log('payload mutation')
      console.log(payload)
      state.documents = payload
    }
  },
  actions: {
    newDocument ({commit, getters}, payload) {
      const documentData = {
        name: payload.name,
        lastname: payload.lastname,
        cpf: payload.cpf,
        email: payload.email,
        title: payload.title,
        description: payload.description,
        agree: payload.agree
      }
      axios.post('http://0.0.0.0:5000/documents/', documentData)
        .then(
          this.commit('newDocument', documentData)
        )
        .catch(error => {
          console.log(error)
        })
    },
    getAllDocumentsDatabase ({commit}) {
      axios.get('http://0.0.0.0:5000/documents/')
        .then((returnedValue) => {
          console.log('Data Action')
          console.log(returnedValue.data)
          this.commit('getAllDocumentsDatabase', returnedValue.data)
        })
        .catch(error => {
          console.log(error)
          return {message: 'Fail'}
        })
    }
  },
  getters: {
    loadDocuments (state) {
      return state.documents
    },
    SingleDocument (state, getters) {
      return (documentId) => {
        return getters.loadDocuments.find(document => {
          return document.id === documentId
        })
      }
    }
  }
}
