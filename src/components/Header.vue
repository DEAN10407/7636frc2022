<template>
  <div id="header">
    <v-row>
      <v-col cols="12" lg="3" md="3" sm="12">
        <router-link to="/home">
          <img src="../assets/Logo7636.jpg" height="120" />
        </router-link>
      </v-col>
      <v-col class="ma-auto">
        <div cols="12" lg="9" md="9" sm="12" class="display-2">
          <strong>FRC #7636 Robomania</strong>
        </div>
      </v-col>
    </v-row>
    <vue-position-sticky :offsetTop="0">
      <v-col class="pt-0">
        <Toolbar></Toolbar>
      </v-col>
    </vue-position-sticky>
  </div>
</template>

<script>
import Toolbar from "./ToolBar.vue";

export default {
  components: {
    Toolbar,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/header.scss";
</style>
