<template>
    <v-container fill-width fluid class="gameboard">

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