<template>
  <v-card
    dense
    flat
    class="mt-4 px-6"
  >
    <v-row justify="space-around">
      
      <p class="text-center">
        <v-icon left>{{ pathSeted.icon }}</v-icon>
        {{ pathSeted.title }}
      </p>
      <v-spacer />
      <p class="text-center">
        <v-icon left>mdi-home</v-icon>
        {{ pathSeted.path }}
      </p>
      
    </v-row>
  </v-card>
  
</template>

<script>
// Config
import listDrawers from '@/views/config/listDrawers'

export default {
  computed: {
    pathSeted() {
      let head = 'Home  >  '
      let obj = {}
      obj.path = ''
      obj.title = null
      obj.icon = null

      for(let i = 0; i < listDrawers.length; i++) {
        if(listDrawers[i].link == this.$route.path) {
          obj.path  = head + listDrawers[i].label
          obj.title = listDrawers[i].label
          obj.icon = listDrawers[i].icon
        }

        for(let j = 0; j < listDrawers[i].sub.length; j++) {
          if(listDrawers[i].sub[j].link == this.$route.path) {
            obj.path = head + listDrawers[i].label + '  >  ' + listDrawers[i].sub[j].label
            obj.title = listDrawers[i].sub[j].label
            obj.icon = listDrawers[i].sub[j].icon
          }
        }
        }
      return obj
    }
  },

  data:() => ({
    isMobile: false,
  }),

  beforeDestroy () {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', this.onResize, { passive: true })
      }
    },

    mounted () {
      this.onResize()
      window.addEventListener('resize', this.onResize, { passive: true })
    },

    methods: {
      onResize () {
        this.isMobile = window.innerWidth < 600
      },
    },

}
</script>

<style>

</style>