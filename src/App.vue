<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                app
                class="pt-4"
                color="grey lighten-3"
                mini-variant
        >
            <v-avatar class="d-block text-center mx-auto mb-5 mt-5" v-on:click="$router.push('titlescreen')">
                <img src="img/home.png">
            </v-avatar>
            <v-avatar class="d-block text-center mx-auto mb-5" v-on:click="$router.push('game')">
                <img src="img/play-button.png">
            </v-avatar>
            <v-avatar class="d-block text-center mx-auto mb-5" v-on:click="$router.push('about')">
                <img src="img/info.png">
            </v-avatar>
            <a href="https://github.com/Involute1/de.htwg.wt.dominionVue" target="_blank"><v-avatar class="d-block text-center mx-auto mb-5">
                <img src="img/github.png">
            </v-avatar></a>
        </v-navigation-drawer>
        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        name: 'App',

        components: {},

        mounted() {
          this.$store.dispatch("connectWebsocket");
        }
    };
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=McLaren&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Yeon+Sung&display=swap');

    .v-avatar img {
        width: 25px !important;
        height: 25px !important;
        border-radius: 0 !important;
    }

    .v-image {
        margin-top: 50px;
        margin-bottom: 20px;
    }

    .v-avatar, object, svg {
        cursor: pointer;
    }

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

    .player_amount {
        margin-bottom: 35px;
    }
    .v-input {
        width: 800px;
        font-size: 22px;
        font-family: 'McLaren', cursive;
        font-weight: bold;
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

    button.player_amount {
        font-weight: normal;
    }
    h4 {
        font-size: 25px;
        margin-top: 35px;
    }
    .rules {
        text-align: left;
    }
    .rule-button {
        margin-bottom: 30px;
    }
</style>