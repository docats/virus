<template>
  <v-card
    width="300"
    color="gray"
  >
    <v-row align="center">

      <v-col class="ml-8">
        <v-avatar
          color="teal"
          size="60"
        >
          <img
            :src="InfoUser.srcAvatar"
          >
        </v-avatar>
      </v-col>

      <v-col class="mr-12">
        <v-list dense>
          <v-list-item>
            {{ InfoUser.nameEn }}
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              Online
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row> 
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
