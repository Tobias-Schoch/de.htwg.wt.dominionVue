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
            <v-avatar class="d-block text-center mx-auto mb-5">
                <img src="img/play-button.png">
            </v-avatar>
            <v-avatar class="d-block text-center mx-auto mb-5" v-on:click="$router.push('about')">
                <img src="img/info.png">
            </v-avatar>
            <a href="https://github.com/Involute1/de.htwg.wt.dominionVue"><v-avatar class="d-block text-center mx-auto mb-5">
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

        data: () => ({
            //
        }),
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
</style>