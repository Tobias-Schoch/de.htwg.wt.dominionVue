<template>
  <div class="main">
    <div class="playerCount">
      <Player></Player>
    </div>
    <div class="playerNames">
      <PlayerName></PlayerName>
    </div>
  </div>
</template>

<script>

import Player from "@/components/Player";
import PlayerName from "@/components/PlayerName";
export default {
  name: "GameView",
  components: {PlayerName, Player}

}
</script>

<style scoped>

</style>