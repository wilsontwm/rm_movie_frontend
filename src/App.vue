<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <Avatar />
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          :to="item.url"
          link
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      color="green"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Revenue Monster Movie</span>
      </v-toolbar-title>
      
    </v-app-bar>
    <LoginDialog />
    <LoginLoader />
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Avatar from '@/components/Avatar.vue'
import LoginDialog from '@/components/LoginDialog.vue'
import LoginLoader from '@/components/LoginLoader.vue'

  export default {
    components: {
      Avatar, LoginDialog, LoginLoader
    },
    data: () => ({
      drawer: null,
      items: [        
        { icon: 'mdi-update', text: 'Now Playing', 'url': '/' },
        { icon: 'mdi-new-box', text: 'Upcoming', 'url': '/upcoming' },
        { icon: 'mdi-trending-up', text: 'Most Popular', 'url': '/mostpopular' },
        { icon: 'mdi-star', text: 'Top Rated', 'url': '/toprated' },
      ],
    }),
    created () {
      
    },
  }
</script>