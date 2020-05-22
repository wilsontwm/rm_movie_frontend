<template>
    <v-list>
        <v-list-item v-if="!user" two-line class="px-0" @click="handleLogin">
            <v-list-item-action>
                <v-avatar class="ml-3" size="38" color="teal">
                    <v-icon dark>mdi-account-circle</v-icon>
                </v-avatar>
            </v-list-item-action>

            <v-list-item-content>
                <v-list-item-title class="body-2">Login here!</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="user" two-line class="px-0">
            <v-list-item-action>
                <v-avatar class="ml-3" size="38">
                    <img :src="`${user.photo}`" :alt="`${user.name}`" />
                </v-avatar>
            </v-list-item-action>

            <v-list-item-content>
                <v-list-item-title class="body-2">{{user.name}}</v-list-item-title>                
                <v-list-item-subtitle><v-btn x-small color="blue" dark @click="handleLogout">Logout</v-btn></v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: "Avatar",
    computed: {
      ...mapState('profileModule', {
        user: state => state.user
      }),
    },
    methods: {
      ...mapActions('profileModule', ['triggerLogin', 'cancelLogin', 'logout']),
      handleLogin() {
          this.triggerLogin();
      },
      handleLogout() {
          this.logout();
      }
    }
}
</script>