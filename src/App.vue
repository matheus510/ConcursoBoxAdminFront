<template>
  <div>
    <div v-if="authorized">
      <v-app>
        <v-navigation-drawer
          persistent
          :mini-variant="miniVariant"
          :clipped="clipped"
          v-model="drawer"
          enable-resize-watcher
          fixed
          app
        >
          <v-list>
            <v-list-tile
              value="true"
              v-for="(item, i) in items"
              :key="i">
              <v-list-tile-action>
                <v-icon v-html="item.icon"></v-icon>
              </v-list-tile-action>
              <router-link :to="{ name: item.routeName }" tag="div">
                <v-list-tile-content>
                  <v-list-tile-title v-text="item.title"></v-list-tile-title>
                </v-list-tile-content>
              </router-link>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
        <v-toolbar
          app
          :clipped-left="clipped"
        >
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <v-toolbar-title v-text="title"></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.stop="rightDrawer = !rightDrawer">
            <v-icon>menu</v-icon>
          </v-btn>
        </v-toolbar>
        <v-content>
          <v-slide-y-transition mode="out-in">
          <router-view/>
          </v-slide-y-transition>
        </v-content>
        <v-navigation-drawer
          temporary
          :right="right"
          v-model="rightDrawer"
          fixed
          app
        >
          <v-list>
            <v-list-tile @click="right = !right">
              <v-list-tile-action>
                <v-icon>compare_arrows</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
        <v-footer :fixed="fixed" app>
          <span>&copy; 2017</span>
        </v-footer>
      </v-app>
    </div>
    <div v-if="!authorized">
        <v-app>
        <v-content>
          <v-slide-y-transition mode="out-in">
            <v-card hover="" style="background:white">
              <v-card-title class="black--text">
                <div class="text-xs-center">Login</div>
              </v-card-title>
              <v-card-text class="pt-4">
                <v-text-field
                  label="Login"
                  v-model="nome"
                  required
                ></v-text-field>
                <v-text-field
                  label="Senha"
                  v-model="senha"
                  type="password"
                  required
                ></v-text-field>
                <v-btn @click="submit()">login</v-btn>
                <v-btn @click="createUser()">create</v-btn>
              </v-card-text>
            </v-card>
          </v-slide-y-transition>
        </v-content>

        <v-footer :fixed="fixed" app>
          <span>&copy; 2017</span>
        </v-footer>
      </v-app>
    </div>
  </div>
</template>

<script>
import sha512 from 'js-sha512'

export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Home',
        routeName: 'Home'
      },
      {
        icon: 'stars',
        title: 'Concurso',
        routeName: 'Concurso'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'ConcursoBox',
      nome: '',
      senha: ''
    }
  },
  computed: {
    authorized () {
      let userInfo = this.$store.store.getters['usuario/GET_USER_INFO']
      return userInfo.authorized
    },
    token () {
      return `${this.nome}@${this.encryptedUsuarioSenha}`
    },
    encryptedUsuarioSenha () {
      return sha512(this.senha)
    }
  },
  methods: {
    submit () {
      this.$store.store.dispatch('usuario/SET_TOKEN', {
        token: this.token
      })
    },
    createUser () {
      this.$store.store.dispatch('usuario/CREATE_USER', {
        token: this.token
      }).then(
        console.log('autorizado')
      )
    }
  },
  beforeCreate () {

  },
  name: 'App'
}
</script>
