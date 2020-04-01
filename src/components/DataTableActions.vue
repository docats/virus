<template>
  <v-data-table
    :headers="defaultDataTableActions.listHeaders"
    :items="defaultDataTableActions.listData"
    sort-by="calories"
    disable-sort
    disable-filtering
    class="elevation-1 pb-12"
    :mobile-breakpoint="-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>{{ defaultDataTableActions.title }}</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        />
        <v-spacer/>
        <v-dialog v-model="isEditDialog" max-width="500px">
          <CardDetail
            v-if="selectedContent"
            :defaultCardDetail="defaultDataTableActions.listActions.Edit"
            :contentCardDetail="selectedContent"
            @dataTransport="dataEditTransporter"
            @dialogClose="dialogCloser"
          />
        </v-dialog>
      </v-toolbar>
    </template>

    <template v-slot:item.action="{ item }">
      <v-btn 
        color="warning"
        @click="itemEditor(item)"
      >
        <v-icon
          small
          class="mr-2"
        >
          mdi-pencil
        </v-icon>
        編輯
      </v-btn>
    </template>

    <template v-if="defaultDataTableActions.listData[0].content" v-slot:item.content="{ item }">
      <v-row v-if="item.content.tokenBronze">
        <v-chip color="#CD7F32">銅代幣: {{ item.content.tokenBronze }}</v-chip>
      </v-row>
      <v-row v-if="item.content.tokenGold">
        <v-chip color="#d4af37">金代幣: {{ item.content.tokenGold }}</v-chip>
      </v-row>
      <v-row v-if="item.content.raffleBronze">
        <v-chip color="red">銅抽獎包: {{ item.content.raffleBronze }}</v-chip>
      </v-row>
      <v-row v-if="item.content.raffleGold">
        <v-chip color="blue">金抽獎包: {{ item.content.raffleGold }}</v-chip>
      </v-row>
    </template>

    <template v-if="defaultDataTableActions.listData[0].duration" v-slot:item.duration="{ item }">
      <v-chip color="error" v-if="overdateSetter(item)">過期: </v-chip>
      {{datetimeRestructor(item)}}
    </template>

  </v-data-table>
</template>

<script>
// components
import CardDetail from './CardDetail'
// config
import listRewardsInfo from '@/views/config/listRewardsInfo'
// modules
import { TimestampDatestringTransfer } from '@/modules/DateTimes'

export default {
  data() {
    return {
      isEditDialog: false,
      
      selectedContent: null
    }
  },


  props: {
    defaultDataTableActions: {},

    // CardDetail
    defaultCardDetail: {
      type: Object,
    },

    contentCardDetail: {
      type: Object,
    },
  },


  computed: {
    
  },


  watch: {
    isEditDialog(updated) {
      if (updated == false) {
        this.selectedContent = null
      }
    }
  },

 

  methods: {
    itemEditor(item) {
      this.selectedContent = {}
      let content = item.content
      let keys = Object.keys(content)
      let list = []
      
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i]
        for(let j = 0; j < listRewardsInfo.length; j++) {
          let objNew = {name: null, num: null}
              
          if(key == listRewardsInfo[j].value) {
            objNew.name = listRewardsInfo[j].name
            objNew.num = content[key]
            list.push(objNew)
          }
        }
      }
      this.selectedContent.name = item.name
      this.selectedContent.content = list
      this.selectedContent.duration = item.duration
      this.isEditDialog = true
    },

    dialogCloser() {
      this.isEditDialog = false
    },

    datetimeRestructor(item) {
      let dates = item.duration.split('-')
      let dateStart = TimestampDatestringTransfer(dates[0])
      let dateEnd = TimestampDatestringTransfer(dates[1])
      return dateStart + ' ~ ' + dateEnd
    },

    overdateSetter(item) {
      let status = null
      let dates = item.duration.split('-')
      let dateEnd = Number(dates[1])
      let now = new Date()
      let nowTimestamp = Math.floor(now / 1000)
      
      if (dateEnd < nowTimestamp) {
        status = true
      } else {
        status = false
      }
      return status
    },

    dataEditTransporter(updated) {
      this.$emit('dataTransport', updated)
    }
  
  },

  components: { CardDetail }
}
</script>

<style>

</style>