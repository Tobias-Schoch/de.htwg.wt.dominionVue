<template>
  <div class="main">
    <div class="playerCount">
      <Player></Player>
    </div>
    <div class="playerNames">
      <PlayerName></PlayerName>
    </div>
    <div class="gameInfo">
      <GameInfo></GameInfo>
    </div>
    <div class="gamePlayingCards">
      <GamePlayingCards></GamePlayingCards>
    </div>
    <div class="gameHandCards">
      <GameHandCards></GameHandCards>
    </div>
  </div>
</template>

<script>

import Player from "@/components/Player";
import PlayerName from "@/components/PlayerName";
import GameInfo from "@/components/GameInfo";
import GamePlayingCards from "@/components/GamePlayingCards";
import GameHandCards from "@/components/GameHandCards";
export default {
  name: "GameView",
  components: {GameHandCards, GamePlayingCards, GameInfo, PlayerName, Player},
  methods: {
    send() {
      var kek = this.$store.getters.getClientId;
      console.log(kek);
    }
  }
}
</script>
<style scoped>

</style>