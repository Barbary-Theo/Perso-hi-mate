<template>

  <div class="orange-side">

    <div class="to-row">
      <p class="date-orange" v-text="date"> </p>
      <p class="smiley" v-text="smileySelected"> </p>
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
    smiley: ['๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐คฃ', '๐', '๐', '๐', '๐', '๐', 'โบ', '๐', '๐', '๐', '๐ฅฐ', '๐', '๐', '๐', '๐', '๐ฅฒ', '๐คช', '๐', '๐', '๐', '๐ค', '๐', '๐ค', '๐ฅธ', '๐ง', '๐ค ', '๐ฅณ', '๐คก', '๐', '๐ถ', '๐', '๐', '๐', '๐คจ', '๐ค', '๐คซ', '๐คญ', '๐คฅ', '๐ณ', '๐', '๐', '๐ค', '๐ ', '๐ก', '๐คฌ', '๐', '๐', '๐', 'โน', '๐ฌ', '๐ฅบ', '๐ฃ', '๐', '๐ซ', '๐ฉ', '๐ฅฑ', '๐ช', '๐ฎ', '๐ฑ', '๐จ', '๐ฐ', '๐ฅ', '๐', '๐ฏ', '๐ฆ', '๐ง', '๐ข', '๐ญ', '๐คค', '๐คฉ', '๐ต', '๐ฅด', '๐ฒ', '๐คฏ', '๐ค', '๐ท', '๐ค', '๐ค', '๐คฎ', '๐คข', '๐คง', '๐ฅต', '๐ฅถ', '๐ด', '๐ค', '๐', '๐ฟ', '๐น', '๐บ', '๐ฉ', '๐ป', '๐', 'โ ', '๐ฝ', '๐ค', '๐', '๐บ', '๐ธ', '๐น', '๐ป', '๐ผ', '๐ฝ', '๐', '๐ฟ', '๐พ', '๐', '๐คฒ', '๐', '๐', '๐', '๐ค', '๐', '๐', '๐', 'โ', '๐ค', '๐ค', '๐ค', 'โ', '๐ค', '๐ค', '๐', '๐ค', '๐ค', '๐', '๐', '๐', '๐', 'โ', 'โ', '๐ค', '๐', '๐', '๐', '๐ค', '๐ช', '๐ฆพ', '๐',  'โ', '๐คณ', '๐', '๐ฆต', '๐ฆฟ', '๐ฆถ', '๐', '๐ฆท', '๐', '๐', '๐ฆป', '๐', '๐', '๐', '๐ง ', '๐ซ', '๐ซ', '๐ฆด', '๐ค', '๐ฅ', '๐ฃ', '๐ซ', '๐ถ', '๐ง', '๐ง', '๐ฆ', '๐ฉ', '๐ง', '๐จ', '๐ฑ', '๐ต', '๐ง', '๐ด', '๐ฒ', '๐', '๐', '๐บ', '๐ซ', '๐ญ', '๐ฌ',  '๐', 'โค', '๐งก', '๐', '๐', '๐', '๐', '๐ค', '๐ค', '๐ค', '๐', 'โฃ', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐ถ', '๐ฑ', '๐ญ', '๐น', '๐ฐ', '๐ป', '๐งธ', '๐ผ',  '๐จ', '๐ฏ', '๐ฆ', '๐ฎ', '๐ท', '๐ฝ', '๐ธ', '๐ต', '๐', '๐', '๐', '๐', '๐ฆ', '๐ฆง', '๐', '๐ง', '๐ฆ', '๐ค', '๐ฃ', '๐ฅ', '๐บ', '๐ฆ', '๐ฆ', '๐', '๐ด', '๐ฆ', '๐ฆ', '๐ฆ', '๐ฆ', '๐ฆฅ', '๐ฆฆ', '๐ฆซ', '๐ฆ', '๐', '๐', '๐ฆ', '๐', '๐ชฒ', '๐', '๐', '๐ฆ', '๐ชณ', '๐ท', '๐ธ', '๐ฆ', '๐ฆ', '๐ชฐ', '๐ชฑ', '๐ฆ ', '๐ข', '๐', '๐ฆ', '๐', '๐ฆ', '๐ฆ', '๐ฆ', '๐ฆ', '๐ฆช', '๐ ', '๐', '๐ก', '๐ฌ', '๐ฆ', '๐ฆญ', '๐ณ', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐ฆฌ', '๐ช', '๐ซ', '๐ฆ', '๐', '๐ฆ', '๐ฆ', '๐ฆฃ', '๐', '๐', '๐', '๐', '๐', '๐ฆ', '๐', '๐ฆ', '๐', '๐ฆ', '๐ฆ', '๐ฆข', '๐ฆ', '๐ฆฉ', '๐ฆ', '๐ฆ', '๐ฆค', '๐ชถ', '๐', '๐ฆฎ', '๐ฉ', '๐', '๐', '๐', '๐', '๐ฟ', '๐ฆจ', '๐ฆก', '๐ฆ', '๐พ', '๐', '๐ฒ', '๐ฆ', '๐ฆ', '๐ต', '๐', '๐ฒ', '๐ณ', '๐ด', '๐ชด', '๐ฑ', '๐ฟ', 'โ', '๐', '๐', '๐', '๐', '๐', '๐', '๐พ', '๐บ', '๐ป', '๐น', '๐ฅ', '๐ท', '๐ผ', '๐ธ', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', 'โญ', '๐', '๐ซ', 'โจ', 'โ', '๐ช', '๐', 'โ', '๐ค', 'โ', '๐ฅ', '๐ฆ', 'โ', '๐ง', 'โ', '๐ฉ', 'โก', '๐ฅ', '๐ฅ', 'โ', '๐จ', 'โ', 'โ', '๐ฌ', '๐จ', '๐ช', '๐ซ', '๐', 'โ', '๐ง', '๐ฆ', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐ซ', '๐', '๐ฅญ', '๐', '๐ฅฅ', '๐ฅ', '๐', '๐ฅ', '๐ซ', '๐', '๐ถ', '๐ซ', '๐ฅ', '๐ฅฌ', '๐ฅฆ', '๐ง', '๐ง', '๐ฝ', '๐ฅ', '๐ฅ', '๐ฅ', '๐ ', '๐ฐ', '๐ฅ', '๐ฏ', '๐', '๐ฅ', '๐ฅ', '๐ซ', '๐ฅจ', '๐ฅฏ', '๐ฅ', '๐ง', '๐ง', '๐', '๐', '๐ฅฉ', '๐ค', '๐ฅ', '๐ณ', '๐ฅ', '๐', '๐', '๐ญ', '๐', '๐', '๐ฅช', '๐ฎ', '๐ฏ', '๐ซ', '๐ฅ', '๐ง', '๐', '๐ฅ', '๐ฒ', '๐ซ', '๐ฅซ', '๐ง', '๐ง', '๐ฅ', '๐ฃ', '๐ฑ', '๐', '๐', '๐', '๐', '๐ฅ', '๐ข', '๐ก', '๐ง', '๐จ', '๐ฆ', '๐ฐ', '๐', '๐ง', '๐ฅง', '๐ฎ', '๐ญ', '๐ฌ', '๐ซ', '๐ฟ', '๐ฉ', '๐ช', '๐ฅ ', '๐ฅฎ', 'โ', '๐ต', '๐ซ', '๐ฅฃ', '๐ผ', '๐ฅค', '๐ง', '๐ง', '๐ง', '๐ฅ', '๐บ', '๐ป', '๐ท', '๐ฅ', '๐ฅ', '๐ธ', '๐น', '๐พ', '๐ถ', '๐ง', '๐ฅ', '๐ด', '๐ฝ', '๐ฅข', '๐ฅก', 'โฝ', '๐', '๐', 'โพ', '๐ฅ', '๐พ', '๐', '๐', '๐ฑ', '๐ฅ', '๐ช', '๐', '๐ธ', '๐ฅ', '๐', '๐', '๐', '๐ฅ', '๐ฅ', 'โณ', '๐น', '๐ฃ', '๐คฟ', '๐ฅ', '๐ฅ', 'โธ', '๐ฟ', '๐ท', 'โท', '๐', '๐ฝ', '๐', '๐', '๐ฅ', '๐ฅ', '๐ฅ', '๐', '๐ต', '๐', '๐ซ', '๐', '๐ช', '๐ญ', '๐จ', '๐ฌ', '๐ค', '๐ง', '๐ผ', '๐น', '๐ช', '๐ฅ', '๐ช', '๐ท', '๐บ', '๐ธ', '๐ช', '๐ป', '๐ฒ', '๐งฉ', 'โ', '๐ฏ', '๐ณ', '๐ง',  '๐ง', '๐ง', '๐ง',  '๐', '๐', '๐', '๐บ', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐ป', '๐', '๐', '๐', '๐', '๐ต', '๐ฒ', '๐ฆผ', '๐ฆฝ', '๐ด', '๐น', '๐ผ', '๐จ', '๐', '๐', '๐', '๐', '๐ก', '๐ ', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐ฉ', 'โ', '๐ซ', '๐ฌ', '๐ช', '๐บ', '๐ฐ', '๐', '๐ธ', '๐ถ', 'โต', '๐ฅ', '๐ค', 'โด', '๐ณ', '๐ข', 'โ', 'โฝ', '๐ง', '๐', '๐ฆ', '๐ฅ', '๐', '๐ก', '๐ข', '๐ ', '๐', '๐', '๐ผ', '๐ญ', 'โฒ', '๐', 'โฐ', '๐', '๐ป', '๐', '๐พ', '๐', 'โบ', '๐', '๐ฃ', '๐ค', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐ ', '๐', '๐', '๐', '๐', '๐ฐ', '๐ฏ', '๐', '๐ฝ', '๐ ', '๐ก', '๐', '๐ข', '๐ฌ', '๐ฃ', '๐ค', '๐ฅ', '๐ฆ', '๐จ', '๐ช', '๐ซ', '๐ฉ', '๐', '๐', 'โช', '๐', '๐', '๐', '๐', 'โฉ', 'โ', '๐ฑ', '๐ฒ', '๐ป', 'โจ', '๐ฅ', '๐จ', '๐ฑ', '๐ฒ', '๐น', '๐', '๐ฝ', '๐พ', '๐ฟ', '๐', '๐ผ', '๐ท', '๐ธ', '๐น', '๐ฅ', '๐ฝ', '๐', '๐', 'โ', '๐', '๐ ', '๐บ', '๐ป', '๐', '๐', '๐', 'โฑ', 'โฒ', 'โฐ', '๐ฐ', 'โณ', 'โ', '๐งฎ', '๐ก', '๐', '๐', '๐ก', '๐ฆ', '๐ฏ', '๐งฏ', '๐', '๐ข', '๐', '๐ธ', '๐ต', '๐ด', '๐ถ', '๐ท', '๐ฐ', '๐ช', '๐ณ', '๐งพ', '๐', 'โ', '๐ฆฏ', '๐งฐ', '๐ง', '๐ช', '๐จ', 'โ', '๐ ', 'โ', '๐ช', '๐ช', '๐ฉ', 'โ', 'โ', '๐ช', '๐ช', '๐งฑ', '๐ชจ', '๐ชต', '๐ซ', '๐งจ', '๐ฃ', '๐ช', '๐ก', 'โ', '๐ก', '๐ฌ', 'โฐ', '๐ชฆ', 'โฑ', '๐บ', '๐ฎ', '๐ช', '๐ฟ', '๐งฟ', '๐', '๐งฒ', 'โ', '๐งช', '๐งซ', '๐งฌ', '๐ญ', '๐ฌ', '๐ณ', '๐', '๐', '๐ฉธ', '๐ฉน', '๐ฉบ', '๐ก', '๐ท', '๐', '๐ฝ', '๐ช ', '๐ฟ', '๐', '๐', '๐ชฅ', '๐ช', '๐งด', '๐งป', '๐งผ', '๐งฝ', '๐งน', '๐งบ', '๐ชฃ', '๐', '๐', '๐ชค', '๐', '๐ช', '๐', '๐', '๐ช', '๐ช', '๐ช', '๐งณ', '๐', '๐ผ', '๐งญ', '๐บ', 'โฑ', '๐ฟ', '๐', '๐', '๐', '๐', '๐งง', '๐', '๐', '๐', '๐ช', '๐ช', '๐', '๐', '๐ฎ', '๐ช', 'โ', '๐ฉ', '๐จ', '๐ง', '๐', '๐ฎ', '๐ช', '๐ซ', '๐ฌ', '๐ญ', '๐ฆ', '๐ฏ', '๐ฅ', '๐ค', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐ณ', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐ฐ', '๐ชง', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', 'โ', '๐', '๐', '๐', '๐', '๐งท', '๐ชก', '๐งต', '๐งถ', '๐ชข', '๐', '๐', '๐', '๐', '๐', '๐', 'โ', '๐', 'โ', '๐', '๐', '๐', '๐', '๐', '๐', '๐ฅผ', '๐ฆบ', '๐งฅ', '๐', '๐', '๐', '๐', '๐ฅป', '๐ฉฑ', '๐', '๐ฉฒ', '๐ฉณ', '๐', '๐', '๐ฃ', '๐งฆ', '๐ฉด', '๐ ', '๐ก', '๐ข', '๐ฅฟ', '๐', '๐', '๐ฉฐ', '๐ฅพ', '๐งข', '๐', '๐ฉ', '๐', '๐', 'โ', '๐ช', '๐', '๐', '๐', '๐', '๐ผ', '๐', '๐ถ', '๐ฅฝ', '๐งฃ', '๐งค', '๐', '๐', 'โ'],
    smileySelected: '๐',
    classeIcon: 'icon-down ',
    displayingDateInterval: null,
    displayingEmojieInterval: null,
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
      const smileyListSize = this.smiley.length;
      document.title = '๐ Barbary';
      this.date = this.getDateToDisplay();

      this.displayingDateInterval = setInterval( () => {
        this.date = this.getDateToDisplay();
      }, 1000);

      this.displayingEmojieInterval = setInterval( () => {
        this.smileySelected = this.smiley[Math.round(Math.random() * smileyListSize)];
      }, 300);


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
    this.displayingEmojieInterval = null;
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