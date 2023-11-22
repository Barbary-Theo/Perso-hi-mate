<template>

  <div class="main">

    <HomeSide/>

    <div id="folio-side" class="folio-side">

        <div v-if="showConsole" id="console-container" class="console-container translateX-animation">
          <div class="console" id="console">

            <div class="readme-content">Théo Barbary / README.md</div>

            <div class="readme-container">
              <div class="readme-content readme-console"> &nbsp;&nbsp;me = { <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name 'Barbary Théo',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nationality: 'French',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current_location: 'North of France',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;work: {<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;role: 'Software engineer',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;company: 'Toyota Motor Manufacturing France',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;school: 'INSA Hauts-de-France',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;social: {<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;linkedin: <a title="Open linkedIn" href="https://www.linkedin.com/in/théo-barbary-047656201/" target="_blank" class="ref-console">'https://www.linkedin.com/in/théo-barbary-047656201/'</a>,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;github: <a title="Open gitlab" href="https://github.com/Barbary-Theo" target="_blank" class="ref-console">'https://github.com/Barbary-Theo'</a>,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gitlab: <a title="Open gitlab" href="https://gitlab.com/Barbary-Theo" target="_blank" class="ref-console">'https://gitlab.com/Barbary-Theo'</a>,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gmail: 'theo.barbary25@gmail.com',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;phone: '(+33) 06.24.19.10.35',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
                &nbsp;}</div>
            </div>

          </div>
        </div>

      <div id="presentation" class="presentation container-fluid spacer translateX-animation-origin">

        <div class="row row-side">

          <div class="img-side-container">
            <img alt="me" v-if="smallScreen" style="width: 50vw; height: auto" src="../assets/undraw_handcrafts_woman.png"/>
            <img alt="me" v-if="smallScreen" style="width: 20vw; height: auto; position: relative;" src="../assets/undraw_handcrafts_cat.png"/>
            <img alt="me" v-if="!smallScreen" class="img-side" src="../assets/undraw_handcrafts_woman.png"/>
            <img alt="cat" v-if="!smallScreen" class="img-side-cat" src="../assets/undraw_handcrafts_cat.png"/>
          </div>

          <div class="text-side-container">
            <h3> Hi everyone ! I’m glad you're here. </h3>
            <p class="text-content">
                I’m a simple software engineer in apprenticeship, I work for <span class="bold"> Toyota Motor Manufacturing France </span> and I'm a student in INSA Hauts-de-France. <br> Let’s learn some informations about me !<br>
            <br>
                Basically, <span class="bold">Toyota</span>’s values influence me a lot, for example :
            </p>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: start; padding-top: 0 !important; padding-left: 0 !important;" class="text-content">
                  <div> <v-icon dense color="primary">mdi-circle-medium</v-icon> The "Kaizen" (the continuous improvement and the pleasure to learn so more)</div>
                  <div> <v-icon dense color="success">mdi-circle-medium</v-icon> The 4S </div>
                  <div> <v-icon dense color="black">mdi-circle-medium</v-icon> My work’s quality and reliability </div>
              </div>
          </div>

        </div>

      </div>

      <div class="divider-container spacer">
        <img class="divider-img" src="../assets/undraw_handcrafts_plants.png" alt="divider plants"/>
      </div>

      <div id="experiences" class="experiences container-fluid spacer translateX-animation-origin">

        <div class="row row-side">

          <div v-if="smallScreen" class="img-side-container">
            <img alt="graph" style="width: 70vw; height: auto" src="../assets/undraw_handcrafts_analytics.png"/>
          </div>

          <div class="text-side-container">
            <h3> Experiences </h3>
            <p class="text-content">
              As a future engineer I could learn a lot a of different skills, firstly in technical domain and now in project management.
              <br>
              <br>
              The company where I work and the school where I study take care about my progress and trust a lot in me, it allowed me to improve myself efficiency and with envy to finally be able to lead different projects from the beginning to the end.
              <br>
            </p>
              <div style="display: flex; justify-content: space-evenly; align-items: center; width: 100%">
                  <img alt="toyota" class="image-toyota" src="../assets/toyota.png"/>
                  <img alt="toyota" class="image-insa" src="../assets/insa.png"/>
                  <img alt="toyota" class="image-inopme" src="../assets/inopme.png"/>
              </div>
          </div>

          <div v-if="!smallScreen" class="img-side-container">
            <img alt="graph" class="img-side-experiences" src="../assets/undraw_handcrafts_analytics.png"/>
          </div>

        </div>

      </div>


      <div class="divider-container spacer">
        <img class="divider-img" src="../assets/undraw_handcrafts_add_village.png" alt="divider village"/>
      </div>


      <div id="skills" class="skills container-fluid spacer translateX-animation-origin">

        <div class="row row-side">

          <div class="img-side-container">
            <img alt="computer" v-if="smallScreen" style="width: 70vw; height: auto" src="../assets/undraw_handcrafts_computer.png"/>
            <img alt="computer" v-if="!smallScreen" class="img-side-skills" src="../assets/undraw_handcrafts_computer.png"/>
          </div>

          <div class="text-side-container">
            <h3> Skills️ </h3>
            <p class="text-content">
                Let's check some of my <span class="underline bold"> technical skills </span> :
              <br>
              <br>
            </p>

            <div class="rating-container">

              <div class="skill-container">
                <v-icon color="primary">mdi-language-java</v-icon>
                <p class="col-8 li-rating">&nbsp;&nbsp;Java</p>
                <v-rating class="col-4" half-increments background-color="orange lighten-3" color="orange" value="4.5" readonly x-small></v-rating>
              </div>
              <div class="skill-container">
                  <v-icon dense color="success">mdi-leaf</v-icon>
                <p class="col-8 li-rating">&nbsp;&nbsp;SpringBoot</p>
                <v-rating class="col-4" half-increments background-color="orange lighten-3" color="orange" value="4.5" readonly x-small></v-rating>
              </div>
              <div class="skill-container">
              <v-icon dense color="#2E7D32">mdi-vuejs</v-icon>
                <p class="col-8 li-rating">&nbsp;&nbsp;Vue.js</p>
                <v-rating class="col-4" half-increments background-color="orange lighten-3" color="orange" value="4" readonly x-small></v-rating>
              </div>
                <div class="skill-container">
                <v-icon dense color="#087EA4">mdi-react</v-icon>
                <p class="col-8 li-rating">&nbsp;&nbsp;React/Next.js</p>
                <v-rating class="col-4" half-increments background-color="orange lighten-3" color="orange" value="4" readonly x-small></v-rating>
              </div>
              <div class="skill-container">
                  <v-icon dense color="#FFD600">mdi-language-python</v-icon>
                <p class="col-8 li-rating">&nbsp;&nbsp;Python</p>
                <v-rating class="col-4" half-increments background-color="orange lighten-3" color="orange" value="4" readonly x-small></v-rating>
              </div>
              <div class="skill-container">
                  <v-icon dense color="black">mdi-flask</v-icon>
                <p class="col-8 li-rating">&nbsp;&nbsp;Flask</p>
                <v-rating class="col-4" half-increments background-color="orange lighten-3" color="orange" value="3" readonly x-small></v-rating>
              </div>
              <div class="skill-container">
                  <v-icon dense color="error">mdi-database</v-icon>
                <p class="col-8 li-rating">&nbsp;&nbsp;PostgreSql, MySql and SqlServer</p>
                <v-rating class="col-4" half-increments background-color="orange lighten-3" color="orange" value="4" readonly x-small></v-rating>
              </div>
              <div class="skill-container">
                  <v-icon dense color="grey">mdi-cellphone</v-icon>
                <p class="col-8 li-rating">&nbsp;&nbsp;Flutter</p>
                <v-rating class="col-4" half-increments background-color="orange lighten-3" color="orange" value="4" readonly x-small></v-rating>
              </div>
              <div class="skill-container">
                <v-icon dense color="warning">mdi-git</v-icon>
                <p class="col-8 li-rating">&nbsp;&nbsp;Git</p>
                <v-rating class="col-4" half-increments background-color="orange lighten-3" color="orange" value="5" readonly x-small></v-rating>
              </div>
              <div class="skill-container">
                  <v-icon dense color="#0277BD">mdi-docker</v-icon>
                <p class="col-8 li-rating">&nbsp;&nbsp;Docker/Kubernetes</p>
                <v-rating class="col-4" half-increments background-color="orange lighten-3" color="orange" value="3.5" readonly x-small></v-rating>
              </div>
              <div class="skill-container">
                  <v-icon dense color="#D50000">mdi-code-json</v-icon>
                <p class="col-12 li-rating" style="text-align: left !important;">&nbsp;&nbsp;And so much more ! </p>
              </div>

            </div>
          </div>

        </div>

      </div>


      <div class="divider-container spacer">
        <img class="divider-img" src="../assets/undraw_handcrafts_nature.png" alt="divider nature"/>
      </div>


      <ProjectsPart/>

      <FooterPart/>


    </div>

  </div>

</template>

<script>

import $ from 'jquery';
import HomeSide from "@/components/HomeSide";
import ProjectsPart from "@/components/Projects";
import FooterPart from "@/components/Footer";
import {mdiBrightness1} from "@mdi/js";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue } from 'bootstrap-vue'
import Vue from 'vue'

Vue.use(BootstrapVue)

export default {
  name: 'HiMate',
  components: {FooterPart, HomeSide, ProjectsPart},
  data: () => ({
    icon: { mdiBrightness1 },
    alreadyShown: [false, false, false, false],
    intervalCommandLine: null,
    idEleToScroll: ["#console-container", "#presentation", "#experiences", "#skills"],
    textInputed: "",
    showConsole: $(window).width() >= 930,
    smallScreen: $(window).width() <= 930,
    extraSmallScreen: $(window).width() <= 600,
    sus: ""
  }),

  methods: {

    isScrolledIntoView: function (elem) {
      let docViewTop = $(window).scrollTop();
      let docViewBottom = docViewTop + $(window).height();

      let elemTop =  $(elem).offset().top ;
      let elemBottom = elemTop + $(elem).height();

      return ((elemBottom - $(elem).height() * .25 >= docViewTop) && (elemTop + $(elem).height() * .25 <= docViewBottom));
    },

    initScrollAnimation: function () {
      $(window).on("scroll", () => {

        this.idEleToScroll.forEach((elem, index) => {
          try {
            if(!this.alreadyShown[index] && this.isScrolledIntoView(elem)) {

              let halfScreenLessConsoleWidth = index === 0 ? 100 * (($(elem).width() * 0.5) / $(window).width()) * 0.5 : 0;

              $(elem).css("margin-left", `${halfScreenLessConsoleWidth}vw`).css("opacity", 1);
              this.alreadyShown[index] = true;
            }
            else if (this.alreadyShown[index] && !this.isScrolledIntoView(elem)) {
              $(elem).css("margin-left", (index === 0 ? "0" : "-25vw")).css("opacity", 0);
              this.alreadyShown[index] = false;
            }
          } catch (error) {
            this.sus = "";
          }
        })
      });

    },

    initCommandLineAnimation: function() {

      let cptCommandLine = 0;
      let ele = $("#command-line-end");

      this.intervalCommandLine = setInterval(() => {
        if(cptCommandLine % 2 === 0) ele.removeClass("command-line-end")
        else ele.addClass("command-line-end")
        cptCommandLine ++;
      }, 600)

    },

    enterFunction: function (elem) {

      if(this.textInputed === "show Justine") {
        this.treatementAfterEnterFunction(elem, `<p class="json-me" style="color: #756A92"> &nbsp;&nbsp; Justine c'est la plus belle 🦋 Et je l'aime 🌈</p>`);
      }
      else if(this.textInputed === "hello friend") {
        this.treatementAfterEnterFunction(elem, `<p class="json-me" style="color: #756A92">
            &nbsp;&nbsp;&nbsp;&nbsp;- Justine c'est la plus belle 🌈<br>
            &nbsp;&nbsp;&nbsp;&nbsp;- Alexandre c'est le plus beau 🐝<br>
            &nbsp;&nbsp;&nbsp;&nbsp;- Raphael c'est le plus chaud 🐻<br>
            &nbsp;&nbsp;&nbsp;&nbsp;- Damien c'est un coquin 🦄<br>
            &nbsp;&nbsp;&nbsp;&nbsp;- Nicolas c'est mon papa 🦖<br>
            &nbsp;&nbsp;&nbsp;&nbsp;- Younes c'est le plus malin 🐵<br>
            &nbsp;&nbsp;&nbsp;&nbsp;- Roman c'est le plus sportif 🦊<br>
            &nbsp;&nbsp;&nbsp;&nbsp;- Basile c'est le plus petit 🦦<br>
            &nbsp;&nbsp;&nbsp;&nbsp;- Martin c'est le plus fort 🦋<br>
            &nbsp;&nbsp;&nbsp;&nbsp;- Gio il est au max 🐊<br>
          </p>`);
      }
      else this.treatementAfterEnterFunction(elem, `<p class="json-me" style="color: #9E3F3F"> &nbsp;&nbsp; > Unknow command : '${this.textInputed}'</p>`);

    },

    treatementAfterEnterFunction: function(elem, newBalise) {
      elem.remove()
      let menuContent = $("#menu-content");
      let console = $("#console");
      menuContent.append(`<p> Barbary-content-readme ~ % ${this.textInputed} </p>`);
      menuContent.append(newBalise);
      menuContent.append(`<p id="command-line-end" class="command-line-end"> Barbary-content-readme ~ % </p>`);
      this.textInputed = "";
      this.initCommandLineAnimation();
      console.scrollTop(console.height());
    },

    removeFunction: function (elem) {
      if(elem.text().length > 28) {
        this.textInputed = this.textInputed.substring(0, this.textInputed.length - 1);
        elem.text(elem.text().substring(0, elem.text().length - 1));
      }
    },

    initKeyDownEvent: function () {

      $(document).on("keydown", (e) => {
        let keyCode = e.originalEvent.keyCode;
        let key = e.originalEvent.key;
        let elem = $("#command-line-end");

        if(keyCode === 32 && e.target === document.body) {
          e.preventDefault();
        }

        if(key === "Enter") {
         this.enterFunction(elem);
        }
        else if (key === "Backspace") {
         this.removeFunction(elem);
        }
        else if((keyCode >= 65 && keyCode <= 90) || keyCode === 32) {
          elem.text(elem.text() + key);
          this.textInputed += key;
        }
      });

    },

    displayProjectByScreenSize: function () {
      this.showConsole = $(window).width() >= 930;
      this.smallScreen = $(window).width() <= 930;
      this.extraSmallScreen = $(window).width() <= 600;
    },

    initEvent: function () {
      this.displayProjectByScreenSize();
      this.initScrollAnimation();
      this.initCommandLineAnimation();
      this.initKeyDownEvent();

      $(window).resize(() => {
        this.displayProjectByScreenSize();
      });
    }

  },

  mounted: function () {
    document.title = '⚙️Théo Barbary';
    this.initEvent();
  },

  beforeDestroy() {
    this.intervalCommandLine = null;
  }

}
</script>

<style>

.spacer {
  margin-top: 15vh !important;
}

.folio-side {
  background-color: white;
  height: 100%;
  margin-bottom: 0 !important;
  position: relative;
}

.console {
  background-color: #333;
  height: fit-content;
  width: 50vw;
  color: white;
  border-radius: 10px;
  box-shadow: #fff 8px 8px 0 0, #000 8px 8px 0 1px;
  overflow-x: scroll;
  overflow-y: scroll;
  margin-top: 13vh;
  padding: 2vh;
}

.menu-console {
  position: absolute;
  width: 49.9vw;
  border-top-left-radius: 1.3vh;
  border-top-right-radius: 1.3vh;
  background-color: #FAFAFA;
  border-bottom: 1px solid lightgrey;
  height: 4vh !important;
  text-align: center;
  align-items: center;
}

.menu-console-text {
  color: black;
  font-weight: bold;
  font-size: 0.9vw;
  align-items: center;
  vertical-align: middle;
  padding: 0.5vh;
}

.menu-console-button {
  position: absolute;
  left: 0.7vw;
}

.icon {
  margin-left: 0.5vw;
}

.translateX-animation {
  transition-property: margin-left, opacity;
  opacity: 0;
  margin-left: 0;
  transition: .5s ease;
}

.translateX-animation-origin {
  transition-property: margin-left, opacity;
  opacity: 0;
  margin-left: -24vw;
  transition: .5s ease;
}

.menu-content {
  margin-top: 4vh;
  color: black;
  padding: 1vw;
  font-size: 0.9vw;
  font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
}

.json-me {
  font-size: 0.8vw;
}

.json-attribut {
  color: #832525;
}

.json-attribut-second {
  color: #AD7615;
}

.command-line-end {
  padding-right: 0.2vw;
  border-right: 2px solid grey;
  width: fit-content;
}

.ref-console {
  color: white !important;
  text-decoration: none;
}

.img-side {
  height: 50vh;
  width: auto;
}

.img-side-cat {
  position: relative;
  height: 20vh;
  width: auto;
}

.img-side-experiences {
  height: 40vh;
  width: auto;
}

.img-side-skills {
  width: 30vw;
  height: auto;
}

.text-content {
  font-size: 2.3vh;
  font-family: Helvetica, sans-serif;
  padding: 2vh;
  text-align: justify;
  z-index: 1;
}

.divider-img {
  height: 15vh;
  width: auto;
}

.divider-container {
  display: flex;
  justify-content: center;
}


@media only screen and (min-width: 800px) {

  .rating-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around !important;
  }

}

