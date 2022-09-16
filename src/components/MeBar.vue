<template>

  <v-container fluid class="bar">
    <v-row>

      <v-avatar :class="classe" @mouseover="hover = true" rounded>
        <img src="../assets/me.png" alt="Hi, it's me">
      </v-avatar>


      <v-card v-if="hover" @mouseleave="hover = false" class="card-hover">

        <v-avatar class="card-avatar" rounded>
          <img src="../assets/me.png" alt="Hi, it's me">
        </v-avatar>

          <p> Hello mate ! </p>
          <p style="margin-top: 0 !important;"> I'm glad you're here 🤝 </p>
          <hr/>
          <p style="margin-top: 2vh !important"> You can scroll down 😉 </p>
      </v-card>

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
    },
    hover: false
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
  width: 14vh !important;
  height: auto !important;
  box-shadow: white 0 0 0 0.10vh;
  transition: box-shadow 1s ease;
}

.noBox {
  box-shadow: none;
}

.card-hover {
  z-index: 10;
  position: fixed;
  top: 1.5vh;
  left: 1.5vh;
  text-align: center;
  width: 15vw;
  transition: opacity 1s linear;
}

.card-avatar {
  width: 12vh !important;
  height: auto !important;
  margin-top: 2vh;
}

</style>