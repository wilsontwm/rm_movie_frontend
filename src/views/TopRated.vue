<template>
  <div class="top-rated">
    <MovieContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import MovieContainer from '@/components/movies/MovieContainer.vue'

export default {
  name: 'TopRated',
  components: {
    MovieContainer
  }
}
</script>
