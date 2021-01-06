<template>
    <div class="main">
        <div class="playerCount">
            <Player></Player>
        </div>
        <div class="playerNames">
            <PlayerName></PlayerName>
        </div>
        <div class="gameinfo">
            <GameInfo></GameInfo>
        </div>
        <div class="gameplayingcards">
            <GamePlayingCards></GamePlayingCards>
        </div>
        <div class="gamehandcards">
            <GameHandCards></GameHandCards>
        </div>
    </div>
</template>

<script>

    import jQuery from "jquery";

    jQuery(document).ready(function ($) {

        $(".player").show();
        $(".playername").hide();
        $(".gameinfo").hide();
        $(".gameplayingcards").hide();
        $(".gamehandcards").hide();

        $(document).on('click', '.player-selection', function () {
            $(".player").hide();
            $(".playername").show();
            $(".gameinfo").hide();
            $(".gameplayingcards").hide();
            $(".gamehandcards").hide();
        });

        $(document).on('click', '.send-name', function () {
        });

    });

    import Player from "@/components/Player";
    import PlayerName from "@/components/PlayerName";
    import GameInfo from "@/components/GameInfo";
    import GamePlayingCards from "@/components/GamePlayingCards";
    import GameHandCards from "@/components/GameHandCards";

    export default {
        name: "GameView",
        components: {GameHandCards, GamePlayingCards, GameInfo, PlayerName, Player}
    }
</script>
<style scoped>

</style>