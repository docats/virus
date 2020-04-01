export default {

  Main: {
    RewardPackage: [
      { text: '#', value: 'action'},
      { text: '獎勵包名稱', value: 'name'},
      { text: '獎勵包內容', value: 'content' },
      { text: '領取時間', value: 'duration' },
    ],

    RewardEvent: [
      {
        text: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Calories', value: 'calories' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Iron (%)', value: 'iron' },
    ]
  }
}