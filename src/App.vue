<template>
  <v-app>
    <v-main>
      <HiMate/>
    </v-main>
  </v-app>
</template>

<script>
import HiMate from './components/HiMate';

export default {
  name: 'App',

  components: {
    HiMate,
  },

  data: () => ({ }),
};
</script>
