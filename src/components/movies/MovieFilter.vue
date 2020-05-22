<template>
    <div class="movie-filter">
        <div class="movie-filter-title">FILTER</div>
        <v-select
            v-model="selectedGenres"
            :items="genres"
            item-text="name"
            item-value="id"
            outlined
            label="Genre"
            multiple
            hint="All movies will not be filtered if none selected"
            persistent-hint
          >
            <template v-slot:prepend-item>
              <v-list-item
                ripple
                @click="toggleSelection"
              >
                <v-list-item-action>
                  <v-icon>{{ icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Select All</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider class="mt-2"></v-divider>
            </template>
            <template v-slot:selection="{ item, index }">
              <v-chip v-if="isAllSelected && index === (genres.length - 1)">
                <span>All</span>
              </v-chip>
              <v-chip v-if="!isAllSelected && index < 2">
                <span>{{ item.name }}</span>
              </v-chip>
              <span
                v-if="!isAllSelected && index === 2"
                class="grey--text caption"
              >(+{{ selectedGenres.length - 2 }} others)</span>
            </template>
        </v-select>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: "MovieFilter",
    computed: {
      ...mapState('moviesModule', {
        genres: state => state.genres
      }),
      isAllSelected () {
        return this.selectedGenres.length === this.genres.length && this.genres.length > 0;
      },
      isSomeSelected () {
        return this.selectedGenres.length > 0 && !this.isAllSelected && this.genres.length > 0;
      },
      icon () {
        if (this.isAllSelected) return 'mdi-close-box'
        if (this.isSomeSelected) return 'mdi-minus-box'
        return 'mdi-checkbox-blank-outline';
      },
    },
    methods: {
      ...mapActions('moviesModule', ['getGenres', 'selectGenres']),
      toggleSelection() {
          this.$nextTick(() => {
            if (this.isAllSelected) {
                this.selectedGenres = [];
            } else {
                this.selectedGenres = this.genres.slice();
            }
          })
      }
    },
    created() {
      // Get all the genres from the API
      if(this.genres.length == 0) {
          this.getGenres();
      }
      
      // Reset the selection
      this.selectGenres({genres: []});
    },
    data: () => {
      return {
          selectedGenres: [],
      }
    },
    watch: {
      selectedGenres: function (val) {
        this.selectGenres({genres: val});
      },
    }
}
</script>
<style scoped>
.movie-filter-title {
    margin-bottom: 12px;
    color: #666;
    font-weight: 300;
    font-size: 16px;
}
</style>