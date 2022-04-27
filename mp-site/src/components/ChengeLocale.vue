<template>

  <div class="ml-4 flex items-center md:ml-6">
    <div class="ml-3 relative">
      <div class="relative inline-block text-left">
        {{actualLocale}}
          <button type="button" class="btn-translate-change" id="options-menu" @click="toggleLangMenu">
            {{ $t("message") }}
          </button>
        
        <div class="menu-translate-dropdown" v-show="isMenuOpen">
          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu"  >
            <option 
              class="btn-translate-variant uppercase cursor-pointer" 
              role="menuitem" 
              v-for="(lang, i) in AvailableLocale" 
              :key="`Lang${i}`" 
              :value="lang" 
              @click="setLocale(lang)"
            >
              {{ lang }}
            </option>
            <screen-size/>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import ScreenSize from './Helpers/ScreenSize.vue'
export default {
  name: "ChengeLocale",
  components: {
      ScreenSize
    },
  data() {
    return { 
      langs: ["ru", "lt", "en"],
      actualLocale: this.localeNow,
      isMenuOpen:false,

      };
  },
  computed:{
    localeNow(){
      return this.$i18n.locale;
    },
    AvailableLocale(){
      return this.langs.filter(lang => lang !== this.localeNow)
    },
    
  },
  methods:{
    setLocale(lang){
      this.$i18n.locale = lang;
      this.toggleLangMenu()
    },
    toggleLangMenu(){
      return this.isMenuOpen = !this.isMenuOpen
    }
  }
};

</script>