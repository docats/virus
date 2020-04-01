<template>
  <v-card flat>
    <ExpansionPanels
      :defaultExpansionPanel="defaultExpansionPanel"
    >
     
      <CardSearch
        :labelCardDatetime="labelCardDatetime"
        @dataTransport="dataCardSearchTransporter"
      />
     
    </ExpansionPanels>

    <v-dialog v-model="isDialogCreate" max-width="500px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" large
          class="my-2" 
          v-on="on"
        >
          新增
        </v-btn>
      </template>
      <CardDetail
        :defaultCardDetail="defaultCardDetail"
        @dataTransport="dataBtnTransporterCreate"
        @dialogClose="dialogCloser"
      />
    </v-dialog>

    <DataTableActions
      :titleDataTableActions="titleDataTableActions"
      :listHeaderDataTable="listHeaderDataTable"
      :listInfoDataTable="listInfoDataTable"
      :defaultDataTableActions="defaultDataTableActions"
      @dataTransport="dataBtnTransporterEdit"
    />

  </v-card>
</template>

<script>
// components
import ExpansionPanels from '@/components/ExpansionPanels' //載入 ExpansionPanels，命名 ExpansionPanels
import CardSearch from '@/components/CardSearch'
import CardDetail from '@/components/CardDetail'
import DataTableActions from '@/components/DataTableActions'
// config
import listHeaderDataTable from '../../config/listHeadersDataTable'
import listRewardsInfo from '../../config/listRewardsInfo'
// testData
import testDataList from '../../test/listPackageRewards'


export default {
  data() {
    return {
      numberExpand: null,
      fromDateTime: null,
      toDateTime: null,

      isDialogCreate: false,
    }
  },


  props: {
    // CardSearch
    defaultExpansionPanel : {
      type: Object,
      default: () => ({
        title: '你好',
        widthMax: 700
      })
    },
        
    labelCardDatetime: {
      type: String,
      default: '領取時間:'
    },

    // CardDetail
    defaultCardDetail: {
      type: Object,
      default: () => ({
        title: '遊戲獎勵包',
        labelSelect: '獎勵物品',
        labelTextFieldTitle: '獎勵包名稱',
        labelTextFieldContent: '數量',
        defaultData: { 
          id: 3 
        }, // 不帶任一數，須代入id為0
        rulesInput: {
          number: value => !isNaN(Number(value)) || '無效輸入',
          zero: value => value > 0 || '需輸入大於零',
          float: value => value%1 === 0 || '不可輸入分數',
        },
        listData: listRewardsInfo
      })
      
    },

    // DataTableActions
    defaultDataTableActions: {
      type: Object,
      default: () => ({
        title: '群富獎勵包',
        listHeaders: listHeaderDataTable.Main.RewardPackage,
        listData: testDataList,
        listActions: {
          Edit: {
            title: '遊戲獎勵包',
            labelSelect: '獎勵物品',
            labelTextFieldTitle: '獎勵包名稱',
            labelTextFieldContent: '數量',
            defaultData: { id: 0 }, // 不帶任一數，須代入id為0
            rulesInput: {
              number: value => !isNaN(Number(value)) || '無效輸入',
              zero: value => value > 0 || '需輸入大於零',
              float: value => value%1 === 0 || '不可輸入分數',
            },
            listData: listRewardsInfo
          }
        }
      })
    }
  },


  methods: {
    dataCardSearchTransporter(updated) {
      console.log('@todo dataCardSearchTransporter:', updated)
    },

    dataBtnTransporterCreate(updated) {
      console.log('@todo dataBtnCreate:',updated)
    },

    dataBtnTransporterEdit(updated) {
      console.log('@todo dataBtnEdit:',updated)
    },

    dialogCloser() {
      this.isDialogCreate = false
    }
  },


  components: {
    ExpansionPanels,
    CardSearch,
    DataTableActions,
    CardDetail,
  },
}
</script>

<style>
.v-data-table__wrapper .text-start{
  padding:10px 0;
}
.v-data-table__wrapper .text-start .row{
  padding:8px 0;
}
.v-chip__content{
  color:#fff;
}

</style>