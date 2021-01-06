<template>
    <v-container fill-width fluid>
        <v-row>
            <v-col align="center"
                   justify="center"
                   class="player_amount mt-9">
                How many players are you?
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center"
                   justify="center">
                <button class="btn play player_amount" value="3">

                    <v-img class="button-icon"
                           height="30px"
                           width="30px"
                           src="img/arrow.png">
                    </v-img>
                    <div class="text">
                        3 Player
                    </div>
                </button>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center"
                   justify="center">
                <button class="btn play player_amount" value="4">

                    <v-img class="button-icon"
                           height="30px"
                           width="30px"
                           src="img/arrow.png">
                    </v-img>
                    <div class="text">
                        4 Player
                    </div>
                </button>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center"
                   justify="center">
                <button class="btn play player_amount" value="5">

                    <v-img class="button-icon"
                           height="30px"
                           width="30px"
                           src="img/arrow.png">
                    </v-img>
                    <div class="text">
                        5 Player
                    </div>
                </button>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        //
    }
</script>

<style>

    div.text {
        text-align: left;
    }

    .play .v-image, .rules .v-image {
        display: none;
    }

    .play:hover .v-image, .rules:hover .v-image {
        display: block;
    }

    .v-image.button-icon {
        float: left;
        margin-right: 15px;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }

    .text {
        display: block;
        margin-left: 15px;
    }

    .player_amount {
        text-align: center;
        text-transform: uppercase;
        font-size: 35px;
        font-family: 'McLaren', cursive;
        font-weight: bold;
    }

    .btn {
        text-align: center;
        text-transform: uppercase;
        font-size: 22px;
        font-family: 'McLaren', cursive;
        font-weight: bold;
        width: 190px;
        height: 48px;
        -webkit-border-radius: 70px;
        border-radius: 70px;
        outline: none;
    }

    button.player_amount {
        font-weight: normal;
    }
</style>