@media only screen and (max-width: 800px) {

  .rating-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around !important;
    font-size: 2.2vh;
  }

}

a {
  text-decoration: none;
  color: black;
}


@media only screen and (min-width: 910px) {

  .img-side-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 40%;
  }

  .text-side-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 50%;
  }

}

.image-toyota {
    width: 10vw;
    height: auto;
}

.image-insa {
    width: 10vw;
    height: auto;
}

.image-inopme {
    width: 10vw;
    height: auto;
}

@media only screen and (max-width: 910px) {

  .img-side-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }

  .text-side-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }

    .image-toyota {
        width: 20vw;
        height: auto;
    }

    .image-insa {
        width: 20vw;
        height: auto;
    }

    .image-inopme {
        width: 20vw;
        height: auto;
    }
}

.row-side {
  justify-content: space-around !important;
}

.skill-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.skill-container > p {
  margin-bottom: 0;
  text-align: left;
}

.v-rating .v-icon {
  padding: 0.4vw !important;
}

.underline {
    text-decoration: underline;
}

.bold {
    font-weight: bold;
}

.readme-content {
  font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  font-size: 0.85em;
}

.readme-container {
  width: 100%;
  height: fit-content;
  background-color: #454545;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 2vh;
  margin-top: 2vh;
}

.readme-console {
  font-size: 0.75em;
}

</style>
