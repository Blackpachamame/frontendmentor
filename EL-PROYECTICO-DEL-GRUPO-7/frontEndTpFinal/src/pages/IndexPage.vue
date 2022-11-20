<template>
  <q-page>
    <!-- Bienvenida -->
    <SectionBienvenida></SectionBienvenida>
    <!-- About -->
    <SectionAbout></SectionAbout>
    <!-- Caracteristicas -->
    <SectionCaracteristicas></SectionCaracteristicas>
    <!-- Contact -->
    <SectionContact></SectionContact>
  </q-page>
</template>

<script>
import SectionBienvenida from '../components/SectionBienvenida.vue';
import SectionAbout from '../components/SectionAbout.vue';
import SectionContact from '../components/SectionContact.vue';
import SectionCaracteristicas from '../components/SectionCaracteristicas.vue';

export default {
  components: {
    SectionBienvenida,
    SectionAbout,
    SectionContact,
    SectionCaracteristicas,
  },
};
</script>
