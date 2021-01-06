<template>
  <div class="card-stack">
    Handkarten
    <v-row>
      <v-col
          v-for="i in handCards"
          :key="i" id="i">
        <img class="card handcard" src="img/cards/Cellar.png">
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "GameHandCards",
  computed: {
    ...mapGetters({
      handCards: 'getPlayerHand'
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