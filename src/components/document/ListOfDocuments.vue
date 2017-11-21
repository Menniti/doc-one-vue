<template>
    <div class='ListOfDocuments'>
        <v-layout class='document'>
            <v-flex xs12 sm6 offset-sm3>
                <li class='document' v-for='document in listOfDocuments' :key='document.id'>
                    <v-card>
                        <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{ document.title }}</h3>
                            <div>{{ document.name }} {{ document.lastname }}</div>
                            <div>{{ document.createdData }}</div>
                            <div>{{ document.description }}</div>
                        </div>
                        </v-card-title>
                        <v-card-actions>
                          <v-btn flat color="orange"  :to="'/list-of-documents/' + document.id">Explore</v-btn>
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
    return {}
  },
  computed: {
    listOfDocuments () {
      return this.$store.getters.loadDocuments
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
