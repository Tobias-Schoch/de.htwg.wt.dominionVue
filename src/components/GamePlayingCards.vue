<template>
  <div class="card-stack">
    Gamekarten
    <v-row v-for="n in 2"
           :key="n">
      <v-col
          v-for="n in playingCardDecks"
          :key="n">
        <img class="card gamecard" src="img/cards/Cellar.png">
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "GamePlayingCards",
  computed: {
    ...mapGetters({
      playingCardDecks: 'getPlayingDecks'
    }),
    methods: {
      send(cardId) {
        this.$store.dispatch("request", cardId);
      }
    }
  }
}
</script>

<style scoped>

</style>