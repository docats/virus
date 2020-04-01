<template>
<v-tabs
  show-arrows
  center-active
  color="white"
  background-color="grey"
  v-model="itemSelected"
  @change="itemSelectedTransporter"
>
  <v-tab
    v-for="(navItem, navItemKey) in navDurations"
    :key="navItemKey"
  >
    {{ navItem }}
  </v-tab>
</v-tabs>
</template>

<script>
export default {
  data() {
    return {
      itemSelected: null,
      navDurations: [ '今日', '過去 7 日','上週','這周','過去30天','上個月','這個月']
    }
  },

  methods: {
    itemSelectedTransporter: function() {
      this.$emit('itemSelectedTransport', this.itemSelected)
    }
  }

}
</script>

<style>

</style>