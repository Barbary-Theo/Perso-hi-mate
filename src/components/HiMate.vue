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

        <div class="row row-side">

          <div class="img-side-container">
            <img alt="me" v-if="smallScreen" style="width: 50vw; height: auto" src="../assets/undraw_handcrafts_woman.png"/>
            <img alt="me" v-if="smallScreen" style="width: 20vw; height: auto; position: relative;" src="../assets/undraw_handcrafts_cat.png"/>
            <img alt="me" v-if="!smallScreen" class="img-side" src="../assets/undraw_handcrafts_woman.png"/>
            <img alt="cat" v-if="!smallScreen" class="img-side-cat" src="../assets/undraw_handcrafts_cat.png"/>
          </div>

          <div class="text-side-container">
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

        <div class="row row-side">

          <div v-if="smallScreen" class="img-side-container">
            <img alt="graph" style="width: 70vw; height: auto" src="../assets/undraw_handcrafts_analytics.png"/>
          </div>

          <div class="text-side-container">
            <h5> Experiences ⭐️</h5>
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
            <h5> Skills ⚙️ </h5>
            <p class="text-content">
              Who says computer scientist must say programming langage and technical skills, let’s see my main skills which I proficiency :
              <br>
              <br>
            </p>

            <div class="rating-container">

              <div class="skill-container">
                <p class="col-8 li-rating">Java</p>
                <v-rating class="col-4" half-increments background-color="orange lighten-3" color="orange" value="4.5" readonly x-small></v-rating>
              </div>
              <div class="skill-container">
                <p class="col-8 li-rating">SpringBoot</p>
                <v-rating class="col-4" half-increments background-color="orange lighten-3" color="orange" value="4.5" readonly x-small></v-rating>
              </div>
              <div class="skill-container">
                <p class="col-8 li-rating">Vue.js and React.js</p>
                <v-rating class="col-4" half-increments background-color="orange lighten-3" color="orange" value="4" readonly x-small></v-rating>
              </div>
              <div class="skill-container">
                <p class="col-8 li-rating">jQuery and Js</p>
                <v-rating class="col-4" half-increments background-color="orange lighten-3" color="orange" value="4.5" readonly x-small></v-rating>
              </div>
              <div class="skill-container">
                <p class="col-8 li-rating">Python</p>
                <v-rating class="col-4" half-increments background-color="orange lighten-3" color="orange" value="4" readonly x-small></v-rating>
              </div>
              <div class="skill-container">
                <p class="col-8 li-rating">Flask</p>
                <v-rating class="col-4" half-increments background-color="orange lighten-3" color="orange" value="3" readonly x-small></v-rating>
              </div>
              <div class="skill-container">
                <p class="col-8 li-rating">PostgreSql, MySql and SqlServer</p>
                <v-rating class="col-4" half-increments background-color="orange lighten-3" color="orange" value="4" readonly x-small></v-rating>
              </div>
              <div class="skill-container">
                <p class="col-8 li-rating">Flutter and Dart</p>
                <v-rating class="col-4" half-increments background-color="orange lighten-3" color="orange" value="4" readonly x-small></v-rating>
              </div>
              <div class="skill-container">
                <p class="col-8 li-rating">NodeJs and Express</p>
                <v-rating class="col-4" half-increments background-color="orange lighten-3" color="orange" value="4" readonly x-small></v-rating>
              </div>
              <div class="skill-container">
                <p class="col-8 li-rating">Git</p>
                <v-rating class="col-4" half-increments background-color="orange lighten-3" color="orange" value="5" readonly x-small></v-rating>
              </div>
              <div class="skill-container">
                <p class="col-12 li-rating" style="text-align: left !important;">And so much more 😉</p>
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

</style>
