<template>
    <div class="card-stack">
        Gamekarten
        <div class="hidden-win-playing">{{ playingCardDecks }}</div>
        <v-row class="playing-decks"
               align="center"
               justify="center"></v-row>
    </div>
</template>

<script>

    import jQuery from "jquery";

    jQuery(document).ready(function ($) {
        var cards = "";
        var timerID = setInterval(function () {
            cards = $(".hidden-win-playing").html();
            if (cards.includes("Copper")) {
                cards = JSON.parse(cards);
                for (var i = 0; i < cards[0].length; i++) {
                    $('.playing-decks').append('<v-col id="card_' + i + '" class="card" v-on:click.native="push_play(' + i + ')"><img class="card_image" src="img/cards/' + cards[0][i][0].cardName + '.png"></v-col>');
                }
                clearInterval(timerID)
            }
        }, 50);
    });

    import {mapGetters} from "vuex";

    export default {
        name: "GamePlayingCards",
        computed: {
            ...mapGetters({
                playingCardDecks: 'getPlayingDecks'
            })
        },
        methods: {
            send(cardId) {
                this.$store.dispatch("request", cardId);
            },
            push_play(i) {
                console.log("i send" + i);
                this.$store.dispatch("request", i);
            }
        }
    }


</script>

<style scoped>

</style>