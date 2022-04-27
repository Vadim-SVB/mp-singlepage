<template>
  <section class="bg-black relative overflow-hidden h-screen">
    <img src="img/img_3.jpg" class="absolute h-full w-full object-cover backdrop-filter backdrop-brightness-0"/>
        <!-- <img src="./img/panel-naruzh_.png" class="h-3/3 bg-local bg-clip-content"/> -->
      <article class="h-full  py-0 px-4 flex flex-col lg:flex-row-reverse flex-wrap relative bg-black bg-opacity-50 overflow-y-auto text-sm text-white break-words bg-gradient-to-t from-gray-900 via-transparent to-transparent overflow-hidden">
            
        <div class=" h-2/3 w-full lg:w-2/3 lg:h-full  flex flex-col items-start justify-between pt-24 border-l-2 border-yellow-500">
          <ul class=" py-4   z-10 text-sm sm:text-lg md:text-xl lg:text-2xl">
            <li class="py-10 px-5 text-sm sm:text-lg md:text-xl lg:text-2xl border-r-2 border-t-2 border-b-2 border-yellow-400 uppercase font-medium text-center bg-black">{{ $t("panel.title") }}</li>
            <li class="px-2 py-2 ml-5 mt-5 w-full bg-gradient-to-r from-gray-900 bg-opacity-80">{{ $t("panel.plus_0") }} <br> ({{ $t("panel.plus_1") }})</li>
            <li class="px-2 py-2 ml-5 w-full bg-gradient-to-r from-gray-900 bg-opacity-80">{{ $t("panel.plus_2") }}</li>
            <li class="px-2 py-2 ml-5 w-full bg-gradient-to-r from-gray-900 bg-opacity-80">{{ $t("panel.plus_3") }}</li>
            <li class="px-2 py-2 ml-5 w-full bg-gradient-to-r from-gray-900 bg-opacity-80">{{ $t("panel.plus_4") }}</li>
            <li class="px-2 py-2 ml-5 w-full bg-gradient-to-r from-gray-900 bg-opacity-80">{{ $t("panel.plus_5") }}</li>
            <li class="px-2 py-2 ml-5 w-full bg-gradient-to-r from-gray-900 bg-opacity-80">{{ $t("panel.plus_6") }}</li>
          </ul>

          <button class="max-w-min px-5 py-3 mb-20 z-10  uppercase text-lg md:text-2xl hidden lg:block transition ease-in duration-200 hover:border-yellow-200 hover:text-yellow-200 border-2 border-yellow-400 text-yellow-400 bg-black bg-opacity-80">{{ $t("panel.btn_panel_info") }}</button>
            </div>
            <!-- PANEL IMG -->
            <div class="h-1/3 w-full lg:w-1/3 lg:h-full lg:border-r-2 lg:border-b-8 lg:border-gray-400 flex items-center justify-center ">
                <img class="absolute bottom-0 -left-5" src="img/panel_sectional_view/@2x.png" alt="">
                <button class="max-w-min px-5 py-3 z-10 uppercase text-lg md:text-2xl lg:hidden transition ease-in duration-200 hover:border-yellow-200 hover:text-yellow-200 border-2 border-yellow-400 text-yellow-400 bg-black bg-opacity-80">{{ $t("panel.btn_panel_info") }}</button>
            </div>
        </article>
        
    </section>
</template>
<script>
export default {
  name: "PanelPage",
  data(){},
  methods: {},
};
</script>
