<template>
  <v-card :max-width="defaultExpansionPanel.widthMax">
    <v-expansion-panels v-model="numberExpand">
      <v-expansion-panel>

        <v-expansion-panel-header>
          <strong>
            {{ defaultExpansionPanel.title }}
          </strong>  
          <template v-slot:actions v-if="numberExpand == null">
            <v-icon color="green darken-3">mdi-plus</v-icon>
          </template>
          <template v-slot:actions v-else>
            <v-icon color="red">mdi-minus</v-icon>
          </template>
        </v-expansion-panel-header>

        <v-expansion-panel-content>

          <slot>
            
            <!-- Slot Content -->
            
          </slot>

        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      numberExpand: 0
    }
  },


  props:['defaultExpansionPanel']
}
</script>

<style>
.v-expansion-panel-header{
  font-size: 20px;
  font-weight: 900;
}
</style>

