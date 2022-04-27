<template>
<div>
  <Navigation />
  <HomePage />
  <HouseGalery />
  <BenefitsPage />
  <PanelPage />
  <ContactPage />
</div>
</template>

<script>
// import HelloI18n from './components/HelloI18n.vue'
import Navigation from './components/Header/Navigation.vue';
import HomePage from './components/Pages/HomePage.vue';
import HouseGalery from './components/Pages/HouseGalery.vue';
import BenefitsPage from './components/Pages/BenefitsPage.vue';
import PanelPage from './components/Pages/PanelPage.vue';
import ContactPage from './components/Pages/ContactPage.vue';

export default {
  name: 'App',
  components: {
    // HelloI18n,
    Navigation,
    HomePage,
    HouseGalery,
    BenefitsPage,
    PanelPage,
    ContactPage,
  }
}
</script>
