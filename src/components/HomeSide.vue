<template>

  <div class="black-side">

      <div class="button-container">

          <div class="btn-arcade">
              <v-icon @click="openLinkedin" small color="white">mdi-linkedin</v-icon>
          </div>

          <div class="btn-arcade">
              <v-icon @click="openGitHub" small color="white">mdi-github</v-icon>
          </div>

          <div class="btn-arcade">
              <v-icon @click="openGitLab" small color="white">mdi-gitlab</v-icon>
          </div>

      </div>

      <div class="spacer-30 flex-evenly">
          <div>
              <h1 class="presentation">Hi,</h1>
              <h1 class="presentation">I'm <span style="text-decoration: underline; padding: 10px;">Théo Barbary</span></h1>
              <h1 class="presentation">A simple software engineer.</h1>
          </div>

          <div style="width: fit-content;">
              <v-avatar size="200" class="avatar avatar-style" @mouseover="tst()" rounded>
                  <img src="../assets/me.png" alt="Hi, it's me">
              </v-avatar>
          </div>
      </div>

      <div class="flex-center-100 cursor padding" @click="scrollToInformation">
          <v-icon color="white" id="to-scroll" large :class="classeIcon">{{ icon.mdiChevronDown }}</v-icon>
      </div>

      <div class="flex-center-100 absolute">
        <svg id="svg-item" class="spacer-50" width="615" height="33" viewBox="0 0 615 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 17.9557C112.621 -1.37643 136 1.49999 173.5 18C198 29.5 224.743 37.3747 273.987 28.7991C336 18 366.867 1.71303 411 5.00001C452.5 8.09087 456.983 10.6351 500 19C534.914 25.7891 583.5 5.95697 614 1" stroke="white"/>
        </svg>
      </div>

  </div>

</template>

<script>
import {mdiChevronDown} from "@mdi/js";
import $ from "jquery";

export default {
  name: "OrangeSide",
  components: {},
  data: () => ({
    icon: { mdiChevronDown },
    date: null,
    classeIcon: 'icon-down ',
    displayingDateInterval: null,
    intervalSvg: null,
    hover: false,
  }),

  methods: {

    getDateToDisplay: () => {
      let date = new Date();

      let hour = date.getHours().toString();
      let minute = date.getMinutes().toString();
      let second = date.getSeconds().toString()

      if(hour.length === 1) {
        hour = "0" + hour;
      }
      if(minute.length === 1) {
        minute = "0" + minute;
      }
      if(second.length === 1) {
        second = "0" + second;
      }

      return hour + ":" + minute + ":" + second;
    },

    doAnimationScrollDown: function ()  {

      this.animationScrollDownInterval = setTimeout(() => {
        this.classeIcon = this.classeIcon.replace(" translate-animationY-bottom", "");
        this.classeIcon += " translate-animationY-top"

        this.animationScrollDownInterval = setTimeout(() => {
          this.classeIcon = this.classeIcon.replace(" translate-animationY-top", "");
          this.classeIcon += " translate-animationY-bottom"

          this.doAnimationScrollDown();

        }, 500)

      }, 500)

    },

    initParams: function () {
      document.title = '🌈 Barbary';
      this.date = this.getDateToDisplay();

      this.displayingDateInterval = setInterval( () => {
        this.date = this.getDateToDisplay();
      }, 1000);

    },

      openLinkedin: () => {
          window.open("https://www.linkedin.com/in/théo-barbary-047656201/", "_blank")
      },

      openGitLab: () => {
          window.open("https://gitlab.com/Barbary-Theo", "_blank")
      },

      openGitHub: () => {
          window.open("https://github.com/Barbary-Theo", "_blank")
      },

    initEvent: function () {
      $("#to-scroll").on("click", () => {
        this.scrollToInformation();
      })
    },

    scrollToInformation: function () {
        window.scroll({top: window.innerHeight, left: 0, behavior: 'smooth'})
    },

    treatementSvg: function () {

      let selector = $("#svg-item");
      selector.show();
      selector.addClass("fillSvg");

      setTimeout( () => {
        selector.hide();
        selector.removeClass("fillSvg");
      }, 3000);

    },

    eventSvg: function () {
      $("#svg-item").hide();
      this.intervalSvg = setInterval(() => { this.treatementSvg(); }, 4000);
    },

      tst: function () {
          this.hover = $(window).width() > 850;
      }

  },

  mounted: function () {
    this.initParams();
    this.initEvent();
    this.eventSvg();
    this.doAnimationScrollDown();
  },

  beforeDestroy() {
    this.displayingDateInterval = null;
    this.intervalSvg = null;
  }


}
</script>

