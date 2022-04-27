<template>
  <section class=" relative overflow-hidden h-screen w-full">
    <img src="img/img_2.jpg" class="absolute h-screen w-full object-cover backdrop-filter backdrop-brightness-0"/>
      <div class="bg-black bg-opacity-50 mx-auto px-6 flex flex-col flex-wrap content-center h-full relative py-16">
            <!-- Header -->
            <div class="uppercase text-3xl lg:text-7xl lg:pt-12 pb-0  flex justify-center justify-items-end leading-loose h-1/5 text-white">{{ $t("hause_galery.title") }}</div>
            <!-- List of houses -->
            <div class="flex flex-row w-full h-4/5 items-center">
                <!-- Nav left -->
                <div class="text-gray-300 w-1/12 lg:w-2/12 flex justify-center ">
                    <div class="rounded-full h-6 w-6 sm:h-9 sm:w-9 lg:h-20  lg:w-20 pr-0.5 sm:pr-1 flex items-center justify-center border-2 border-gray-300 hover:border-yellow-200 hover:text-yellow-200 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg"  class="h-3 w-3 sm:h-5 sm:w-5 lg:h-11 lg:w-11  fill-current " viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </div>
                </div>
                <!-- Content -->
                <div class="flex flex-col items-center text-white w-10/12 lg:w-8/12">
                    <div class="text-xs lg:text-xl font-medium flex flex-row items-center justify-evenly w-full">
                        <span class="w-24 text-center">{{ $t("hause_galery.living_space") }}</span>
                        <span class="w-24 text-center">53-59 <p>M<sup>2</sup></p></span>
                    </div>
                    <span class="text-2xl lg:text-7xl mt-5 mb-2.5 lg:mt-10 lg:mb-5">NAME OF HOUSE</span>
                    <div class="text-base lg:text-2xl font-medium flex flex-row items-center justify-evenly w-full">
                        <span class="w-24 text-center">{{ $t("hause_galery.price") }}</span>
                        <span class="w-24 text-center">20.000 $</span>
                    </div>
                </div>
                <!-- Nav right -->
                <div class="text-gray-300 w-1/12 lg:w-2/12 flex justify-center ">
                    <div class="rounded-full h-6 w-6 sm:h-9 sm:w-9 lg:h-20  lg:w-20 pl-0.5 sm:pl-1 flex items-center justify-center border-2 border-gray-300 hover:border-yellow-200 hover:text-yellow-200 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg"  class="h-3 w-3 sm:h-5 sm:w-5 lg:h-11 lg:w-11 fill-current" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </div>
            </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 flex flex-row justify-center">
            <button class="px-6 py-3 w-40 mt-4 mb-4 lg:mt-8 lg:px-12 lg:py-7 lg:w-80 lg:mb-16 bg-black bg-opacity-20 font-light uppercase transition ease-in duration-200 hover:border-yellow-200 hover:text-yellow-200 tracking-wider border-2 lg:border-4 text-xs lg:text-lg text-yellow-400 border-yellow-400  focus:outline-none">
                {{ $t("hause_galery.btn_all_projects") }}
            </button>
      </div>
  </section>  
</template>
<script>
export default {
  name: "HouseGalery",
}
</script>