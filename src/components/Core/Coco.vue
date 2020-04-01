<template>
 <div class="text-center">
    <v-btn class="hello"
      dark
      color="red darken-2"
      @click="snackbar = true"
    >
      打開操作小秘訣
    </v-btn>

    <v-snackbar
      v-model="snackbar"
      :multi-line="multiLine"
    >
      {{ text }}
      <v-btn
        color="red"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>

</template>

<script>

export default {
  data: () => ({
      multiLine: true,
      snackbar: false,
      text: '點選左側選單，管理每個項目',
    }),
  }

</script>

<style scoped>
.hello{
  background:#000;
}

</style>