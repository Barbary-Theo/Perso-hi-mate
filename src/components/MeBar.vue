<template>

  <v-container fluid class="bar">
    <v-row>

      <v-tooltip right>

        <template v-slot:activator="{ on, attrs }">
          <v-avatar :class="classe"
                    v-bind="attrs"
                    v-on="on"
          >
            <img src="../assets/me.png" alt="Hi, it's me">
          </v-avatar>
        </template>
        <div class="card">
          <p> Hello mate ! </p>
          <p style="margin-top: 0 !important;"> I'm glad you're here 🤝 </p>
          <hr/>
          <p style="margin-top: 2vh !important"> You can scroll down 😉 </p>
        </div>
      </v-tooltip>

      <span class="group pa-2">
        <v-icon @click="openLinkedin" small color="blue">{{ icon.mdiLinkedin }}</v-icon>
      </span>

    </v-row>
  </v-container>

</template>

<script>

import {
  mdiLinkedin
} from '@mdi/js'

export default {
  name: "MeBar",

  data: () => ({
    classe: "avatar",
    icon: {
      mdiLinkedin
    }
  }),

  methods: {

    openLinkedin: () => {
      window.open("https://www.linkedin.com/in/théo-barbary-047656201/", "_blank")
    }
  },

  mounted() {

    this.timeOut = setInterval (() => {
      if(this.classe.includes(" noBox")) {
        this.classe = this.classe.replace(" noBox", "");
      }
      else {
        this.classe += " noBox";
      }
    }, 2000)

  }
}
</script>

<style scoped>


.bar {
  position: fixed;
  top: 3vh;
  left: 3vh;
}

.card {

  text-align: center;
}

.avatar {
  width: 10vh !important;
  height: auto !important;
  box-shadow: white 0 0 0 0.18vh;
  transition: box-shadow 1s ease-in-out;
}

.noBox {
  box-shadow: none;
}

</style>