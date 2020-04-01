<template>
  <v-card
    width="300"
    
  >
    <v-card color="primary">
      <v-row justify="center">
        <v-avatar
          color="teal"
          size="60"
          class="ma-2"
        >
          <img
            :src="InfoUser.srcAvatar"
          >
        </v-avatar>
      </v-row>
      <v-row justify="center">
        <p id="username"> {{ InfoUser.nameEn }} - {{ InfoUser.nameUser }}</p>
      </v-row>
      <v-row justify="center">
        <p class="userinfo"> Last Login IP: {{ InfoUser.ipLast }}</p>
      </v-row>
      <v-row justify="center">
        <p class="userinfo"> Last Login Time: {{ InfoUser.timeLast }}</p>
      </v-row>
    </v-card>
    <v-card class="pa-2">
      <v-row justify="end" class="pa-1 ma-1">
        <v-btn @click="Logouter">
          登出
        </v-btn>
      </v-row>
    </v-card>  
  </v-card>
</template>

<script>
export default {
  methods: {
    Logouter() {
      this.$emit('Logout')
    }
  },


  props: [ 'InfoUser' ]
}
</script>

<style scoped>
::v-deep {
  color: white
}

::v-deep #username{
  font-size: 24px;
}

::v-deep .userinfo{
  font-size: 12px;
}
</style>
