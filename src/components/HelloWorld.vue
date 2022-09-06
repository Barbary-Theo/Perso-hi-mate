<template>
  <v-container
    fluid
    style="height: 100% !important;"
  >
    <v-card>

      <v-card-text>
        <v-sheet>
          <v-sparkline
              @click="expand = !expand"
              :value="value"
              :gradient="gradient"
              :smooth="radius || false"
              :padding="padding"
              :line-width="width"
              :stroke-linecap="lineCap"
              :gradient-direction="gradientDirection"
              :fill="fill"
              :type="type"
              :auto-line-width="autoLineWidth"
              auto-draw
              :auto-draw-duration="duration">


          </v-sparkline>
        </v-sheet>

      </v-card-text>

    </v-card>
  </v-container>
</template>

<script>
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]

export default {
  name: 'HelloWorld',
  data: () => ({
    duration: 500,
    width: 0.5,
    radius: 3,
    padding: 4,
    lineCap: 'round',
    gradient: gradients[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false,
    timeOutAddValues: null,
    timeOutRefreshGraph: null,
    intervalValues: []
  }),
  methods: {

  },
  mounted: function () {

    this.timeOutAddValues = setInterval(() => {
        let random = Math.random() * 5.5;
        this.intervalValues.push(random);
        console.log(random)
    }, 1000)

    this.timeOutRefreshGraph = setInterval(() => {

        console.log(this.intervalValues);

        for(let i = 0 ; i < this.intervalValues.length ; i++) {
          this.value.push(this.intervalValues[i]);
        }

        this.intervalValues.splice(0, this.intervalValues.length);
        console.log("refreshed");
    }, 5000)



  },
  beforeDestroy() {
    clearTimeout(this.timeOutRefreshGraph);
    clearTimeout(this.timeOutAddValues);
  }
}
</script>
