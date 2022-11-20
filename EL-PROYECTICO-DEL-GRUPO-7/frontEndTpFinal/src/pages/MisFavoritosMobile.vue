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
      <p class="text-h4 text-weight-bold text-primary text-center">Mis Favoritos</p>
      <div class="q-mt-md">
        <q-list style="min-width: 300px">
          <q-item v-for="contact in contacts" :key="contact.id" class="q-my-sm" clickable v-ripple>
            <q-item-section>
              <q-item-label>{{ contact.name }}</q-item-label>
              <q-item-label caption lines="1">{{ contact.direccion }}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-btn size="12px" round dense flat unelevated icon="delete" color="negative" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
const contacts = [{
  id: 1,
  name: 'Parking NQN',
  direccion: '9 de Julio',
}, {
  id: 2,
  name: 'Estacionamiento Don Pepe',
  direccion: 'Av Siempre Viva 2001',
}]

export default {
  setup() {
    return {
      contacts,
    }
  }
}
</script>