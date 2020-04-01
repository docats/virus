<template>
  <v-app-bar
    dense
    dark
    color="primary"
  >
    <v-btn
      icon
      @click="statusDrawersSwitcher"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <strong
      v-if="!statusDrawer"
      class="mt-1 pl-8"
    >
      AllRich EIP
    </strong>

    <v-spacer />

    <!-- 語言選擇預備
    <v-select
      v-model="labelLocale"
      :items="locales"
      outlined
      class="px-3"
      menu-props="auto"
      :label="$t('__Language')"
      hide-details
      single-line 
    /> -->
  

    <v-menu bottom offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
        >
          <v-avatar
            color="teal"
            size="30"
            class="mr-3"
          >
            <img
              :src="InfoUser.srcAvatar"
            >
          </v-avatar>
          <span>{{ InfoUser.nameEn }}</span>
        </v-btn>
      </template>

      <UserinfoCard
        :InfoUser="InfoUser"
        @Logout="Logouter"
      />
    </v-menu>
    
  </v-app-bar>

</template>

<script>
import UserinfoCard from './Toolbar/userinfo'

export default {
  data: () => ({
    isShowLoginForm: false,
    labelLocale: '',
    locales: ['English','中文'],
    
  
    accoutItems: [
      {
        label: 'Log in',
        link:'Login'
      },
      {
        label: 'Log in',
        link:''
      },
      {
        label: 'Log in',
        link:''
      }
    ],
    
  }),


  props: {
    
    isLogout: {
      type: Boolean,
      default: true
    },

    InfoUser: {}
  },


  computed: {
    usernameInitiated: function() {
      return localStorage.account
    },

    statusDrawer() {
      return this.$store.getters.isDrawerOpen
    }
  },


  watch: {
    labelLocale(updated) {
      switch(updated) {
        case 'English':
          this.$i18n.locale = 'en'
          localStorage.locale = 'en'
          break
        case '中文':
          this.$i18n.locale = 'tw'
          localStorage.locale = 'tw'
          break
      }
    }
  },

  
  methods: {
    resetDialogLogin: function() {
      this.isDialogLogin = false
    },

    resetDialogLogout: function() {
      this.isDialogLogout = false
    },

    openLogin: function() {
      this.isDialogLogin = true
      this.isLogIn = true
    },

    openLogout: function() {
      this.isDialogLogout = true
      this.isLogIn = false
    },

    localLocaleSetter: function() {
      if(localStorage.locale === 'en') {
        this.labelLocale = 'English'
      } else if(localStorage.locale === 'tw') {
        this.labelLocale = '中文'
      }
    },

    statusDrawersSwitcher() {
      let status = this.statusDrawer
      this.$store.commit('mutate_isDrawerOpen',!status)
    },

    Logouter() {
      this.$emit('Logout')
    }
  },


  mounted() {
    this.localLocaleSetter()
  },


  components: { 
    UserinfoCard 
  },
}
</script>

<style>


</style>
