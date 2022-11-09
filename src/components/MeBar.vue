<template>

  <div id="bar" class="bar container-fluid">
    <div class="row">

      <div class="col-4 offset-4 col-sm-4 offset-sm-4 col-md-2 offset-md-0 col-lg-2 offset-lg-0 col-xl-2 offset-xl-0 col-xxl-2 offset-xxl-0" style="display: flex; flex-direction: column; align-items: center">

        <v-avatar :class="classe" @mouseover="tst()" rounded>
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

        <div style="margin-top: 1.5vh; display: flex; width: 100%; justify-content: space-around !important;">

           <span style="width: 20%; text-align: center">
              <v-icon @click="openLinkedin" small color="#384454">{{ icon.mdiLinkedin }}</v-icon>
            </span>

            <span style="width: 20%; text-align: center">
              <v-icon @click="openGitLab" small color="#1E0F1C">{{ icon.mdiGitlab }}</v-icon>
            </span>

            <span style="width: 20%; text-align: center">
              <v-icon @click="openGitHub" small color="black">{{ icon.mdiGithub }}</v-icon>
            </span>

        </div>

      </div>

    </div>
  </div>

</template>

<script>
import $ from 'jquery';
import {
  mdiLinkedin,
  mdiGitlab,
  mdiGithub
} from '@mdi/js'
import { BootstrapVue } from 'bootstrap-vue'
import Vue from 'vue'

Vue.use(BootstrapVue)

export default {
  name: "MeBar",

  data: () => ({
    classe: "avatar",
    icon: {
      mdiLinkedin,
      mdiGitlab,
      mdiGithub
    },
    hover: false,
    window: screen,
    avatarShown: true
  }),

  mounted() {

    $(window).on("scroll", () => {
      if (this.avatarShown && $(window).scrollTop() > $(window).height()) {
        this.avatarShown = false;
        $("#bar").css("opacity", 0);
      }
      else if (!this.avatarShown && $(window).scrollTop() < $(window).height()) {
        this.avatarShown = true;
        $("#bar").css("opacity", 1);
      }

    });

  },
  methods: {

    openLinkedin: () => {
      window.open("https://www.linkedin.com/in/théo-barbary-047656201/", "_blank")
    },

    openGitLab: () => {
      window.open("https://gitlab.com/Barbary-Theo", "_blank")
    },

    openGitHub: () => {
      window.open("https://github.com/Barbary-Theo", "_blank")
    },

    tst: function () {
      this.hover = $(window).width() > 850;
    }
  },

}
</script>

<style scoped>

img {
  width: 100%  !important;
}

.bar {
  position: fixed;
  top: 3vh;
  left: 3vh;
  z-index: 100;
  opacity: 1;
  transition: opacity .3s;
}

.avatar {
  width: 70% !important;
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

.column {
  display: flex;
  flex-direction: column;
}

</style>