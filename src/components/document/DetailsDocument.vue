<template>
    <div class='DetailsDocument'>
        <v-card color="grey lighten-4" flat>
          <v-btn to='/list-of-documents'>
            <v-icon>keyboard_return</v-icon>
          </v-btn>
            <v-card-text>
                <v-container fluid>
                    <v-layout row>
                        <v-flex>
                            <h2>{{document.name}} {{document.lastname}}</h2>
                        </v-flex>
                        <v-flex>
                            <h2>{{document.email}}</h2>                            
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex>
                            <h2>{{document.title}}</h2>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm12>
                            <h4>
                              {{document.description}}
                            </h4>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['_id'],
  computed: {
    document () {
      return this.$store.getters.SingleDocument(this.$route.params._id)
    }
  },
  methods: {
  }
}
</script>

<style scoped>
    .DetailsDocument {
        margin-top: 10px;
    }
</style>