<template>

  <div class="main">

    <BlueSide v-if="seeBlueSide"/>

    <OrangeSide v-if="seeOrangeSide"/>

    <div id="folio-side" class="folio-side">

      <div class="test translateX-animation" id="test">
        <p>oui</p>
      </div>

    </div>

  </div>

</template>

<script>

import $ from 'jquery';
import OrangeSide from "@/components/OrangeSide";
import BlueSide from "@/components/BlueSide";

export default {
  name: 'HiMate',
  components: {BlueSide, OrangeSide},
  data: () => ({
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
        if(!this.alreadyShown && this.isScrolledIntoView("#test")) {
          $("#test").css("transform", "translateX(200px)").css("opacity", 1);
          this.alreadyShown = true;
        }
        else if (this.alreadyShown && !this.isScrolledIntoView("#test")) {
          $("#test").css("transform", "translateX(0)").css("opacity", 0);
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

.test {
  background-color: black;
  margin-top: 15vh;
  height: 200px;
  width: 200px;
  color: white;
}

.translateX-animation {
  transition-property: transform, opacity;
  opacity: 0;
  transition: .5s ease;
}

</style>