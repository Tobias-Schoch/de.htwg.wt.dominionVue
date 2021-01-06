<template>
  <div class="card-stack">
    Handkarten
    <v-row>
      <v-col
          v-for="n in 7"
          :key="n">
        <img class="card handcard" src="img/cards/Cellar.png">
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "GameHandCards"
}
</script>

<style scoped>

</style>