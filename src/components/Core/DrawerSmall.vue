<template>
  <v-navigation-drawer
    mini-variant
    dark
    app
  >
    <v-card color="blue darken-4" height="24" class="pt-1 pb-11">
      <v-row align="center" justify="center" class="mt-4">
        <strong>EIP</strong>
      </v-row>
    </v-card>

    <v-avatar
      color="teal"
      size="40"
      class="ma-2"
    >
      <img
        :src="InfoUser.srcAvatar"
      >
    </v-avatar>
    

    <v-divider />


    <v-list-item
      v-for="(itemDrawer, itemDrawerIndex) in ListDrawers"
      :key="itemDrawerIndex"
    > 
      <v-menu
        right
        offset-x
        open-on-hover
        close-on-content-click
        color="black"
      >
        <template v-slot:activator="{ on }">
          <v-list-item-icon
            dark
            v-on="on"
          >
            <v-icon>{{ itemDrawer.icon }}</v-icon>
          </v-list-item-icon>
        </template>

        <v-card
          dark
          class="ml-4"
        > 
          <v-list dense>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>
                    {{ itemDrawer.icon }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                {{ itemDrawer.label }}
              </v-list-item-title>
            </v-list-item>
      
            <v-divider />

            <v-card color="grey darken-3">
              <v-list-item
                v-for="(itemList, indexList) in itemDrawer.sub"
                :key="indexList"
                :to="itemList.link"
                link
              >
                <v-list-item-icon>
                  <v-icon>{{ itemList.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  {{ itemList.label }}
                </v-list-item-title>      
              </v-list-item>
            
            </v-card>
          </v-list>
        </v-card>

      </v-menu>
    </v-list-item>

  </v-navigation-drawer>
</template>

<script>

export default {
  data(){
    return {
      isOpen: true,
    }
  },


  props: {
    ListDrawers: {},
    InfoUser:{},
  }
}
</script>

<style>

</style>