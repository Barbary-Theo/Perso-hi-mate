<template>
  <v-app>
    <v-main>

      <MeBar/>
      <HelloWorld/>

    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import MeBar from "@/components/MeBar";

export default {
  name: 'App',

  components: {
    MeBar,
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
