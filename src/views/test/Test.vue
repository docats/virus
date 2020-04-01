<template>
  <v-card
    class="mx-auto"
    max-width="1000"
  >

  <GameCanve/>
   
  </v-card>
</template>

<script>
// components
import GameCanve from '@/components/GameCanve'

export default {
  data() {
    return {
      numberExpand: null
    }
  },

  props:{
    widthMaxExpansionPanels: {
      type: Number
    }
  },
    
  components: {
  GameCanve
  },

}








</script>

<style>

</style>