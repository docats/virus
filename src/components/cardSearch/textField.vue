<template>
  <v-text-field
    :label="labelTextField"
    v-model="valueModel"
  />
</template>

<script>
export default {
  data() {
    return {
      valueModel: null
    }
  },


  props: ['labelTextField'],

  watch: {
    valueModel(updated) {
      this.$emit('valueTransport', updated)
    }
  }
}
</script>

<style>

</style>