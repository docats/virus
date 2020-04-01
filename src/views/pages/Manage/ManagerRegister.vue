<template>
  <v-card
    width="500"
  >
    <form>
      <v-text-field
        v-model="userAccount"
        :counter="15"
        label="登入帳號"
        required
      />
      <v-text-field
        v-model="userNameTw"
        :counter="15"
        label="中文姓名"
        required
      />
      <v-text-field
        v-model="userNameEn"
        :counter="15"
        label="英文名稱"
        required
      />
      
      <v-radio-group v-model="radiosGender" row>
        <v-radio label="男" value="male"/>
        <v-radio label="女" value="female"/>
      </v-radio-group>

      <v-text-field
        v-model="userEmail"
        label="管理者信箱"
        required
      />

      <!-- <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="管理者信箱"
        required
      /> -->

      <v-btn
        class="ml-3"
        color="primary"
      >註冊</v-btn>
    </form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      userAccount: null,
      userNameTw: null,
      userNameEn: null,
      userGender: 1,
      radiosGender: 'male',
      userEmail: null,
    }
    
  }
}
</script>

<style>

</style>