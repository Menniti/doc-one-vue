<template>
    <div class='FormDocument'>
        <v-form>
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
                                name="input-7-1"
                                label="Nome"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs4 sm4>
                                <v-text-field
                                name="input-7-1"
                                label="Sobrenome"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs4 sm4>
                                <v-text-field
                                name="input-7-1"
                                label="CPF"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-text-field
                        label="E-mail"
                        v-model="email"
                        rules=""
                        required
                        ></v-text-field>
                        </v-layout row>
                        <v-layout row>
                        <v-flex xs12>
                            <v-text-field
                            name="input-7-3"
                            label="Título do documento"
                            ></v-text-field>
                        </v-flex>
                        </v-layout>
                        <v-layout row>
                        <v-flex xs12>
                            <v-text-field
                            name="input-7-4"
                            label="Descrição"
                            multi-line
                            ></v-text-field>
                        </v-flex>
                        </v-layout>

                        <v-layout row wrap>
                            <v-flex xs8>
                                <v-checkbox
                                label="Do you agree?"
                                v-model="checkbox"
                                :error-messages="checkboxErrors"
                                change="$v.checkbox.$touch()"
                                blur="$v.checkbox.$touch()"
                                required
                                ></v-checkbox>
                            </v-flex>
                            <v-flex>
                                <v-btn click="submit">Gravar
                                    <v-icon dark right>check_circle</v-icon>
                                </v-btn>
                                <v-btn click="clear">Limpar</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-form>
    </div>
</template>

<script>

</script>

<style scoped>
    .FormDocument {
        margin-top: 10px;
    }
</style>