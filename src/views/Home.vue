<template>
  <div class="home">
    <MovieContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import MovieContainer from '@/components/movies/MovieContainer.vue'

export default {
  name: 'Home',
  components: {
    MovieContainer
  }
}
</script>
