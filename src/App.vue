<template>
  <v-app light>
    <v-navigation-drawer
      fixed
      :clipped="clipped"
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          value="true"
          :to='item.link'
        >
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app class='appToolbar'>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn flat :to="'/'" v-text="title"></v-btn>
      <v-spacer></v-spacer>
      <li v-for="item in items" :key="item.title">
          <v-btn flat :to='item.link'><v-icon>{{item.icon}}</v-icon>{{item.title}}</v-btn>
      </li>
    </v-toolbar>
     <router-view></router-view>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          {
            icon: 'assignment',
            title: 'Novo Documento',
            link: '/form-document'
          },
          {
            icon: 'list',
            title: 'Meus Documentos',
            link: '/list-of-documents'
          }
        ],
        title: 'DocBlock'
      }
    }
  }
</script>

<style>

.appToolbar li {
  list-style-type: none;
}

</style>