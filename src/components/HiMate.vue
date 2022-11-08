<template>

  <div class="main">

    <HomeSide/>

    <div id="folio-side" class="folio-side">

      <div v-if="showConsole" id="console-container" class="console-container translateX-animation">
        <div class="console" id="console">
          <div class="menu-console">
            <div class="menu-console-button">
              <v-icon class="icon" color="red" x-small>{{ icon.mdiBrightness1 }}</v-icon>
              <v-icon class="icon" color="orange" x-small>{{ icon.mdiBrightness1 }}</v-icon>
              <v-icon class="icon" color="green" x-small>{{ icon.mdiBrightness1 }}</v-icon>
            </div>
            <div class="menu-console-text">Barbary's console</div>
          </div>
          <div class="menu-content" id="menu-content">
            <p> Barbary-content-readme ~ % cat me.txt</p>
            <p class="json-me"> &nbsp;&nbsp;<span style="color: #1B8814">me</span> = { <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="json-attribut">Name</span>: 'Barbary Théo',<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="json-attribut">Nationality</span>: 'French',<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="json-attribut">Current_location</span>: 'North of France',<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="json-attribut">Work</span>: {<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="json-attribut-second">Role</span>: 'Software engineer',<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="json-attribut-second">Company</span>: 'Toyota Motor Manufacturing France',<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="json-attribut-second">School</span>: 'INSA Hauts-de-France',<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="json-attribut">Social</span>: {<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="json-attribut-second">linkedIn</span>: <a title="Open linkedIn" href="https://www.linkedin.com/in/théo-barbary-047656201/" target="_blank" class="ref-console">'https://www.linkedin.com/in/théo-barbary-047656201/'</a>,<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="json-attribut-second">gitlab</span>: <a title="Open gitlab" href="https://gitlab.com/Barbary-Theo" target="_blank" class="ref-console">'https://gitlab.com/Barbary-Theo'</a>,<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="json-attribut-second">gmail</span>: 'theo.barbary25@gmail.com',<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="json-attribut-second">phone</span>: '(+33) 06.24.19.10.35',<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
              &nbsp;}</p>
            <p id="command-line-end" class="command-line-end"> Barbary-content-readme ~ % </p>

          </div>
        </div>
      </div>

      <div id="presentation" class="presentation container-fluid spacer translateX-animation-origin">

        <div class="row">

          <div class="col-md-5 offset-md-1 col-sm-12 col-12" style="align-items: center; text-align: center">
            <img alt="me" v-if="smallScreen" style="width: 50vw; height: auto" src="../assets/undraw_handcrafts_woman.png"/>
            <img alt="me" v-if="smallScreen" style="width: 20vw; height: auto; position: relative;" src="../assets/undraw_handcrafts_cat.png"/>
            <img alt="me" v-if="!smallScreen" class="img-side" src="../assets/undraw_handcrafts_woman.png"/>
            <img alt="cat" v-if="!smallScreen" class="img-side-cat" src="../assets/undraw_handcrafts_cat.png"/>
          </div>

          <div class="col-md-5 col-sm-12 col-12" style="display: flex; flex-direction: column; align-items: center;">
            <h5> Hi everyone ! I’m glad your are here. 🙂 </h5>
            <p class="text-content">
            I’m a simple software engineer apprenticeship, I work in Toyota Motor Manufacturing France and a student in INSA Hauts-de-France. Let’s learn some informations about me !<br>
            <br>
            Liked I said I work in Toyota, basically the company’s values influence me a lot, for exemples the "Kaizen", that means the continuous improvement et the pleasure to learn so more, moreover 4S, my work’s quality and reliability !<br>
            </p>
          </div>

        </div>

      </div>

      <div class="divider-container spacer">
        <img class="divider-img" src="../assets/undraw_handcrafts_plants.png" alt="divider plants"/>
      </div>

      <div id="experiences" class="experiences container-fluid spacer translateX-animation-origin">

        <div class="row">

          <div v-if="smallScreen" class="col-md-5 col-sm-12 col-12" style="align-items: center; text-align: center">
            <img alt="graph" style="width: 50vw; height: auto" src="../assets/undraw_handcrafts_analytics.png"/>
          </div>

          <div class="col-md-5 offset-md-1 col-sm-12 col-12" style="display: flex; flex-direction: column; align-items: center;">
            <h5> Experiences 🤖</h5>
            <p class="text-content">
              As a futur engineer I could learn a lot a of different skills, firstly in technically (that I will present in the next part) moreover in and mainly in the project management.
              <br>
              <br>
              The company where I am and my school take care about my progress and trust in me, it allowed me to improve myself efficiency and with envy and finally to be able to lead some project from A to Z.
              <br>
              <br>
              In addition, the traineeship that I realized 2 years ago during my DUT (technical university degree) also allowed me to improve my technical capacities and my decision making !
            </p>
          </div>

          <div v-if="!smallScreen" class="col-md-5 col-sm-12 col-12" style="align-items: center; text-align: center">
            <img alt="graph" class="img-side-experiences" src="../assets/undraw_handcrafts_analytics.png"/>
          </div>

        </div>

      </div>


      <div class="divider-container spacer">
        <img class="divider-img" src="../assets/undraw_handcrafts_add_village.png" alt="divider village"/>
      </div>


      <div id="skills" class="skills container-fluid spacer translateX-animation-origin">

        <div class="row">

          <div class="col-md-5 offset-md-1 col-sm-12 col-12" style="align-items: center; text-align: center">
            <img alt="computer" v-if="smallScreen" style="width: 50vw; height: auto" src="../assets/undraw_handcrafts_computer.png"/>
            <img alt="computer" v-if="!smallScreen" class="img-side-skills" src="../assets/undraw_handcrafts_computer.png"/>
          </div>

          <div class="col-md-5 col-sm-12 col-12" style="display: flex; align-items: center; flex-direction: column">
            <h5> Skills ⚙️ </h5>
            <p class="text-content">
              Who says computer scientist must say programming langage and technical skills, let’s see some of them which I proficiency :
              <br>
              <br>
            </p>

            <div style="display: flex; flex-direction: row; justify-content: space-around !important;">

              <ul style="width: 40%;">
                <li>Java</li>
                <li>Vue.js / react.js / JS / jQuery</li>
                <li>Python</li>
                <li>SpringBoot</li>
                <li>SQL / SQL Server / PostgreSQL / MySQL / Hibernate</li>
              </ul>
              <ul style="width: 40%">
                <li>Flask</li>
                <li>Flutter / Dart</li>
                <li>Git</li>
                <li>NodeJs / Express</li>
                <li>And so much more 😉</li>
              </ul>

            </div>
          </div>

        </div>

      </div>


      <div class="divider-container spacer">
        <img class="divider-img" src="../assets/undraw_handcrafts_nature.png" alt="divider nature"/>
      </div>


      <div id="projects" class="projects spacer">

        <h5 style="text-align: center"> Some projects 🔭️ </h5>

        <div class="container-fluid" style="margin-top: 5vh;">
          <div class="row" style="display: flex; flex-direction: row; justify-content: space-around;">

            <v-card color="white" class="card-project width-20">
              <div style="height: 40%; width: 100%; background-color: #BCD7B7; display: flex; text-align: center; justify-content: center; border-bottom: 1px solid lightgrey">
                <v-card-title>Web Dofus Quest</v-card-title>
              </div>

              <v-card-text>

                <div class="col-12">A project implementing an API with SpringBoot and a front in React.js</div>
                <v-chip-group column class="spacer-2">
                  <v-chip outlined label color="purple"> React </v-chip>
                  <v-chip outlined label color="green"> SpringBoot </v-chip>
                  <v-chip outlined label color="red"> Java </v-chip>
                  <v-chip outlined label color="blue"> Sql </v-chip>
                </v-chip-group>
                <div class="spacer-2" style="display: flex; justify-content: center; flex-direction: row;">
                   <v-btn color="grey" @click="openSpring" style="color: white;"> Go to the git <v-icon right dark>{{icon.mdiGithub}}</v-icon> </v-btn>
                </div>
              </v-card-text>

            </v-card>

            <v-card color="white" class="card-project width-20">
              <div style="height: 40%; width: 100%; background-color: #A6CFDF; display: flex; text-align: center; justify-content: center; border-bottom: 1px solid lightgrey">
                <v-card-title>Project "Gone"</v-card-title>
              </div>

              <v-card-text>

                <div class="col-12">A Trello like mobile project using flutter and firebase</div>
                <v-chip-group column class="spacer-2">
                  <v-chip outlined label color="indigo"> Flutter </v-chip>
                  <v-chip outlined label color="indigo darken-3"> Dart </v-chip>
                  <v-chip outlined label color="red"> Firebase </v-chip>
                </v-chip-group>
                <div class="spacer-2" style="display: flex; justify-content: center; flex-direction: row;">
                  <v-btn color="grey" @click="openGone" style="color: white;"> Go to the git <v-icon right dark>{{icon.mdiGithub}}</v-icon> </v-btn>
                </div>
              </v-card-text>

            </v-card>

            <v-card color="white" class="card-project width-20">
              <div style="height: 40%; width: 100%; background-color: #DFB0A6; display: flex; text-align: center; justify-content: center; border-bottom: 1px solid lightgrey">
                <v-card-title> AI for Othello</v-card-title>
              </div>

              <v-card-text>

                <div class="col-12">An artificial intelligence configurable which can beat you on Othello using python</div>
                <v-chip-group column class="spacer-2">
                  <v-chip outlined label color="green"> Python </v-chip>
                  <v-chip outlined label color="blue"> Mathematics </v-chip>
                  <v-chip outlined label color="dark"> Complexity </v-chip>
                </v-chip-group>
                <div class="spacer-2" style="display: flex; justify-content: center; flex-direction: row;">
                  <v-btn color="grey" @click="opneOthello" style="color: white;"> Go to the git <v-icon right dark>{{icon.mdiGithub}}</v-icon> </v-btn>
                </div>
              </v-card-text>

            </v-card>

            <v-card color="white" class="card-project width-20">
              <div style="height: 40%; width: 100%; background-color: #A6DFD0; display: flex; text-align: center; justify-content: center; border-bottom: 1px solid lightgrey">
                <v-card-title> System and secured prog</v-card-title>
              </div>

              <v-card-text>

                <div class="col-12">Simulate server communication using sockets and watchdogs to secure communication</div>
                <v-chip-group column class="spacer-2">
                  <v-chip outlined label color="green"> Python </v-chip>
                  <v-chip outlined label color="green darken-4"> Linux </v-chip>
                  <v-chip outlined label color="purple"> Security </v-chip>
                </v-chip-group>
                <div class="spacer-2" style="display: flex; justify-content: center; flex-direction: row;">
                  <v-btn color="grey" @click="openOsps" style="color: white;"> Go to the git <v-icon right dark>{{icon.mdiGithub}}</v-icon> </v-btn>
                </div>
              </v-card-text>

            </v-card>

            <v-card color="white" class="card-project width-20">
              <div style="height: 40%; width: 100%; background-color: #A6DFD0; display: flex; text-align: center; justify-content: center; border-bottom: 1px solid lightgrey">
                <v-card-title> PorteFolio</v-card-title>
              </div>

              <v-card-text>

                <div class="col-12">Basically, the page where you are getting some fun 😉</div>
                <v-chip-group column class="spacer-2">
                  <v-chip outlined label color="blue"> Vue.js </v-chip>
                  <v-chip outlined label color="orange lighter-2"> Responsive </v-chip>
                  <v-chip outlined label color="black"> User interface </v-chip>
                </v-chip-group>
                <div class="spacer-2" style="display: flex; justify-content: center; flex-direction: row;">
                  <v-btn color="grey" @click="openPorteFolio" style="color: white;"> Go to the git <v-icon right dark>{{icon.mdiGithub}}</v-icon> </v-btn>
                </div>
              </v-card-text>

            </v-card>


          </div>
        </div>


      </div>

      <div id="footer" class="footer spacer">

      </div>


    </div>

  </div>

</template>

<script>

import $ from 'jquery';
import HomeSide from "@/components/HomeSide";
import {mdiBrightness1, mdiGithub} from "@mdi/js";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue } from 'bootstrap-vue'
import Vue from 'vue'

Vue.use(BootstrapVue)

export default {
  name: 'HiMate',
  components: {HomeSide},
  data: () => ({
    icon: { mdiBrightness1, mdiGithub },
    alreadyShown: [false, false, false, false, false],
    intervalCommandLine: null,
    idEleToScroll: ["#console-container", "#presentation", "#experiences", "#skills", "#projects"],
    textInputed: "",
    showConsole: $(window).width() >= 930,
    smallScreen: $(window).width() <= 930,
    sus: ""
  }),

  methods: {

    openSpring: () => {
      window.open("https://gitlab.com/Barbary-Theo/web_dofus_quest", "_blank")
    },

    openGone: () => {
      window.open("https://gitlab.com/Barbary-Theo/web_dofus_quest", "_blank")
    },

    opneOthello: () => {
      window.open("https://gitlab.com/Barbary-Theo/web_dofus_quest", "_blank")
    },

    openOsps: () => {
      window.open("https://gitlab.com/Barbary-Theo/web_dofus_quest", "_blank")
    },

    openPorteFolio: () => {
      window.open("https://gitlab.com/Barbary-Theo/web_dofus_quest", "_blank")
    },

    openAutomates: () => {
      window.open("https://gitlab.com/Barbary-Theo/web_dofus_quest", "_blank")
    },

    openCartographers: () => {
      window.open("https://gitlab.com/Barbary-Theo/web_dofus_quest", "_blank")
    },

    openLex: () => {
      window.open("https://gitlab.com/Barbary-Theo/web_dofus_quest", "_blank")
    },

    isScrolledIntoView: (elem) => {
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
            &nbsp;&nbsp;&nbsp;&nbsp;- Basile c'est le plus petit 🐬<br>
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

    initEvent: function () {
      this.initScrollAnimation();
      this.initCommandLineAnimation();
      this.initKeyDownEvent();

      $(window).resize(() => {
        this.showConsole = $(window).width() >= 930;
        this.smallScreen = $(window).width() <= 930;

        if(this.smallScreen) {
          let items = document.getElementsByClassName('width-20');

          for (let i = 0; i < items.length ; i ++) {
            items.item(i).classList.replace("width-20", "width-40")
          }
        }
        else {
          let items = document.getElementsByClassName('width-40');

          for (let i = 0; i < items.length ; i ++) {
            items.item(i).classList.replace("width-40", "width-20")
          }
        }
      });
    }

  },

  mounted: function () {
    console.log($(window).width())
    document.title = '🌈 Barbary';
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
  background-color: #EDF1ED;
  height: 60vh;
  width: 50vw;
  color: white;
  border-radius: 1.4vh;
  border: 1px solid lightgrey;
  box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;
  overflow-x: scroll;
  overflow-y: scroll;
  margin-top: 13vh;
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
  color: black !important;
  text-decoration: none;
}

.footer {
  width: 100%;
  height: 20vh;
  margin-bottom: 0 !important;
  background-color: #0748ff1c;
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
}

.divider-img {
  height: 15vh;
  width: auto;
}

.divider-container {
  display: flex;
  justify-content: center;
}

.card-project {
  margin: 2vh;
  height: fit-content;
  padding-right: 0 !important;
  padding-left: 0 !important;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px !important;
}

.width-20 {
  width: 20% !important;
}

.width-40 {
  width: 40% !important;
}

.spacer-2 {
  margin-top: 1vh;
}

</style>