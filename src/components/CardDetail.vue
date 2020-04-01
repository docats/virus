<template>
  <v-card>
    <v-card-title>
      <span class="headline">新增 {{ defaultCardDetail.title }}</span>
    </v-card-title>

    <v-card-text>
      
      <v-text-field :label="defaultCardDetail.labelTextFieldTitle" v-model="selectedName" class="mr-12 pr-12"/>


      <div v-if="selectedList[0]">
        <v-row
          v-for="(itemSelectedList, indexSelectedList) in selectedList"
          :key="indexSelectedList"
        >
          <v-col cols="5">  
            <v-select
              class="pa-1"
              v-model="itemSelectedList.name"
              :label="defaultCardDetail.labelSelect"
              :items="listItems"
            />
          </v-col>

          <v-col cols="5">
            <v-text-field
              :label="defaultCardDetail.labelTextFieldContent"
              v-model="itemSelectedList.num"
              :rules="[rules.number, rules.zero, rules.float]"
              type="Number"
              class="pa-1"
            />
          </v-col>

          <v-col cols="2">
            <v-btn
              color="warning"
              small
              fab
              @click="itemRemover(indexSelectedList)"
            >
              <v-icon>mdi-minus</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </div>


      <v-row>
        <v-col cols="5">
        <v-select
          class="pa-1"
          v-model="itemNew.name"
          :items="selectionsUpdated"
        />
        </v-col>
        <v-col cols="5">
          <v-text-field
            class="pa-1"
            :label="defaultCardDetail.labelTextFieldContent"
            :rules="[rules.number]"
            v-model="itemNew.num"
          />
        </v-col>
        <v-col cols="2">
          <v-btn
            color="primary"
            small
            fab
            @click="itemAdder"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>


      <v-row class="mr-12">
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
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn color="warning" @click="dialogCloser">取消</v-btn>
      <v-btn color="green darken-1" dark @click="dataSaver">儲存</v-btn>
    </v-card-actions>
  </v-card>
 
</template>

<script>
// components
import DatetimePicker from './DatetimePicker'

export default {
  data() {
    return {
      selectItems: null,
      selectedList: [],
      selectedName: null,

      listItems: [],
      itemNew: {},
      duration: [],

      rules: this.defaultCardDetail.rulesInput,

      isOk: false,
      listLabelDayTime: ['起始時間','截至時間'],
     
    }
  },


  props: ['defaultCardDetail', 'contentCardDetail', 'datetimeDefault'],


  computed: {
    selectionsUpdated() {
      let list = [...this.listItems]

      for(let i = 0; i < this.selectedList.length; i++) {
        let index = list.indexOf(this.selectedList[i].name)
        list.splice(index, 1)
      }
      return list
    },

    datetimeFromInitiated: function () {  // 若無duration props進來，則使用今天零時
      let datetime = null
      if(this.duration.length > 0){
        datetime = new Date(this.duration[0])
      } else {
        datetime = new Date()
        datetime.setHours(0, 0, 0)
      }
      return datetime
    },

    datetimeToInitiated: function () {
      let datetime = null
      if(this.duration.length > 0){
        datetime = new Date(this.duration[1])
      } else {
        datetime = new Date()
        datetime.setHours(23, 59, 59, 999)
      }
      return datetime
    },
  },


  methods: {
    dialogCloser() {
      this.selectEraser()
      this.seletedName = null
      this.$emit('dialogClose')
    },

    dataSaver() {
      this.itemAdder()
      let obj = {}
      obj.name = this.selectedName
      obj.content = this.selectedList
      obj.datetimeFrom = this.datetimeFrom
      obj.datetimeTo = this.datetimeTo

      let indexLast = obj.content.length - 1

      if(obj.content[indexLast].name == '' || obj.content[indexLast].name == null){
        obj.content.splice(indexLast, 1)
      }

      if(obj.name != null && obj.name != ''){
        if(this.isOk) {
          this.$emit('dataTransport', obj)
          this.dialogCloser()
        }
      } else {
        alert('名稱未填妥')
      }
      
    },

     // trasnport datetime as unix timestamp
    fromDateSetter: function (datetime) {
      this.datetimeFrom = datetime
    },
    // trasnport datetime as unix timestamp
    toDateSetter: function (datetime) {
      this.datetimeTo = datetime
    },
    
    selectEraser: function() {
      this.selectItems = null
      this.selectedList = []
      this.listItems = []
      this.duration = []
      this.itemNew = { name: '', num: 0 }
    },

    selectInitiator() {
      this.selectEraser()
      
      if (this.contentCardDetail != null) {
        this.selectedName = this.contentCardDetail.name
        this.selectedList = this.contentCardDetail.content

        let durations = this.contentCardDetail.duration.split('-')
        this.duration.push(Number(durations[0] * 1000), Number(durations[1] * 1000))
      } 
      // 2 functions in this method
      for(let i = 0; i < this.defaultCardDetail.listData.length; i++) {
        // fill value into list
        this.listItems.push(this.defaultCardDetail.listData[i].name)

        // set first value
        if(this.defaultCardDetail.defaultData.id === this.defaultCardDetail.listData[i].id) {
          this.itemNew.name = this.defaultCardDetail.listData[i].name
        }
      }
    },

    itemAdder() {
      this.isOk = false
      let num = Number(this.itemNew.num)

      if (!isNaN(num) && num%1 === 0) {
        this.selectedList.push(this.itemNew)
        this.itemNew = { name: null, num: 0 }
        this.isOk = true
      } else {
        alert('數字格式輸入錯誤')
      }
    },

    itemRemover(index) {
      this.selectedList.splice(index, 1)
    },
  },


  created() {
    this.selectInitiator()
  },


  components: {
    DatetimePicker
  }
}
</script>

<style>

</style>