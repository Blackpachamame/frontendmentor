<!-- eslint-disable max-len -->
<template>
  <q-layout view="hHh Lpr lff">
    <q-header reveal class="bg-white text-primary q-py-lg q-px-lg">
      <q-toolbar>
        <!-- Logo -->
        <q-img src="../assets/logo.png" height="40px" width="40px" alt="logo" />
        <!-- Nombre del sitio -->
        <q-toolbar-title class="text-weight-bold text-uppercase">Park-Our</q-toolbar-title>

        <q-space />
        <!-- Menú -->
        <q-tabs class="gt-sm" v-model="tab" shrink>
          <q-route-tab to="/" name="home" label="Home" exact />
          <q-route-tab href="/#about" name="about" label="About" exact />
          <q-route-tab href="/#contact" name="contact" label="Contact" exact />
          <q-route-tab href="login" name="login" label="Login" exact />
        </q-tabs>
        <!-- Boton Menú -->
        <div class="lt-md">
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </div>
      </q-toolbar>
    </q-header>
    <!-- Menú responsive -->
    <div class="lt-md">
      <q-drawer v-model="drawer" :width="250" :breakpoint="500" overlay class="text-primary text-h5 text-center">
        <q-scroll-area class="fit">
          <q-list>

            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index" v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>
    </div>
    <!-- Page Container -->
    <q-page-container>
      <router-view />
      <BtnScrollerTop></BtnScrollerTop>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import BtnScrollerTop from '../components/BtnScrollerTop.vue';

const menuList = [
  {
    label: 'Home',
  },
  {
    label: 'About',
  },
  {
    label: 'Contact',
  },
  {
    label: 'Login',
  },
];

export default {
  components: {
    BtnScrollerTop,
  },

  setup() {
    return {
      tab: ref(''),
      drawer: ref(false),
      menuList,
    };
  },
};
</script>

<style lang="sass" scoped>
.q-toolbar
  &__title
    font-family: $ff-chichilo
    font-size: 26px
:deep(.q-tab__label)
  font-size: 16px
.q-list
  display: flex
  flex-direction: column
  justify-content: space-evenly
  align-items: center

@media(max-width: 375px)
  header.q-header
    padding-left: 0
    padding-right: 0
</style>
