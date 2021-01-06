<template>
    <v-app id="inspire">
        <v-main>
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
                        <v-btn>
                            Play
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col align="center"
                           justify="center">
                        <v-btn>
                            Rules
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        //
    }
</script>