<template>
  <v-row justify="center">
    <v-card
      center
    >
      <v-card-title>
        <span class="headline">AllRich EIP</span>
      </v-card-title>

      <br>

      <v-card-text>
        <p>Welcome to Enterprise Information Portal</p>
        <p>Sign in to start your session</p>

        <v-container v-if="!isLogout">
          <v-text-field
            label="員工編號"
            outlined
            append-icon="mdi-account"
            v-model="userAccount"
          />
        
          <v-text-field
            label="登入密碼"
            type="password"
            outlined
            v-model="userPassword"
            append-icon="mdi-lock"
            @keyup.enter="userLoginer"
          />
        </v-container>


        <v-card-actions>
          <v-spacer />
          <v-btn
            v-if="!isLogout"
            class="font-weight-bold"
            large
            @click="userLoginer"
            color="primary"
          >
            登入
          </v-btn>
        </v-card-actions>

        <br><br>
        <p>- OR -</p>
        <v-btn
          small
          filled
          color="error"
          class="mr-2"
        >
          補寄認證信
        </v-btn>
      
        <v-btn
          small
          filled
          color="warning"
          to="#"
        >
          忘記密碼
        </v-btn>
      </v-card-text>
    </v-card>
  </v-row>  
</template>

<script>
import { Login2 } from '@/services/modules/requestPOST'


export default {
  data() {  
    return {
      userAccount: null,
      userPassword: null,
    }
  },

  methods: {
    userLoginer() {
      // if (this.userAccount == null || this.userPassword == null) {
      //   alert('資料未填妥善')
      // } else {
        let promise = Login2(this.userAccount, this.userPassword)
        promise.then((value) => {
          console.log('Test:',value)
        })
      // }
      this.isLoginSwitcher()
    }, 

    userLogouter() {
    
    },

    isLoginSwitcher() {
      this.$emit('isLoginSwitch')
    }
  },


  computed: { 

  },


  props: ['dialogTitle', 'isLogout']
}
</script>

<style scoped>
::v-deep .font-weight-bold > span {
  font-size: 20px;
}

::v-deep p {
  text-align: center;
}

::v-deep .headline {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

</style>
