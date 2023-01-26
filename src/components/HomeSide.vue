<template>

  <div class="orange-side">

    <div class="to-row">
      <p class="date-orange" v-text="date"> </p>
    </div>

    <p class="hi"> Hello friend ! </p>

    <v-icon color="white" id="to-scroll" large :class="classeIcon">{{ icon.mdiChevronDown }}</v-icon>

    <svg id="svg-item" class="spacer-50" width="615" height="33" viewBox="0 0 615 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 17.9557C112.621 -1.37643 136 1.49999 173.5 18C198 29.5 224.743 37.3747 273.987 28.7991C336 18 366.867 1.71303 411 5.00001C452.5 8.09087 456.983 10.6351 500 19C534.914 25.7891 583.5 5.95697 614 1" stroke="white"/>
    </svg>

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
    intervalSvg: null
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

    initEvent: function () {
      $("#to-scroll").on("click", () => {
        window.scroll({top: window.innerHeight, left: 0, behavior: 'smooth'})
      })
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

.orange-side {
  /*background-color: #547A92;*/
  background-color: #549284;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  height: 100vh;
  width: 100vw;
}

.to-row {
  display: flex;
  flex-direction: row;
  z-index: 1;
}

.date-orange {
  color: white;
  font-size: 50px;
  padding-right: 2vh;
}

.smiley {
  font-size: 32px;
}

.hi {
  font-size: 25px;
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

.sus {
  position: absolute;
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

.spacer-50 {
  margin-top: 50vh !important;
}

</style>