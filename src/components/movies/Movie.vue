<template>
    <v-col cols="12" md="3" sm="6">
        <v-card class="mx-auto">
            <v-img height="350px" :src="picture"></v-img>

            <v-card-title class="font-weight-light">
            {{ item.title }}
            </v-card-title>

            <v-card-subtitle class="caption">
                <v-icon small>mdi-clock-outline</v-icon> {{ item.release_date }}
            </v-card-subtitle>
            <v-card-text>
                <v-chip v-for="(ge, i) in movieGenres" :key="i" x-small class="mr-1">{{ ge.name }}</v-chip>
            </v-card-text>
            <v-card-actions>

                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <span v-on="on"> 
                            <v-icon color="red" small>mdi-heart-outline</v-icon>
                            <span class="ml-1 overline">{{ item.popularity }}</span>
                        </span>
                    </template>
                    <span>Popularity</span>
                </v-tooltip> 

                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <span v-on="on" class="ml-2">
                            <v-icon color="orange" small>mdi-thumb-up-outline</v-icon>
                            <span class="ml-1 overline">{{ item.vote_average }}</span>
                        </span>
                    </template>
                    <span>Vote</span>
                </v-tooltip>  

                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <span v-on="on" class="ml-2">
                            <v-icon color="green" small>mdi-account-multiple</v-icon>
                            <span class="ml-1 overline">{{ item.vote_count }}</span>
                        </span>
                    </template>
                    <span>Vote Count</span>
                </v-tooltip>              
            </v-card-actions>
        </v-card>
    </v-col>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: "Movie",
    props: ["item"],
    computed: {        
        ...mapState('moviesModule', {
            genres: state => state.genres
        }),
        picture() {
            if(this.item.poster_path != null) {
                return "https://image.tmdb.org/t/p/w500" + this.item.poster_path;
            }

            return require('@/assets/images/noimage.png');
        },
        movieGenres() {
            var results = this.genres.filter(obj => {
                return this.item.genre_ids != undefined && this.item.genre_ids.indexOf(obj.id) !== -1;
            });
            return results;
        }
    }
}
</script>
<style scoped>

</style>