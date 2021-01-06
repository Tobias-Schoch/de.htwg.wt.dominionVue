<template>
    <v-container fill-width fluid class="playername">
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
                   justify="center"
                   class="player_amount mt-9">
                <div class="tui-instructions">
                    Tell me your name
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center"
                   justify="center">
                <v-text-field class="name-input">

                </v-text-field>
                <button class="btn play" v-on:click="$router.push('game')">

                    <v-img class="button-icon"
                           height="30px"
                           width="30px"
                           src="img/arrow.png">
                    </v-img>
                    <div class="text send-name">
                        Absenden
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