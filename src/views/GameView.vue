<template>
  <div class="main">
    <div class="playerCount">
      <Player></Player>
    </div>
    <div class="playerNames">
      <PlayerName></PlayerName>
    </div>
    <div class="gameboard">
      <Gameboard></Gameboard>
    </div>
  </div>
</template>

<script>

import Player from "@/components/Player";
import PlayerName from "@/components/PlayerName";
import Gameboard from "@/components/Gameboard";
export default {
  name: "GameView",
  components: {PlayerName, Player, Gameboard}

}
</script>

<style scoped>

</style>