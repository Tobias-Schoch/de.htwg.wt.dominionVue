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
                <button class="btn">
                    Play
                </button>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center"
                   justify="center">
                <button class="btn">
                    Rules
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
    .btn {
        text-transform: uppercase;
        font-size: 25px;
        font-family: 'McLaren', cursive;
        font-weight: bold;
        width: 140px;
        height: 70px;
        -webkit-border-radius: 70px;
        border-radius: 70px;
        outline: none;
        background-color: #eee;
    }

    .btn:hover {
        background-color: #9ec4e8;
    }

    .btn, .btn:hover {
        -webkit-transition: all 250ms ease-in-out;
        -moz-transition: all 250ms ease-in-out;
        -ms-transition: all 250ms ease-in-out;
        -o-transition: all 250ms ease-in-out;
        transition: all 250ms ease-in-out;
    }
</style>