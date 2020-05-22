<template>
  <div class="upcoming">
    <MovieContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import MovieContainer from '@/components/movies/MovieContainer.vue'

export default {
  name: 'Upcoming',
  components: {
    MovieContainer
  }
}
</script>
