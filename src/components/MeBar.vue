<template>

  <v-container fluid class="bar">
    <v-row>

      <v-avatar :class="classe" @mouseover="hover = true" rounded>
        <img src="../assets/me.png" alt="Hi, it's me">
      </v-avatar>


      <transition name="fade">
        <v-card v-if="hover" @mouseleave="hover = false" class="card-hover">

          <v-avatar class="card-avatar" rounded>
            <img src="../assets/me.png" alt="Hi, it's me">
          </v-avatar>

          <p class="margin-2"> Hello mate ! </p>
          <p> I'm glad you're here 🤝 </p>
          <hr/>
          <p style="margin-top: 2vh !important"> You can scroll down 😉 </p>
        </v-card>
      </transition>

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
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
}

.card-hover {
  z-index: 10;
  position: fixed;
  top: 1.5vh;
  left: 1.5vh;
  text-align: center;
  width: 15vw;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px !important;
}

.card-avatar {
  width: 12vh !important;
  height: auto !important;
  margin-top: 2vh;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.margin-1 {
  margin-top: 1vh !important;
}
.margin-2 {
  margin-top: 2vh !important;
}
.margin-3 {
  margin-top: 3vh !important;
}

</style>