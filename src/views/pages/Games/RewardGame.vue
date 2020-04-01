<template>
  <v-card flat max-width="700">
    <ExpansionPanels
      :titleExpansionPanel="titleExpansionPanel"
    >
     
      <CardSearch />
     
    </ExpansionPanels>

    <DatetimePicker/>

    <GameCanve/>

  

    <v-btn
      large
      class="mt-2" 
      color="primary"
    >
      我的最愛
    </v-btn>
  </v-card>
</template>

<script>
// components
import ExpansionPanels from '@/components/ExpansionPanels'
import CardSearch from '@/components/CardSearch'
import DatetimePicker from '@/components/DatetimePicker'
import GameCanve from '@/components/GameCanve'

export default {
  data() {
    return {
      numberExpand: null
    }
  },

  props: {
    titleExpansionPanel: {
      type: String,
      default: '你好'
    },

    widthMaxExpansionPanels: {
      type: Number
    }
  },


  components: {
    ExpansionPanels,
    CardSearch,
    DatetimePicker,
    GameCanve
  },
}
</script>

<style>
.AA{
  color:rgb(255, 94, 0);
  text-align: center;
  font-size: 3rem;
}

</style>