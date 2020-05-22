<template>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
      <v-container fill-height fluid>
          <v-row align="center"
              justify="center">
              <v-col align="center">
                  <v-progress-circular
                  :size="75"
                  color="primary"                
                  indeterminate
                  ></v-progress-circular>
              </v-col>
          </v-row>
          <v-row align="center"
              justify="center">
              <v-col align="center">
                  <v-card-text>Please wait...</v-card-text>
              </v-col>
          </v-row>
      </v-container>
      </v-card>
  </v-dialog>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: "LoginLoader",
    computed: {
      ...mapState('profileModule', {
        dialog: state => state.isLoggingIn
      }),
    }
}
</script>