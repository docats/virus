<template>
  <v-app
    class="purple"
  >
    <v-content v-if="!isLogin">
      <Login
        @isLoginSwitch="statusLoginSwitcher"
      />
    </v-content>


    <v-content color="primary" v-if="isLogin">
      
      <Toolbar
        :InfoUser="InfoUser"
        @Logout="Logouter"
      />
     
      <DrawerSmall
        v-if="isDrawerOpenSmall"
        :ListDrawers="ListDrawers"
        :InfoUser="InfoUser"
      />

      <DrawerNormal
        v-if="!isDrawerOpenSmall"
        :ListDrawers="ListDrawers"
        :InfoUser="InfoUser"
      />

      
      
      <Header />
      
      <CoreView
        class="ma-2 pa-4"
      />

      <Coco />

      <Covid />

      
      

      <Footer /> 

      
     
    </v-content>

  

  </v-app>
</template>

<script>
// Components
import DrawerNormal from '@/components/Core/DrawerNormal'
import DrawerSmall from '@/components/Core/DrawerSmall'
import Toolbar from '@/components/Core/Toolbar'
import Header from '@/components/Core/Header'
import CoreView from '@/components/Core/View'
import Footer from '@/components/Core/Footer'
import Coco from '@/components/Core/Coco'
import Covid from '@/components/Core/Covid'

// Config
import listDrawers from './config/listDrawers'
// Pages
import Login from './core/Login'




export default {
  data() {
    return {
      // isLogin: false,
      isLogin: true,
      isDrawerOpen: null,
      isNormalScreen: false,
      isDrawerOpenSmall: false,
    }
  },
 

  props: {
    ListDrawers: {
      type: Array,
      default: () => listDrawers
    },

    InfoUser: {    //path based by whole project
      type: Object,
      default: () => ({
        nameUser: 'docats',
        nameEn: 'Docats',
        ipLast: '127.0.0.1',
        timeLast: '2020-02-26 13:16:55',
        srcAvatar: 'https://miro.medium.com/max/400/1*wqYF-8Dmh7LhtLkKfERc3Q.png'
      })
    }
  },


  computed: {
    statusDrawerGeted() {
      return this.$store.getters.isDrawerOpen
    }
  },


  watch:{
    statusDrawerGeted(updated) {
      if(updated === false) {
        if(this.isNormalScreen === true) {
          this.isDrawerOpenSmall = true
        }
      }else {
        this.isDrawerOpenSmall = false
      }
    }
  },


  methods: {
    statusLoginSwitcher() {
      this.isLogin = true
    },

    statusDrawersSetter() {
      let condition =  window.innerWidth
      if(condition > 800) {
        this.$store.commit('mutate_isDrawerOpen', true)
        this.isNormalScreen = true
      } else {
        this.$store.commit('mutate_isDrawerOpen', false)
        this.isNormalScreen = false
      }
    },

    Logouter() {
      this.isLogin = false
    }
  },


  created(){
    this.statusDrawersSetter()
  },


  components: {
    DrawerNormal,
    DrawerSmall,
    Toolbar,
    Header,
    CoreView,
    Footer,
    Login,
    Coco,
    Covid
  },
}

</script>

<style scoped>
.v-application {
    font-family: "Microsoft JhengHei", "Roboto", sans-serif;
    line-height: 1.5;
}

.AA{
  color:blueviolet;
  text-align: center;
  font-size: 1.625rem;
}
</style>