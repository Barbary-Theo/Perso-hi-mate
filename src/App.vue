<template>
  <v-app>
    <v-main>

      <MeBar/>
      <HiMate/>

    </v-main>
  </v-app>
</template>

<script>
import HiMate from './components/HiMate';
import MeBar from "@/components/MeBar";

export default {
  name: 'App',

  components: {
    MeBar,
    HiMate,
  },

  data: () => ({
    //
  }),
};
</script>
