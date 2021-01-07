import jQuery from "jquery";
jQuery(document).ready(function ($) {
function showit() {
        var cards = "";
        var timerID = setInterval(function(){
            cards = $(".hidden-win-hand").html();
            if (cards.indexOf("cardName") >= 0) {
                cards = JSON.parse(cards);
                for (var i = 0; i < cards[0].length; i++) {
                    $('.playing-decks-hand').append('<v-col id="card_' + i + '" class="card"><img class="card_image" src="img/cards/' + cards[0][i].cardName + '.png"></v-col>');
                }
                clearInterval(timerID)
            }
        }, 50);
}
});