<template>
  <div class="card-stack">
    Gamekarten
    <v-row v-for="n in 2"
           :key="n">
      <v-col
          v-for="n in 7"
          :key="n">
        <img class="card gamecard" src="img/cards/Cellar.png">
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "GamePlayingCards"
}
</script>

<style scoped>

</style>