<template>

  <div id="footer" class="footer spacer bg-light">

    <div class="container-fluid">

      <div class="row">

        <div class="col-12" style="display:flex; justify-content: center !important;">

          <div style="display: flex; flex-direction: column; justify-content: space-around; margin-top: 3vh !important;">
            <p><v-icon>{{icon.mdiPhoneClassic}}</v-icon> (+33) 06.24.19.10.35 </p>
            <p><v-icon>{{icon.mdiEmail}}</v-icon> theo.barbary25@gmail.com </p>
            <p><v-icon>{{icon.mdiCardAccountMail}}</v-icon> theo.barbary@toyotafr.com </p>
          </div>

        </div>

        <div class="col-12 offset-0 col-sm-12 offset-0 col-md-4 offset-md-4 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4 col-xxl-4 offset-xxl-4" style="display: flex; justify-content: space-around; margin-bottom: 3vh !important;">
          <v-btn @click="openGitHub" elevation="3" fab><v-icon large color="blue-grey darken-4">{{icon.mdiGithub}}</v-icon> </v-btn>
          <v-btn @click="openGitLab" elevation="3" fab><v-icon large color="teal">{{icon.mdiGitlab}}</v-icon> </v-btn>
          <v-btn @click="openLinkedIn" elevation="3" fab><v-icon large color="blue darken-4">{{icon.mdiLinkedin}}</v-icon> </v-btn>
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
  width: 100%;
  height: fit-content;
  margin-bottom: 0 !important;
}


</style>