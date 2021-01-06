<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
        class="pt-4"
        color="grey lighten-3"
        mini-variant
    >
      <v-avatar
          v-for="n in 2"
          :key="n"
          :color="`grey ${n === 1 ? 'darken' : 'lighten'}-1`"
          :size="n === 1 ? 36 : 20"
          class="d-block text-center mx-auto mb-9"
      ></v-avatar>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=McLaren&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Yeon+Sung&display=swap');

  .v-image {
    margin-top: 50px;
    margin-bottom: 20px;
  }
</style>