<template>
        <section class="relative overflow-hidden h-screen">
        <img src="img/img_1.jpg" class="absolute h-full w-full object-cover backdrop-filter backdrop-brightness-0"/>
            <div class="bg-black bg-opacity-50 mx-auto px-6 flex flex-wrap content-center h-full relative py-16">
                <div class="w-full sm:w-full lg:w-3/5 xl:w-8/12 flex items-center flex-col place-content-center  lg:items-start relative">
                    <h1 class="font-bebas-neue font-sans tracking-wide uppercase text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-black  flex  flex-col leading-none dark:text-white text-gray-200">
                        {{ $t("main_page.slogan.first") }} 
                        <span class="tracking-normal text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
                            {{ $t("main_page.slogan.second") }} 
                        </span>
                    </h1>
                    <p class="font-sans lg:tracking-wider text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl text-gray-50 dark:text-white">
                        {{ $t("main_page.slogan.third") }} 
                    </p>
                    
                </div>
                <div class="w-full sm:w-full lg:w-2/5 xl:w-4/12 flex justify-center">
                    <button class="px-6 py-3 w-40 mt-8 mb-8 lg:px-12 lg:py-7 lg:w-80 lg:mt-16 lg:mb-16 bg-black bg-opacity-20 font-light transition ease-in duration-200 hover:border-yellow-200 hover:text-yellow-200 border-4 text-xs lg:text-lg text-yellow-400 border-yellow-400  focus:outline-none">
                        {{ $t("main_page.btn_projects") }}
                    </button>
                </div>

                
                <!-- MOUSE ICON Scroll -->
                <div class="absolute  bottom-2 lg:bottom-12 left-0 right-0 h-20 text-gray-500 flex flex-col place-content-center place-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="hidden lg:block h-11 w-11 fill-current" viewBox="0 0 16 16">
                        <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg"  class=" h-6 w-6 fill-current animate-bounce" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                      </svg>
                </div>
        </div>
    </section>
</template>
<script>
export default {
  name: "HomePage",
}
</script>