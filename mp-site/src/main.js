import { createApp } from 'vue'
import App from './App.vue';
//import i18n from './delete___i18n'
import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ru from './locales/ru.json';
import lt from './locales/lt.json';
import "@/assets/styles/main.css";
import "@/assets/styles/main.css";
import './assets/tailwind.css'

const messages = {en,ru,lt}

// 2. Create i18n instance with options
const i18n = createI18n({
  locale: 'ru', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})


// 3. Create a vue root instance
const app = createApp(App)

// 4. Install i18n instance to make the whole app i18n-aware
app.use(i18n)

// 5. Mount
app.mount('#app')

// Переключаем на другую локализацию
i18n.locale = 'en'
