<template>
    <div class='FormDocument'>
        <v-form @submit.prevent='onRegisterNewDocument'>
            <v-card color="grey lighten-4" flat>
                <v-card-text>
                    <v-container fluid>
                        <v-layout row>
                            <v-flex>
                                <h2>Novo Documento</h2>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs4 sm4>
                                <v-text-field
                                name="name"
                                label="Nome"
                                id='name'
                                v-model='name'
                                required
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs4 sm4>
                                <v-text-field
                                name="lastname"
                                label="Sobrenome"
                                id='lastname'
                                v-model='lastname'
                                required
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs4 sm4>
                                <v-text-field
                                name="cpf"
                                label="CPF"
                                id='cpf'
                                v-model='cpf'
                                required
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-text-field
                        name='email'
                        label="E-mail"
                        id='email'
                        type='email'
                        v-model="email"
                        required
                        ></v-text-field>
                        </v-layout row>
                        <v-layout row>
                        <v-flex xs12>
                            <v-text-field
                            name="title"
                            label="Título do documento"
                            v-model='title'
                            required
                            ></v-text-field>
                        </v-flex>
                        </v-layout>
                        <v-layout row>
                        <v-flex xs12>
                            <v-text-field
                            name="description"
                            label="Descrição"
                            v-model='description'
                            multi-line
                            required
                            ></v-text-field>
                        </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                            <v-flex xs8>
                                <v-checkbox
                                label="Do you agree?"
                                v-model="agree"
                                error-messages="checkboxErrors"
                                change="$v.checkbox.$touch()"
                                blur="$v.checkbox.$touch()"
                                required
                                ></v-checkbox>
                            </v-flex>
                            <v-flex>
                                <v-btn @click='onRegisterNewDocument()'>Gravar
                                    <v-icon dark right>check_circle</v-icon>
                                </v-btn>
                                <v-btn @click="onClear()">Limpar</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      lastname: '',
      cpf: '',
      email: '',
      title: '',
      description: '',
      agree: ''
    }
  },
  computed: {
    formIsValid () {
      return this.name !== '' &&
        this.lastname !== '' &&
        this.cpf !== '' &&
        this.email !== '' &&
        this.title !== '' &&
        this.description !== '' &&
        this.agree !== ''
    }
  },
  methods: {
    onRegisterNewDocument () {
      if (!this.formIsValid) return
      const newDocumentData = {
        name: this.name,
        lastname: this.lastname,
        cpf: this.cpf,
        email: this.email,
        title: this.title,
        description: this.description,
        agree: this.agree
      }
      console.log(newDocumentData)
      this.$store.dispatch('newDocument', newDocumentData)
    },
    onClear () {
      this.name = ''
      this.lastname = ''
      this.cpf = ''
      this.email = ''
      this.title = ''
      this.description = ''
      this.agree = ''
      this.date = new Date()
    }
  }
}
</script>

<style scoped>
    .FormDocument {
        margin-top: 10px;
    }
</style>