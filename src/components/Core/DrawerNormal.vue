<template>
  <v-navigation-drawer
    color="black"
    dark
    app
    v-model="statusDrawerGeted"
  >
    <v-card color="blue darken-4" height="24" class="pt-1 pb-11">
      <v-row align="center" justify="center" class="mt-4">
        <strong>AllRich EIP123</strong>
      </v-row>
    </v-card>

    <v-list
      shape
      single
    >
      
      <CardUserInfo
        :InfoUser="InfoUser"
      />

      <br>

      <div
        v-for="(itemDrawer, itemDrawerIndex) in ListDrawers"
        :key="itemDrawerIndex"
      >

        <ListItem
          v-if="!itemDrawer.isSub"
          :ItemsDrawer="itemDrawer"
        />

        <ListItemGroup 
          v-if="itemDrawer.isSub"
         :ItemsDrawer="itemDrawer"
        />

      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// components
import ListItem from './DrawerNormal/listItem'
import ListItemGroup from './DrawerNormal/listItemGroup'
import CardUserInfo from './DrawerNormal/userinfo'
export default {
  data(){
    return {
      isDrawerOpen: null
    }
  },


  props: {
    ListDrawers: {},

    ItemsDrawer: {
      type: Object,
    },

    InfoUser:{},
  },


  computed: {
    statusDrawerGeted:{
      get() {
        return this.$store.getters.isDrawerOpen
      },
      set(value) {
        this.isDrawerOpen = value
      }
      
    }
  },


  watch: {
    isDrawerOpen: function(update) {
      this.$store.commit('mutate_isDrawerOpen', update)
    }
  },


  components: {
    ListItem,
    ListItemGroup,
    CardUserInfo
  },
}
</script>

<style>

</style>