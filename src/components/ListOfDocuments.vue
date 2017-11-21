<template>
    <div class='ListOfDocuments'>
        <v-layout class='document'>
            <v-flex xs12 sm6 offset-sm3>
                <li class='document' v-for='document in documents' :key='document.id'>
                    <v-card>
                        <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{ document.title }}</h3>
                            <div>{{ document.description }}</div>
                            <div>{{ document.name }} {{ document.lastname }}</div>
                            <div>{{ document.createdData }}</div>
                        </div>
                        </v-card-title>
                        <v-card-actions>
                        <v-btn flat color="orange">Explore</v-btn>
                        </v-card-actions>
                    </v-card>
                </li>
            </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
      documents: [
        {
          name: 'Nome de quem registrou',
          lastname: 'Sobrenome de quem registrou',
          cpf: 'Numero do cpf de quem registrou',
          title: 'Titulo 1 do documento 1',
          description: 'Description do documento 1',
          createdData: '10/20/2089',
          id: '12342'
        },
        {
          name: 'Nome de quem registrou2',
          lastname: 'Sobrenome de quem registrou2',
          cpf: 'Numero do cpf de quem registrou2',
          title: 'Titulo 2 do documento 2',
          description: 'Description do documento 2',
          createdData: '10/20/2089',
          id: '12982'
        },
        {
          name: 'Nome de quem registro3',
          lastname: 'Sobrenome de quem registrou3',
          cpf: 'Numero do cpf de quem registrou3',
          title: 'Titulo 3 do documento 3',
          description: 'Description do documento 3',
          createdData: '10/20/2089',
          id: '12909'
        }
      ]
    }
  }
}
</script>
<style scoped>
  .ListOfDocuments {
      margin-top: 2px;
      margin-bottom: 2px;
  }
  .ListOfDocuments li {
      list-style: none;
  }
  .document {
    margin-top: 4px;
    margin-bottom: 4px;
  }
</style>
