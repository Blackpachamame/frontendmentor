<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <!-- Configuraciones Usuario -->
      <q-toolbar class="text-primary row justify-end no-padding">
        <q-btn-dropdown flat round dense dropdown-icon="settings">
          <q-list style="min-width: 150px">
            <q-item clickable v-close-popup to="mis-patentes">
              <q-item-section>
                <q-item-label>Mis Patentes</q-item-label>
              </q-item-section>

              <q-item-section avatar>
                <q-icon name="directions_car" />
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup to="mis-reservas">
              <q-item-section>
                <q-item-label>Mis Reservas</q-item-label>
              </q-item-section>

              <q-item-section avatar>
                <q-icon name="qr_code" />
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup to="mis-favoritos">
              <q-item-section>
                <q-item-label>Favoritos</q-item-label>
              </q-item-section>

              <q-item-section avatar>
                <q-icon name="favorite" />
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup to="mi-historial">
              <q-item-section>
                <q-item-label>Historial</q-item-label>
              </q-item-section>

              <q-item-section avatar>
                <q-icon name="history" />
              </q-item-section>
            </q-item>

            <q-item clickable @click=logoutSession() v-ripple to="/">
              <q-item-section>
                <q-item-label>Cerrar Sesión</q-item-label>
              </q-item-section>

              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
      <img src="../assets/logo.png" alt="logo" style="width: 100px;">
      <p class="title text-weight-bold text-uppercase text-primary">Park-Our</p>
      <div class="q-mt-md q-gutter-y-md" style="min-width: 300px">
        <q-form @submit="onSubmit" @reset="onReset">
          <q-select disable filled v-model="patente" :options="options" />
          <!-- Añadir Patente -->
          <div class="q-mt-sm row justify-center">
            <span><a href="mis-patentes">Añadir Patente</a></span>
          </div>
        </q-form>

        <q-btn to="buscar" push color="primary" size="lg" class="full-width border-radius-inherit" label="Buscar"
          no-caps />
        <q-btn to="reserva" push color="positive" size="lg" class="full-width border-radius-inherit" label="Reserva"
          no-caps />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      patente: ref('AA-000-BB'),

      options: [
        'AA-000-BB', 'AB-121-BA'
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
p.title
    font-family: $ff-chichilo
    font-size: 36px
</style>