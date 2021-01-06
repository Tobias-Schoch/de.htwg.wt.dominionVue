<template>
    <v-container fill-width fluid class="gameboard">
        <div class="card-stack">
            Gamekarten
            <v-row>
                <v-col>
                    <div class="info" id="playerName">Tobi</div>
                    <div class="info" id="playerMoney">1000€</div>
                    <div class="info" id="turn">1</div>
                    <div class="info" id="phase">Kaufphase</div>
                    <div class="info" id="playerActions">Buy</div>
                    <div class="info" id="playerBuys">Porsche</div>
                </v-col>
            </v-row>
        </div>
        <div class="card-stack">
            Gamekarten
            <v-row v-for="n in 2"
                   :key="n">
                <v-col
                        v-for="n in 7"
                        :key="n">
                    <img class="card gamecard" src="img/cards/Cellar.png">
                </v-col>
            </v-row>
        </div>
        <div class="card-stack">
            Handkarten
            <v-row>
                <v-col
                        v-for="n in 7"
                        :key="n">
                    <img class="card handcard" src="img/cards/Cellar.png">
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script>
    import jQuery from 'jquery';
    jQuery(document).ready(function ($) {

        $(".player").show();
        $(".playername").hide();
        $(".gameboard").hide();

        $(document).on('click', '.player-selection', function () {
            $(".player").hide();
            $(".playername").show();
        });

        $(document).on('click', '.send-name', function () {
            $(".playername").hide();
            $(".gameboard").show();
        });

    });

    export default {
        //
    }
</script>