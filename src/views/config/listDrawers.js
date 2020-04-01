let ListDrawer = [
  {
    label: '遊戲相關',
    link: '',
    icon: 'mdi-gamepad-variant-outline',
    isSub: true,
    sub: [
      {
        label: '遊戲初始資料',
        link: '',
        icon: 'mdi-xml',
      },
      {
        label: '遊戲事件/廣告設定',
        link: '',
        icon: 'mdi-monitor',
      },
      {
        label: '遊戲獎勵包設定',
        link: '/RewardPackage',
        icon: 'mdi-gift',
      },
      {
        label: '遊戲獎勵事件設定',
        link: '/RewardEvent',
        icon: 'mdi-trophy-variant',
      },
      {
        label:'遊戲喜好設定',
        link:'/RewardGame',
        icon:'mdi-chess-rook'
      }
    ]
  },
  {
    label: '管理相關',
    link: '',
    icon: 'mdi-cogs',
    isSub: true,
    sub: [
      {
        label: '今日工作',
        link: '/WorksToday',
        icon: 'mdi-paperclip',
      },
      {
        label: '註冊新管理者',
        link: '/ManagerRegister',
        icon: 'mdi-account-plus',
      },
      {
        label: 'Test',
        link: '/Parent',
        icon: 'mdi-paperclip',
      },
      {
        label: 'Test1',
        link: '/Parent1',
        icon: 'mdi-account-plus',
      },
      
    ]
  },
  {
    label: '測試',
    link: '/Test',
    icon: 'mdi-test-tube',
    isSub: false,
    sub: []
  }
]
  
export default ListDrawer