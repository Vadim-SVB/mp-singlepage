<template>
  <span class="flex flex-col text-red-700">
    <span class="sm:hidden"> NO </span>
    <span class="hidden sm:block md:hidden"> sm </span>
    <span class="hidden md:block lg:hidden"> md </span>
    <span class="hidden lg:block xl:hidden"> lg </span>
    <span class="hidden xl:block 2xl:hidden"> xl </span>
    <span class="hidden 2xl:block"> 2xl </span>
  </span>
</template>
<script>
export default {
  name: "ScreenSize",
};
</script>