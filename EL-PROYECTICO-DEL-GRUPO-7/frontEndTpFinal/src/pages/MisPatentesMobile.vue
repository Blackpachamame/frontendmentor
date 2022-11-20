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
      <p class="text-h4 text-weight-bold text-primary text-center">Mis Patentes</p>
      <div class="q-mt-md">
        <q-list style="min-width: 300px">
          <!-- Primer Patente -->
          <q-item clickable v-ripple :active="active === 'primera'" @click="active = 'primera'"
            active-class="bg-grey-2">
            <q-item-section class="text-h5">AA - 000 - BB</q-item-section>

            <q-item-section side>
              <q-btn size="12px" round dense flat unelevated icon="delete" color="negative" />
            </q-item-section>
          </q-item>

          <!-- Aca hay que meter todas las patentes -->
          <q-intersection v-for="index in cantidadPatentes" v-bind:key="index">

            <q-item clickable v-ripple v-bind:index='index' :active="active === 'segunda'" @click="active = 'segunda'"
              active-class="bg-grey-2">
              <q-item-section class="text-h5">{{ patente }}</q-item-section>

              <q-item-section side>
                <q-btn size="12px" round dense flat unelevated icon="delete" color="negative" />
              </q-item-section>
            </q-item>
          </q-intersection>

          <q-separator spaced />

          <!-- Formulario -->
          <q-form @submit="onSubmit" class="q-gutter-y-md q-mt-xs">
            <!-- Patente -->
            <q-input filled v-model="patente" type="text" label="Patente *" mask="AA - ### - AA" hint="AA - 000 - BB"
              lazy-rules :rules="[val => val && val.length > 0 || 'Por favor, ingrese una patente']" />
            <!-- Botones -->
            <div class="row justify-end">
              <q-btn type="submit" push color="primary" label="Añadir Patente"
                class="full-width border-radius-inherit q-mt-md" />
            </div>
          </q-form>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

export default {
  props: { agregarPatente: Function },

  setup() {
    const $q = useQuasar();
    const cantidadPatentes = ref(0);
    const patente = ref(null);
    return {
      active: ref('primera'),
      patente,
      onSubmit() {
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Patente Agregada',
        });
        cantidadPatentes.value += 1;
      },
      cantidadPatentes,
    }
  }
}
</script>