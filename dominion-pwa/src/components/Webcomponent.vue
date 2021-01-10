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
                <vaadin-button class="btn play" v-on:click="$router.push('game'); send();">
                    <div class="text">
                        Play
                    </div>
                </vaadin-button>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center"
                   justify="center">
                <vaadin-button class="btn rules" v-on:click="$router.push('about')">
                    <div class="text">
                        Rules
                    </div>
                </vaadin-button>
            </v-col>
        </v-row>
        <v-row class="mb-8 mt-8">
            <v-col>
                <div class="text">Report bugs</div>
                <vaadin-upload>

                </vaadin-upload>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <vaadin-text-field label="Mail" placeholder="e.g. example@example.com" class="mr-5"></vaadin-text-field>
                <vaadin-text-field label="Description" placeholder="e.g. missing button" class="mr-5"></vaadin-text-field>
                <vaadin-button>Send</vaadin-button>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import "@vaadin/vaadin-button/vaadin-button.js";
    import "@vaadin/vaadin-upload/vaadin-upload.js";
    import "@vaadin/vaadin-text-field/vaadin-text-field.js";

    export default {
        methods: {
            send() {
                this.$store.dispatch("request", 'local');
            }
        }
    }
</script>