<template>
  <v-select
    v-model="selectedOptions"
    :items="optionsSelectSingle"
    :label="labelSelectSingle"
    dense
    chips
  />
</template>

<script>
export default {
  data() {
    return {
      selectedOptions: [],
    }
  },


  props:[ 'labelSelectSingle', 'optionsSelectSingle' ],

   
  watch: {
    selectedOptions(updated) {
      this.$emit('valueTransport', updated)
    }
  },





  
}
</script>

<style>

</style>