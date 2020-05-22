<template>
  <div class="most-popular">
    <MovieContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import MovieContainer from '@/components/movies/MovieContainer.vue'

export default {
  name: 'MostPopular',
  components: {
    MovieContainer
  }
}
</script>
