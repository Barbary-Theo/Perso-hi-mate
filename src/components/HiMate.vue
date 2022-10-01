<template>

  <div class="main">

    <BlueSide v-if="seeBlueSide"/>

    <OrangeSide v-if="seeOrangeSide"/>

    <div id="folio-side" class="folio-side">

      <div class="console translateX-animation" id="console">
        <div class="menu-console">
          <div class="menu-console-button">
            <v-icon class="icon" color="red" x-small>{{ icon.mdiBrightness1 }}</v-icon>
            <v-icon class="icon" color="orange" x-small>{{ icon.mdiBrightness1 }}</v-icon>
            <v-icon class="icon" color="green" x-small>{{ icon.mdiBrightness1 }}</v-icon>
          </div>
          <div class="menu-console-text">Barbary</div>
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
    alreadyShown: false
  }),

  methods: {

    isScrolledIntoView: (elem) => {
      let docViewTop = $(window).scrollTop();
      let docViewBottom = docViewTop + $(window).height();

      let elemTop = $(elem).offset().top;
      let elemBottom = elemTop + $(elem).height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    },

    initScrollAnimation: function () {
      $(window).on("scroll", () => {
        if(!this.alreadyShown && this.isScrolledIntoView("#console")) {
          $("#console").css("transform", "translateX(200px)").css("opacity", 1);
          this.alreadyShown = true;
        }
        else if (this.alreadyShown && !this.isScrolledIntoView("#console")) {
          $("#console").css("transform", "translateX(0)").css("opacity", 0);
          this.alreadyShown = false;
        }
      });

    },

    initEvent: function () {
      this.initScrollAnimation();
    }

  },

  mounted: function () {
    document.title = '🌈 Barbary';
    this.initEvent()
  }

}
</script>

<style scoped>

.folio-side {
  background-color: white;
  height: 100vh;
  width: 100vw;
}

.console {
  background-color: #E7E7E7;
  margin-top: 15vh;
  height: 60vh;
  width: 50vw;
  color: white;
  border-radius: 1.4vh;
  border: 1px solid lightgrey;
  box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;
}

.menu-console {
  border-top-left-radius: 1.3vh;
  border-top-right-radius: 1.3vh;
  background-color: #FAFAFA;
  border-bottom: 1px solid lightgrey;
  height: 6%;
  text-align: center;
  align-items: center;
}

.menu-console-text {
  color: black;
  font-weight: bold;
  font-size: 1.5vh;
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
  transition-property: transform, opacity;
  opacity: 0;
  transition: .5s ease;
}

</style>