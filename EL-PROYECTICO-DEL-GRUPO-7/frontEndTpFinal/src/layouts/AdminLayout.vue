<!-- eslint-disable max-len -->
<template>
  <q-layout view="hHh Lpr lff">
    <!-- Header -->
    <q-header class="bg-secondary">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>Panel de Admin</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <!-- Barra Lateral -->
    <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="500" class="bg-grey-3">
      <!-- Opciones Dashboard -->
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px;">
        <div class="column justify-between" style="min-height: calc(100vh - 200px);">
          <!-- Opciones -->
          <q-list padding>

            <!-- Plazas -->
            <q-item to="plazas" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="apps" />
              </q-item-section>
              <q-item-section>
                Plazas
              </q-item-section>
            </q-item>

            <!-- Montos -->
            <q-expansion-item expand-separator icon="attach_money" label="Montos">
              <q-list>
                <q-item to="precios" clickable v-ripple>
                  <q-item-section>
                    Precios
                  </q-item-section>
                </q-item>
                <q-item to="planes" clickable v-ripple>
                  <q-item-section>
                    Planes
                  </q-item-section>
                </q-item>
                <q-item to="promociones" clickable v-ripple>
                  <q-item-section>
                    Promociones
                  </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>

            <!-- Horarios -->
            <q-item to="horarios" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="schedule" />
              </q-item-section>
              <q-item-section>
                Horarios
              </q-item-section>
            </q-item>

            <!-- Empleados -->
            <q-expansion-item expand-separator icon="group" label="Empleados">
              <q-list>
                <q-item to="listaEmpleados" clickable v-ripple>
                  <q-item-section>
                    Lista de Empleados
                  </q-item-section>
                </q-item>
                <q-item to="nuevoEmpleado" clickable v-ripple>
                  <q-item-section>
                    Nuevo Empleado
                  </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>

            <!-- Configuraciones -->
            <q-item to="configuraciones" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="settings" />
              </q-item-section>
              <q-item-section>
                Configuraciones
              </q-item-section>
            </q-item>

          </q-list>

          <!-- Cerrar Sesión -->
          <q-list padding>
            <q-item clickable @click=logoutSession() v-ripple to="/login">
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>

              <q-item-section>
                Cerrar Sesión
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-scroll-area>

      <!-- Perfil Usuario -->
      <q-img class="absolute-top" src="../assets/background-admin.jpg" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="../assets/marcosContact.jpg">
          </q-avatar>
          <div class="text-weight-bold">Homero Simpson</div>
          <div>Admin</div>
        </div>
      </q-img>
    </q-drawer>

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
import { useSessionStatus } from '../stores/session-store';

export default {
  components: {
    BtnScrollerTop,
  },

  setup() {
    const miniState = ref(false);
    const store = useSessionStatus();

    return {
      drawer: ref(false),
      miniState,
      store,

      logoutSession() {
        store.changeStatus();
      },
      drawerClick(e) {
        // if in "mini" state and user
        // click on drawer, we switch it to "normal" mode
        if (miniState.value) {
          miniState.value = false;

          // notice we have registered an event with capture flag;
          // we need to stop further propagation as this click is
          // intended for switching drawer to "normal" mode only
          e.stopPropagation();
        }
      },
    };
  },

};
</script>
