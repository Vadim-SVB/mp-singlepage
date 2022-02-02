<template>
  <div class="">
    <ChengeLocale/>
    <p>{{ $t("message") }}</p>
    {{ msg }}
  </div>
</template>

<script>
import ChengeLocale from "./ChengeLocale.vue";

export default {
  name: "HelloI18n",
  components: {
    ChengeLocale
  },
  props: {
    msg: String,
  },
};
</script>

