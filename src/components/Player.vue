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
                <button class="btn play player_amount" value="5" v-on:click="send()">

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
  methods: {
    send() {
      var kek = this.$store.getters.getClientId;
      console.log(kek);
    }
  }
}
</script>