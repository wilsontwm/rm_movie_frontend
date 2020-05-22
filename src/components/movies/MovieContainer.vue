<template>
    <div class="movie-container">
        <v-row>
            <v-col class="headline-container">
                <h1 class="movie-headline"><span>{{title}}</span></h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col sm="3" md="2">
                <MovieFilter />
            </v-col>
            <v-col sm="9" md="10">
                <MovieList />
            </v-col>
        </v-row>
    </div>
</template>
<script>
import MovieFilter from '@/components/movies/MovieFilter.vue'
import MovieList from '@/components/movies/MovieList.vue'

export default {
    name: "MovieContainer",
    components: {
        MovieFilter,
        MovieList
    },
    data: () => {
        return {
            title: ""
        }
    },
    created() {
        switch(this.$route.path) {
            case "/":
                this.title = "Now Playing";
                break;
            case "/upcoming":
                this.title = "Upcoming";
                break;
            case "/mostpopular":
                this.title = "Most Popular";
                break;
            case "/toprated":
                this.title = "Top Rated";
                break;
            default:
                this.title = "Now Playing";
                break;
        }        
    }
}
</script>
<style lang="scss" scoped>
.headline-container {
    text-align: center;
}

$highlight: rgb(113, 230, 148);

$headings-margin-bottom: .5rem;
$headings-font-family: 'Poppins', sans-serif;
$headings-font-weight: 700;
$headings-line-height: 1.2;
$headings-color: #333;

$h1-font-size: 2.5rem; 

$display1-size: 48px;
$display1-weight: 700;
$display-line-height: 1.2;


.movie-headline span {
    background-image: linear-gradient(180deg,transparent 75%,$highlight 0);
    background-size: 100% 90%;
    background-repeat: no-repeat;
    text-decoration: none;
}

.movie-headline {
    font-size: $display1-size;
    font-family: $headings-font-family;
    font-weight: $display1-weight;
    line-height: $display-line-height;
    margin-bottom: $headings-margin-bottom;    
    color: $headings-color;
}

</style>