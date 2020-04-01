<template>
  
  
    <v-simple-table  
     class="mx-auto mt-6"
     cols="12"
     sm="6"
    >
      <template v-slot:default>
        <thead>
          <tr><h1>全球武漢肺炎概況</h1></tr>
          <tr>
            <th class="text-left">國家</th>
            <th class="text-left">確診人數</th>
            <th class="text-left">死亡人數</th>
            <th class="text-left">康復人數</th>
            <th class="text-left">最後更新日期</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in stats" :key="index">
            <td>{{ item.country }}</td>
            <td>{{ item.cases.total }}</td>
            <td>{{ item.deaths.total }}</td>
            <td>{{ item.cases.recovered }}</td>
            <td>{{ item.day }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  <!-- <v-card>
    <div v-for="(item, index) in stats" :key="index">
      {{ item.country }}
    </div>
  </v-card> -->

</template>

<script>
import { Login2 } from '@/services/modules/requestPOST'
export default {
  data () {
    return{

      stats: null
    }
    
  },

  methods: {
      userLoginer() {
      // if (this.userAccount == null || this.userPassword == null) {
      //   alert('資料未填妥善')
      // } else {
        let promise = Login2()
        promise.then((value) => {
          // console.log('Test:', value.data.response)
          this.stats = value.data.response
        })
      // }
      
    }, 
  },

  mounted() {
    this.userLoginer()
  }
}

</script>

<style scoped>


</style>