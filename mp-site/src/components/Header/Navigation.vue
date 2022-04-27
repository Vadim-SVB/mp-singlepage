<template>
        <nav class="z-50 fixed bg-gradient-to-b from-gray-800 bg-opacity-30 dark:bg-gray-800  lg:shadow ">
            <div class="w-screen mx-auto sm:px-6">
                <div class="flex items-center justify-between h-16 md:h-24 px-1">
                    <div class=" flex items-center">
                        <a class="flex-shrink-0" href="/">
                            <img class="h-10 w-10  sm:h-12 sm:w-12 md:h-16 md:w-16" src="/img/logoModulePanel.svg" alt="Модуль Панель"/>
                        </a>
                        <div class="text-xs sm:text-base text-gray-50 uppercase flex flex-row md:flex-col">
                            <span class="ml-1">{{ $t("site_name.first") }}</span>
                            <span class="ml-1">{{ $t("site_name.second") }}</span>
                            
                        </div>

                    </div>
                    
                    <div class="hidden md:flex flex-row">
                        <!-- hidden md: -->
                        <!-- Links to Contacts -->
                            <div class="ml-10 flex flex-col">
                                <a class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-0 rounded-md text-base tracking-wide font-medium" href="tel:+375447899978">
                                    +375 44 789-99-78
                                </a>
                                <a class="text-gray-300 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-0 rounded-md text-sm font-medium" href="mailto:zoomvrum.vs@gmail.com">
                                    zoomvrum.vs@gmail.com
                                </a>
                            </div>
                        <!-- Translate Menu & Button -->
                    <chenge-locale/>
                    </div>
                    <!-- END Translate Menu & Button -->
                    <div class="-mr-2 flex md:hidden">
                        <button class="text-gray-400 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                            <svg width="20" height="20" fill="currentColor" class="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <!-- <div class="md:hidden">
                <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                        Home
                    </a>
                    <a class="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                        Gallery
                    </a>
                    <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                        Content
                    </a>
                    <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                        Contact
                    </a>
                </div>
            </div> -->
    </nav>
</template>
<script>
  import ChengeLocale from "../ChengeLocale.vue";


  export default {
    name: "Navigation",
    components: {
      ChengeLocale
    },
  }
</script>