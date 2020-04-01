<template>
  <v-select
    v-model="selectedOptions"
    :items="optionsSelectMulti"
    :label="labelSelectMulti"
    multiple
    dense
    chips
  >
    <template v-slot:prepend-item>
      <v-list-item
        ripple
        @click="btnToggler"
      >
        <v-list-item-action>
          <v-icon :color="selectedOptions.length > 0 ? 'indigo darken-4' : ''">{{ iconSeted }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>全選</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider class="mt-2"></v-divider>
    </template>
  </v-select>
</template>

<script>
export default {
  data() {
    return {
      selectedOptions: [],
    }
  },


  props:[ 'labelSelectMulti', 'optionsSelectMulti' ],


  computed: {
    options_allDetected() {
      return this.selectedOptions.length === this.optionsSelectMulti.length
    },

    options_someDetected() {
      return this.selectedOptions.length > 0 && !this.options_allDetected
    },

    iconSeted() {
      if (this.options_allDetected) return 'mdi-checkbox-marked'
      if (this.options_someDetected) return 'mdi-minus-box'
      return 'mdi-checkbox-blank-outline'
    },
  },

  
  watch: {
    selectedOptions(updated) {
      this.$emit('valueTransport', updated)
    }
  },


  methods: {
    btnToggler () {
      this.$nextTick(() => {
        if (this.options_allDetected) {
          this.selectedOptions = []
        } else {
          this.selectedOptions = this.optionsSelectMulti.slice()
        }
      })
    }
  },


  
}
</script>

<style>

</style>