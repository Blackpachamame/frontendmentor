<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <div style="min-width: 300px">
        <p class="text-h4 text-weight-bold text-primary text-center">Tipo de Reserva</p>
        <q-form @submit="onSubmit" @reset="onReset" class="column items-center justify-center q-gutter-y-md">
          <div class="full-width row justify-center text-uppercase text-h5">
            <q-option-group name="tipo_reserva" v-model="tipoReserva" :options="options" size="xl" color="primary"
              inline />
          </div>
          <!-- Código Promoción -->
          <q-input class="full-width" filled v-model="codigo" type="text" label="Código Promoción"
            hint="Ingresar código de promoción" />
          <!-- Día y Horario -->
          <q-input filled v-model="date" class="full-width" placeholder="2022-12-01 12:44" :rules="dateFinRules"
            hint="Seleccionar Día y Horario">
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>

            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <!-- Botones -->
          <q-btn to="confirmacion" type="submit" push color="positive" size="lg"
            class="full-width border-radius-inherit" label="Continuar" no-caps />
          <q-btn to="datos" push color="accent" size="lg" class="full-width border-radius-inherit" label="Volver"
            no-caps />
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup() {
    const $q = useQuasar()

    const tipoReserva = ref('fija')
    const codigo = ref(null)
    const date = ref(null)

    return {
      tipoReserva,
      options: [
        {
          label: 'Fija',
          value: 'fija'
        },
        {
          label: 'Libre',
          value: 'libre'
        },
      ],
      codigo,
      date,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset() {
        tipoReserva.value = "fija"
        codigo.value = null
        date.value = '2022-12-01 12:44'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.q-option-group
  & .q-radio
    &__label
      font-size: 20px
      text-transform: uppercase
</style>