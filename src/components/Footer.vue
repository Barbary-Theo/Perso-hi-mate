<template>

  <div id="footer" class="footer spacer">

    <div class="container-fluid">

      <div class="row">

        <div class="col-12" style="display:flex; justify-content: center !important;">

          <div class="footer-info">
            <p class="bold"> (+33) 06.24.19.10.35 </p>
            <p class="bold"> theo.barbary25@gmail.com </p>
            <p class="bold">theo.barbary@toyotafr.com </p>
          </div>

        </div>

        <div class="col-12 offset-0 col-sm-12 offset-0 col-md-4 offset-md-4 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4 col-xxl-4 offset-xxl-4" style="display: flex; justify-content: space-around; margin-bottom: 3vh !important;">
          <v-btn @click="openGitHub" class="btn-content" fab><v-icon large color="blue-grey darken-4">mdi-github</v-icon> </v-btn>
          <v-btn @click="openGitLab" class="btn-content" fab><v-icon large color="teal">mdi-gitlab</v-icon> </v-btn>
          <v-btn @click="openLinkedIn" class="btn-content" fab><v-icon large color="blue darken-4">mdi-linkedin</v-icon> </v-btn>
        </div>

      </div>

    </div>

  </div>

</template>

<script>
import {
  mdiBrightness1,
  mdiCardAccountMail,
  mdiEmail,
  mdiGithub,
  mdiGitlab,
  mdiLinkedin,
  mdiPhoneClassic
} from "@mdi/js";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue } from 'bootstrap-vue'
import Vue from 'vue'

Vue.use(BootstrapVue)

export default {
  name: "FooterPart",
  data: () => ({
    icon: { mdiBrightness1, mdiGithub, mdiGitlab, mdiLinkedin, mdiPhoneClassic, mdiEmail, mdiCardAccountMail}
  }),
  methods: {

    openGitHub: () => {
      window.open("https://github.com/Barbary-Theo", "_blank")
    },

    openGitLab: () => {
      window.open("https://gitlab.com/Barbary-Theo", "_blank")
    },

    openLinkedIn: () => {
      window.open("https://www.linkedin.com/in/th%C3%A9o-barbary-047656201/", "_blank")
    }

  },
  mounted() {
  }
}
</script>

<style scoped>

.spacer {
  margin-top: 15vh !important;
}

.footer {
    border-top: 2px solid black;
  width: 100%;
  height: fit-content;
  margin-bottom: 0 !important;
  background-color: #FAFAFA;
}

.btn-content {
    border: 2px solid #150C09;
    color: #150C09;
    display: block;
    padding: 15px 16px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 800;
    word-wrap: none;
    box-shadow: 2px 2px 0 #150C09;
    text-decoration: none;
    line-height: 21px;
    font-family: "Nunito Sans", sans-serif;
    margin-top: 7px !important;
    transition: all .1s ease;
    cursor: pointer;
}

.btn-content:hover {
    transform: translate(-1px, -1px);
    box-shadow: 3px 3px #150C09 !important;
}

.bold {
    font-weight: normal !important;
    font-size: 18px;
}

.footer-info {
    width: 70%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 3vh !important;
}


@media only screen and (max-width: 800px) {

    .footer-info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top: 3vh !important;
    }

}

</style>