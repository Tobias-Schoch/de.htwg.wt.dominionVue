<template>
    <v-container fill-width fluid>
        <v-row>
            <v-col align="center"
                   justify="center">
                <v-img
                        lazy-src="img/logo.jpg"
                        height="150px"
                        width="450px"
                        src="img/logo.jpg">
                </v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center"
                   justify="center">
                <button class="btn play">

                    <v-img class="button-icon"
                           height="30px"
                           width="30px"
                           src="img/arrow.png">
                    </v-img>
                    <div class="text">
                        Play
                    </div>
                </button>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center"
                   justify="center">
                <button class="btn rules">
                    <v-img class="button-icon"
                           height="30px"
                           width="30px"
                           src="img/arrow.png">
                    </v-img>
                    <div class="text" v-on:click="$router.push('about')">
                        Rules
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
    }

    .text {
        display: block;
        margin-left: 15px;
    }

    .btn {
        text-align: center;
        text-transform: uppercase;
        font-size: 25px;
        font-family: 'McLaren', cursive;
        font-weight: bold;
        width: 140px;
        height: 70px;
        -webkit-border-radius: 70px;
        border-radius: 70px;
        outline: none;
    }

    .btn, .btn:hover, .play, .play:hover {
        -webkit-transition: all 250ms ease-in-out;
        -moz-transition: all 250ms ease-in-out;
        -ms-transition: all 250ms ease-in-out;
        -o-transition: all 250ms ease-in-out;
        transition: all 250ms ease-in-out;
    }
</style>