<template>
  <v-list-item
    :to="ItemsDrawer.link"
  >
    
    <v-list-item-icon>
      <v-icon>{{ ItemsDrawer.icon }}</v-icon>
    </v-list-item-icon>
    
    <v-list-item-title>{{ ItemsDrawer.label }}</v-list-item-title>
   
  </v-list-item>
</template>

<script>
export default {
  props:['ItemsDrawer']
}
</script>

<style>
</style>