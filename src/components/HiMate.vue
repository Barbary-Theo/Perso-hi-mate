<template>

  <div class="main">

    <BlueSide v-if="seeBlueSide"/>

    <OrangeSide v-if="seeOrangeSide"/>

    <div id="folio-side" class="folio-side">

      <div id="console-container" class="console-container translateX-animation">
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

    </div>

  </div>

</template>

<script>

import $ from 'jquery';
import OrangeSide from "@/components/OrangeSide";
import BlueSide from "@/components/BlueSide";
import {mdiBrightness1} from "@mdi/js";

export default {
  name: 'HiMate',
  components: {BlueSide, OrangeSide},
  data: () => ({
    icon: { mdiBrightness1 },
    seeOrangeSide: true,
    seeBlueSide: false,
    alreadyShown: false,
    intervalCommandLine: null,
    idEleToScroll: ["#console-container"],
    textInputed: ""
  }),

  methods: {

    isScrolledIntoView: (elem) => {
      let docViewTop = $(window).scrollTop();
      let docViewBottom = docViewTop + $(window).height();

      let elemTop =  $(elem).offset().top ;
      let elemBottom = elemTop + $(elem).height();

      return ((elemBottom - $(elem).height() * .25 >= docViewTop) && (elemTop + $(elem).height() * .25 <= docViewBottom));
    },

    initScrollAnimation: function () {
      $(window).on("scroll", () => {
        this.idEleToScroll.forEach((elem) => {
          if(!this.alreadyShown && this.isScrolledIntoView(elem)) {

            let halfScreenLessConsoleWidth = 100 * (($(elem).width() * 0.5) / $(window).width()) * 0.5;

            $(elem).css("margin-left", `${halfScreenLessConsoleWidth}vw`).css("opacity", 1);
            this.alreadyShown = true;
          }
          else if (this.alreadyShown && !this.isScrolledIntoView(elem)) {
            $(elem).css("margin-left", "0").css("opacity", 0);
            this.alreadyShown = false;
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
      else {
        this.treatementAfterEnterFunction(elem, `<p class="json-me" style="color: #9E3F3F"> &nbsp;&nbsp; > Unknow command : '${this.textInputed}'</p>`);
      }

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

.folio-side {
  background-color: white;
  height: 100vh;
}

.console-container {

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
  padding-right: 0.6vw;
  border-right: 2px solid grey;
  width: fit-content;
}

.container-row {
  margin-top: 15vh;
}

.ref-console {
  color: black !important;
  text-decoration: none;
}

</style>