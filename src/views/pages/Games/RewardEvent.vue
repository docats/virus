<template>
  <v-card flat max-width="700">
    <ExpansionPanels
      :titleExpansionPanel="titleExpansionPanel"
    >
     
      <CardSearch />
     
    </ExpansionPanels>


    <v-btn
      large
      class="mt-2" 
      color="primary"
    >
      新增
    </v-btn>
  </v-card>
</template>

<script>
// components
import ExpansionPanels from '@/components/ExpansionPanels'
import CardSearch from '@/components/CardSearch'

export default {
  data() {
    return {
      numberExpand: null
    }
  },


  props: {
    titleExpansionPanel: {
      type: String,
      default: '搜尋'
    },

    widthMaxExpansionPanels: {
      type: Number
    }
  },


  components: {
    ExpansionPanels,
    CardSearch
  },
}
</script>

<style>

</style>