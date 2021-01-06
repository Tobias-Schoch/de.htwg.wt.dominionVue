<template>
  <div class="card-stack">
    <v-row>
      <v-col>
        <div class="info" id="playerName">Name: {{ pName }}</div>
        <div class="info" id="playerMoney">Money: {{ money }}</div>
        <div class="info" id="turn">Turn: {{ gameTurn }}</div>
        <div class="info" id="phase">Phase: {{ phase }}</div>
        <div class="info" id="playerActions">Actions: {{ actions }}</div>
        <div class="info" id="playerBuys">Buys: {{ buys }}</div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "GameInfo",
  computed: {
    ...mapGetters({
      pName: 'getPlayerName',
      money: 'getPlayerMoney',
      gameTurn: 'getTurn',
      phase: 'getControllerPhase',
      actions: 'getPlayerActions',
      buys: 'getPlayerBuys'
    })
  }
}
</script>

<style scoped>

</style>