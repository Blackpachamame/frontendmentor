<!-- eslint-disable max-len -->
<template>
  <section id="contact">
    <div class="column items-center q-gutter-x-md q-gutter-y-lg">
      <p class="col-12 text-h3 text-center">Contacto</p>
      <!-- Contact -->
      <div class="row justify-center q-gutter-x-md q-gutter-y-lg">
        <CardContact class="col-12"></CardContact>
      </div>
    </div>
  </section>
</template>

<script>
import CardContact from './CardContact.vue';

export default {
  components: {
    CardContact,
  },
};
</script>

<style lang="sass" scoped>
#contact
    display: flex
    justify-content: center
    align-items: center
    min-height: 400px
</style>
