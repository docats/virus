<template>
  <v-card flat max-width="widthCardSearch">
    <v-text-field
      :label="textValue1" 
      v-model="textConent"
    />


    <selectMulti 
      :labelSelectMulti="textValue2"
      :optionsSelectMulti="options"
      @valueTransport="multiSelectionTransporter"
    />


    <selectSingle
      :labelSelectSingle="textValue3"
      :optionsSelectSingle="options"
      @valueTransport="singleSelectionTransporter"
    />


    <v-card outlined class="px-2">
      {{ labelCardDatetime }}

      <tabsDuration
        @itemSelectedTransport="durationPickedGetter"
      />

      <v-row>
        <v-col cols="12" sm="6" >
          <DatetimePicker
            :datetimeDefault="datetimeFromInitiated"
            :labelDatetime="listLabelDayTime[0]"
            @datetimeTransport="fromDateSetter"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <DatetimePicker
            :datetimeDefault="datetimeToInitiated"
            :labelDatetime="listLabelDayTime[1]"
            @datetimeTransport="toDateSetter"
          />
        </v-col>
      </v-row>
    </v-card>

    <v-row justify="end">
      <v-btn class="mt-2 mr-2" color="success" @click="dataTransporter">
        <v-icon left>mdi-magnify</v-icon>
        搜尋
      </v-btn>
    </v-row>
  </v-card>
</template>

<script>
// components
import selectMulti from './cardSearch/selectMulti'
import selectSingle from './cardSearch/selectSingle'
import DatetimePicker from './DatetimePicker'
import tabsDuration from './cardSearch/tabsDuration'

export default {
  data() {
    return {
      nameRewardEvent: null,
      options: [
        '日式兩人麻將','大富翁','跑酷','德州撲克','跳棋','五子棋'
      ],
      selectedGame: [],
      textValue1: '獎勵包名稱',
      textValue2: '遊戲種類(複數多選)',
      textValue3: '遊戲種類(單選)', 

      textConent: null,
      selectedItem: null,
      // DateTime
      selectedDatetime: null,
      datetimeFrom: null,
      datetimeTo: null,
      unixTimestampLength: 10,
      listLabelDayTime: ['起始時間','截至時間']
    }
  },


  props:[
    'widthCardSearch',
    'labelSelectMulti', 'optionsSelectMulti',
    'labelSelectSingle', 'optionsSelectSingle',
    'labelCardDatetime',
    'labelDateTime', 'datetimeDefault'
  ],


  computed: {
    datetimeFromInitiated: function () {
      let datetime = new Date()
      switch(this.selectedDatetime) {
        case 0:
          datetime.setHours(0, 0, 0)
          break
        case 1:
          datetime.setDate(datetime.getDate() - 6)
          datetime.setHours(0, 0, 0, 0)
          break
        case 2:
          datetime.setDate(datetime.getDate() - datetime.getDay() - 7)
          datetime.setHours(0, 0, 0)
          break
        case 3:
          datetime.setDate(datetime.getDate() - datetime.getDay())
          datetime.setHours(0, 0, 0)
          break
        case 4:
          datetime.setDate(datetime.getDate() - 29)
          datetime.setHours(0, 0, 0, 0)
          break
        case 5:
          datetime.setDate(1) // 1st of the month
          datetime.setMonth(datetime.getMonth() - 1)
          datetime.setHours(0, 0, 0, 0)
          break
        case 6:
          datetime.setDate(1)
          datetime.setHours(0, 0, 0, 0)
          break
        default:
          datetime.setHours(0, 0, 0)
          break
      }
      return datetime
    },

    datetimeToInitiated: function () {
      let datetime = new Date()
      switch(this.selectedDatetime) {
        case 2:
          datetime.setDate(datetime.getDate() - datetime.getDay() - 1)
          datetime.setHours(23, 59, 59, 999)
          break
        case 3:
          datetime.setDate(datetime.getDate() - datetime.getDay() + 6)
          datetime.setHours(23, 59, 59, 999)
          break
        case 5:
          datetime.setDate(1)
          datetime.setHours(0, 0, 0, -1)
          break
        case 6:
          datetime.setMonth(datetime.getMonth() + 1, 1)// 1st day of next month
          datetime.setHours(0, 0, 0, -1)
          break
        default:
          datetime.setHours(23, 59, 59, 999)
          break
      }
      return datetime
    },
  },


  methods: {
    multiSelectionTransporter(updated) {
      this.selectedItem = updated
    },

    singleSelectionTransporter(updated) {
      this.selectedItem = updated
    },

    durationPickedGetter: function (updated) {
      this.selectedDatetime = updated
    },
     // trasnport datetime as unix timestamp
    fromDateSetter: function (datetime) {
      this.datetimeFrom = datetime
    },
    // trasnport datetime as unix timestamp
    toDateSetter: function (datetime) {
      this.datetimeTo = datetime
    },
    
    dataTransporter() {
      let obj = {}
      
      obj.name = this.textConent
      obj.content = this.selectedItem
      obj.datetimeFrom = this.datetimeFrom
      obj.datetimeTo = this.datetimeTo
      this.$emit('dataTransport', obj)
    }
  },
  

  components: {
    selectMulti,
    selectSingle,
    DatetimePicker,
    tabsDuration
  }
}
</script>

<style>

</style>