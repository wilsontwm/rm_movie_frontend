<template>
    <div class="movie-list">
        <v-row> 
            <Movie v-for="movie in filteredMovies" :key="movie.id" :item="movie" />
            <MovieLoader v-if="isLoading" />
            <MovieLoader v-if="isLoading" />
        </v-row>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import Movie from '@/components/movies/Movie.vue'
import MovieLoader from '@/components/movies/MovieLoader.vue'

export default {
    name: "MovieList",
    components: {
        Movie, MovieLoader
    },
    data: () => {
        return {
            search: "",
            isLoading: false,
            page: 0,
            movies: []
        }
    },
    computed: {
        ...mapState('moviesModule', {
            genres: state => state.genres,
            selectedGenresID: state => state.selectedGenresID
        }),
        filteredMovies() {
            if(this.selectedGenresID.length > 0 && this.selectedGenresID.length != this.genres.length) {
                let filtered = this.movies.filter(movie => {
                    // Check if the genre of the movie is in the selected
                    if(movie.genre_ids == undefined || movie.genre_ids.length ==0) return false;

                    const intersected = this.selectedGenresID.filter(value => movie.genre_ids.indexOf(value) !== -1);
                    return intersected.length > 0;
                });

                return filtered;
            }
            return this.movies;
        }
    },
    methods: {
        ...mapActions('moviesModule', ['getMovies']),
        async handleSearch(e) {
            if(!this.isLoading){
                this.isLoading = true;
                
                let data = {
                    search: this.search,
                    page: this.page + 1,
                }
                const response = await this.getMovies(data);
                if(response.page != undefined) {
                    this.page = response.page;
                }
                if(response.results != undefined) {
                    this.movies = this.movies.concat(response.results);
                }

                this.isLoading = false;
            }          
      },
    },
    created() {
        switch(this.$route.path) {
            case "/":
                this.search = "nowplaying";
                break;
            case "/upcoming":
                this.search = "upcoming";
                break;
            case "/mostpopular":
                this.search = "mostpopular";
                break;
            case "/toprated":
                this.search = "toprated";
                break;
            default:
                this.search = "nowplaying";
                break;
        }

        this.handleSearch();
    },
    mounted() {
        window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow) {        
            this.handleSearch();
        }
        };
    },
}
</script>
<style scoped>

</style>