<template>
  <v-list-group
    :prepend-icon="ItemsDrawer.icon"
    v-model="itemDrawer"
  > 

    <template v-slot:activator>
      <v-list-item-title>{{ ItemsDrawer.label }}</v-list-item-title>
    </template>
    
    
    <v-list-item
      class="pl-12"
      v-for="(itemDrawer, keyDrawer) in ItemsDrawer.sub"
      :key="keyDrawer"
      :to="itemDrawer.link"
      link
    >
      <v-list-item-icon>
        <v-icon>{{ itemDrawer.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-title>
        {{ itemDrawer.label }}
      </v-list-item-title>

    </v-list-item>
    
    
  </v-list-group>
</template>

<script>
export default {
  data() {
    return {
      itemDrawer: null
    }
  },


  props: ['ItemsDrawer'],

}
</script>

<style>

</style>