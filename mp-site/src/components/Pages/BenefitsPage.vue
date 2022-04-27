<template>
    <section class="relative overflow-hidden h-screen w-full ">
      <img src="img/img_1.jpg" class="absolute h-full w-full object-cover backdrop-filter backdrop-brightness-0"/>
      <article class="h-full bg-black bg-opacity-50 flex flex-col w-full relative items-center">
      <!-- Header -->
      <header class="h-1/5  md:h-36 lg:h-40 w-12/12 flex flex-col pb-3 md:mb-10 lg:mb-10 justify-end content-center text-center md:text-xl lg:text-xl uppercase text-gray-100">
        {{ $t("benefits.title") }}
      </header>    
      <!-- List of benefits -->
      <div class="h-4/5 flex flex-wrap overflow-y-auto overflow-x-auto md:overflow-y-none md:overflow-x-none justify-around px-4 w-12/12 xl:w-10/12 2xl:w-8/12  items-start overflow-scroll text-xs md:text-base">
        <div v-for="(opt,name) in options" v-bind:key="name" class="h-1/3 w-full md:w-1/2 lg:w-1/3  ">
          <header class="text-sm font-medium md:text-lg text-yellow-200">{{ i18n_title(name) }}</header>
          <span class="text-white leading-none">{{ i18n_story(name) }}</span>
        </div>
      </div>
      </article>
    </section>
</template>
<script>
import en from '../../locales/en.json';

export default {
  name: "BenefitsPage",
  data(){
    return {
      options: en.benefits.options
    }
  },
  methods: {
    i18n_title: function(section) {
      return this.$t(`benefits.options.${section}.title`)
    },
    i18n_story: function(section) {
      return this.$t(`benefits.options.${section}.story`);
    }
  },

};
</script>
