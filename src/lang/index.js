import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './locales/en.js'
import cn from './locales/cn.js'
import tw from './locales/tw.js'

Vue.use(VueI18n)


const locale = localStorage.locale || 'tw'


// 建立 VueI18n 實體
const i18n = new VueI18n({
  locale,
  messages: { en, cn, tw}
})

export default i18n