<style scoped>

.black-side {
  background-color: #171717;
  display: flex;
  flex-direction: column;
  color: white;
  height: 100vh;
  width: 100vw;
}

.icon-down {
  position: absolute;
  top: 93vh;
}

.translate-animationY-top {
  transition: transform 0.5s linear;
  transform: translateY(-0.6vh);
}

.translate-animationY-bottom {
  transition: transform 0.5s ease;
  transform: translateY(0.6vh);
}

#svg-item {
  position: absolute;
  height: 1000vh;
  width: 100vw;
  stroke-dasharray: 624;
  z-index: 0;
}

.fillSvg {
  animation: 3s fillSvg linear;
}

@keyframes fillSvg {
  0% {
    stroke-dashoffset: 624;
  }
  40% {
    stroke-dashoffset: 0;
  }
  60% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 624;
  }
}

.avatar-style {
    border: 1px solid white;
    border-radius: 5px !important;
    text-transform: uppercase;
    font-weight: 800;
    box-shadow: 6px 6px white !important;
    text-decoration: none;
    line-height: 21px;
    font-family: "Nunito Sans", sans-serif;
    transition: all .05s linear;

}

.avatar-style:hover {
    transform: translate(-1px, -1px);
    box-shadow: 8px 8px white !important;
}

.avatar-style:active {
    transform: translate(1px, 1px) !important;
}


.avatar {
    z-index: 200;
    height: auto !important;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
}

@media only screen and (max-width: 550px) {

    .flex-evenly {
        display: flex !important;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .presentation {
        padding: 0 10vw !important;
        font-size: 30px !important;
        line-height: 30px !important;
        letter-spacing: -0.0833333vw !important;
        font-weight: bold !important;
    }

}

@media only screen and (min-width: 551px) and (max-width: 899px) {

    .flex-evenly {
        display: flex !important;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .presentation {
        font-size: 40px !important;
        line-height: 40px !important;
        letter-spacing: -0.0833333vw !important;
        padding-right: 1.33333vw !important;
        font-weight: bold !important;
    }

}

@media only screen and (min-width: 900px) {

    .flex-evenly {
        display: flex !important;
        justify-content: space-evenly;
    }

    .spacer-30 {
        margin-top: 30vh !important;
    }

    .presentation {
        font-size: 4vw !important;
        line-height: 4.66667vw !important;
        letter-spacing: -0.0833333vw !important;
        padding-right: 1.33333vw !important;
        font-weight: bold !important;
    }

}

.flex-center-100 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.absolute {
    position: absolute;
    top: 75vh;
}

.cursor {
    cursor: pointer !important;
}

.padding {
    z-index: 200;
    padding: 10px;
}

.button-container {
    position: absolute;
    top: 2vh;
    left: 2vh;
    display: flex;
}

.btn-arcade {
    z-index: 200;
    border: 2px solid white;
    border-radius: 0;
    color: white;
    display: block;
    padding: 10px 10px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 800;
    word-wrap: none;
    box-shadow: 2px 2px 0 white;
    text-decoration: none;
    line-height: 10px;
    font-family: "Nunito Sans", sans-serif;
    margin-top: 7px !important;
    transition: all .1s ease;
    cursor: pointer;
    margin-right: 1vw;
}

.btn-arcade:hover {
    transform: translate(-1px, -1px);
    box-shadow: 4px 4px white !important;
}

.btn-arcade:active {
    transform: translate(1px, 1px) !important;
}

</style>