<!-- eslint-disable max-len -->
<template>
  <q-page padding class="row q-col-gutter-sm justify-center">
    <!-- Formulario -->
    <div class="col-12 col-md-6">
      <q-card flat class="q-pa-md">
        <q-card-section class="q-pt-none">
          <p class="text-h4 text-center">Modificar Horarios</p>
        </q-card-section>

        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <!-- Horario Entrada -->
          <q-input filled v-model="timeEntrada" placeholder="07:00" :rules="aperturaRules" hint="Horario de apertura">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-time v-model="timeEntrada">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <!-- Horario Salida -->
          <q-input filled v-model="timeSalida" placeholder="18:30" :rules="cierreRules" hint="Horario de cierre">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-time v-model="timeSalida">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <!-- Seleccionar Días -->
          <q-field filled ref="inputDias" hint="Seleccione los días en los que el estacionamiento estará abierto"
            lazy-rules :model-value="dias">
            <template v-slot:control>
              <q-option-group name="selection_day" v-model="dias" :options="optionsDays" color="green" type="checkbox"
                inline />
            </template>
          </q-field>
          <!-- Botones -->
          <div class="row justify-end">
            <q-btn label="Limpiar" type="reset" color="primary" flat class="q-mr-sm" />
            <q-btn label="Actualizar" type="submit" color="primary" />
          </div>
        </q-form>
      </q-card>
    </div>
    <!-- Horarios -->
    <div class="col-12 col-md-6">
      <div class="q-pa-md col-12 col-lg-6 text-h4 text-center">Horarios</div>
      <!-- Entrada -->
      <div class="q-pa-md col-12 col-lg-6">
        <q-card class="text-center">
          <q-card-section class="card-title text-white text-h4">
            Entrada
          </q-card-section>
          <q-separator />
          <q-card-section class="card-precio flex flex-center">
            {{ timeEntrada }}
          </q-card-section>
        </q-card>
      </div>
      <!-- Salida -->
      <div class="q-pa-md col-12 col-lg-6">
        <q-card class="text-center">
          <q-card-section class="card-title text-white text-h4">
            Salida
          </q-card-section>
          <q-separator />
          <q-card-section class="card-precio flex flex-center">
            {{ timeSalida }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

export default {
  setup() {
    const $q = useQuasar();

    const age = ref(null);
    const accept = ref(false);
    const inputDias = ref([]);
    const dias = ref([]);
    const timeEntrada = ref('07:00');
    const timeSalida = ref('18:00');

    return {
      age,
      accept,
      timeEntrada,
      timeSalida,
      inputDias,
      dias,
      optionsDays: [
        {
          label: 'Lunes',
          value: 'lunes',
        },
        {
          label: 'Martes',
          value: 'martes',
        },
        {
          label: 'Miercoles',
          value: 'miercoles',
        },
        {
          label: 'Jueves',
          value: 'jueves',
        },
        {
          label: 'Viernes',
          value: 'viernes',
        },
        {
          label: 'Sabado',
          value: 'sabado',
        },
        {
          label: 'Domingo',
          value: 'domingo',
        },
      ],
      aperturaRules: [
        (val) => (val && val.length > 0) || 'Por favor, ingrese un horario',
      ],
      cierreRules: [
        (val) => (val && val.length > 0) || 'Por favor, ingrese un horario',
        (val) => (val && val !== timeEntrada.value) || 'Por favor, ingrese un horario válido',
      ],

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first',
          });
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted',
          });
        }
      },

      onReset() {
        age.value = null;
        accept.value = false;
        dias.value = [];
      },
    };
  },
};
</script>

<style lang="sass" scoped>
.q-card
  border-radius: 1rem
  & .card-title
    background-color: #ffffff
    background-image: url("../assets/background-l1.png")
    &.text-h4
      text-shadow: 0 0 5px #dfd2ff
  & .card-precio
    font-size: 2rem
    padding: 2px
</style>
