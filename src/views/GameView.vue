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
            console.log($(".tui-instructions").html());
            if ($(".tui-instructions").html() === " Player 1 please enter your name: "
                || $(".tui-instructions").html() === " Player 2 please enter your name: "
                || $(".tui-instructions").html() === " Player 3 please enter your name: "
                || $(".tui-instructions").html() === " Player 4 please enter your name: "
                || $(".tui-instructions").html() === " Player 5 please enter your name: "
                || $(".tui-instructions").html() === "Player 1 please enter your name:"
                || $(".tui-instructions").html() === "Player 2 please enter your name:"
                || $(".tui-instructions").html() === "Player 3 please enter your name:"
                || $(".tui-instructions").html() === "Player 4 please enter your name:"
                || $(".tui-instructions").html() === "Player 5 please enter your name:"
                || $(".tui-instructions").html() === "Player 1 please enter your name: "
                || $(".tui-instructions").html() === "Player 2 please enter your name: "
                || $(".tui-instructions").html() === "Player 3 please enter your name: "
                || $(".tui-instructions").html() === "Player 4 please enter your name: "
                || $(".tui-instructions").html() === "Player 5 please enter your name: ") {
                console.log("TESTa");
            } else {
                $(".name-input").val("");
                console.log("TESTb");
                $(".player").hide();
                $(".playername").hide();
                $(".gameinfo").show();
                $(".gameplayingcards").show();
                $(".gamehandcards").show();
            }

        });

    });

</script>
<style scoped>

</style>