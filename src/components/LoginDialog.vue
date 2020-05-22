<template>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Login</v-card-title>

        <v-card-text>
            <v-row class="mt-4">
                <v-btn large color="error" width="100%" @click="loginWithGoogle"><v-icon class="mr-2">mdi-google</v-icon>Login with Google</v-btn>
            </v-row>
            <v-row class="mt-4">
                <v-btn large color="primary" width="100%" @click="loginWithFacebook"><v-icon class="mr-2">mdi-facebook</v-icon>Login with Facebook</v-btn>
            </v-row>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="cancelLogin"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: "LoginDialog",
    computed: {
      ...mapState('profileModule', {
        dialog: state => state.triggerLogin
      }),
    },
    methods: {
      ...mapActions('profileModule', ['login', 'cancelLogin']),
      loginWithGoogle() {
          this.login({provider: 'google'});
      },
      loginWithFacebook() {
          this.login({provider: 'facebook'});
      }
    }
}
</script>