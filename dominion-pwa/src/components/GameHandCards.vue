<template>
    <div class="card-stack">
        Handkarten
        <div class="hidden-win-hand">{{ handCards }}</div>
        <v-row class="playing-decks-hand"
               align="center"
               justify="center">
        </v-row>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import jQuery from "jquery";

    jQuery(document).ready(function ($) {
        var cards = "";
        if (window.location.href === "http://localhost:8080/game") {
            var timerID = setInterval(function () {
                cards = $(".hidden-win-hand").html();
                if (cards.includes("cardName")) {
                    cards = JSON.parse(cards);
                    for (var i = 0; i < cards[0].length; i++) {
                        $('.playing-decks-hand').append('<div id="card_' + i + '" class="card" @click.native="push_hand(' + i + ')"><img class="card_image" src="img/cards/' + cards[0][i].cardName + '.png"></div>');
                    }
                    clearInterval(timerID)
                }
            }, 50);
        }
    });

    export default {
        name: "GameHandCards",
        computed: {
            ...mapGetters({
                handCards: 'getPlayerHand'
            })
        },
        methods: {
            send(cardId) {
                this.$store.dispatch("request", cardId);
            },
            push_hand(i) {
                this.$store.dispatch("request", i);
            }
        }
    }
</script>

<style scoped>

</style>