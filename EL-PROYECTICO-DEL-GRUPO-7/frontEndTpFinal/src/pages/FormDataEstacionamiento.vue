<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<template>
  <q-page padding class="row justify-center">
    <q-card flat class="col-12 q-pa-md" style="max-width: 800px">

      <q-card-section>
        <p class="col-12 text-h4 text-center">Completar información (estacionamiento)</p>
        <p class="text-body text-center">Estos son requeridos por única vez para completar los datos del estacionamiento</p>
      </q-card-section>

      <!-- Formulario -->
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <!-- Razon Social -->
        <q-input filled v-model="razonSocial" type="text" label="Razon Social" hint="Ingresa tu razon social" lazy-rules
          :rules="[val => val && val.length > 0 || 'Debes ingresar tu razon social']" />
        <!-- Cantidad de Plazas -->
        <q-select filled v-model="cantPlazas" :options="optionsPlazas" label="Cantidad de plazas" lazy-rules
          :rules="[val => val || 'Debes seleccionar la cantidad de plazas']" hint="Ingrese la cantidad de plazas" />
        <!-- Hora de Apertura -->
        <q-input filled v-model="timeOpen" mask="time" :rules="['time']" label="Ingrese la hora de apertura">
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-time v-model="timeOpen">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <!-- Hora de Cierre -->
        <q-input filled v-model="timeClose" mask="time" :rules="['time']" label="Ingrese la hora de clausura">
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-time v-model="timeClose">
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
          lazy-rules :rules="[val => val && val.length > 0 || 'Debes seleccionar como mínimo un día']"
          :model-value="dias">
          <template v-slot:control>
            <q-option-group name="selection_day" v-model="dias" :options="optionsDays" color="green" type="checkbox"
              inline />
          </template>
        </q-field>
        <!-- Precio Base -->
        <q-input filled v-model="precio" type="number" label="Tarifa base (por hora)"
          hint="Ingresa la tarifa (por hora) en ARS" lazy-rules
          :rules="[val => val && val.length > 0 || 'Debes ingresar una tarifa base']" />
        <!-- Botones -->
        <div class="row justify-end">
          <q-btn label="Limpiar" type="reset" color="primary" flat class="q-mr-sm" />
          <q-btn label="Continuar" type="submit" color="primary" />
        </div>
      </q-form>

    </q-card>
  </q-page>
</template>
<!-- eslint-disable linebreak-style -->
<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

export default {
  setup() {
    const $q = useQuasar();

    const razonSocial = ref(null);
    const cantPlazas = ref(null);
    const timeOpen = ref(null);
    const timeClose = ref(null);
    const inputDias = ref([]);
    const dias = ref([]);
    const precio = ref(null);

    return {
      razonSocial,
      cantPlazas,
      timeOpen,
      timeClose,
      inputDias,
      dias,
      optionsPlazas: [
        {
          label: '4 plazas',
          value: 4,
        },
        {
          label: '5 plazas',
          value: 5,
        },
        {
          label: '6 plazas',
          value: 6,
        },
        {
          label: '7 plazas',
          value: 7,
        },
        {
          label: '8 plazas',
          value: 8,
        },
        {
          label: '9 plazas',
          value: 9,
        },
        {
          label: '10 plazas',
          value: 10,
        },
      ],
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
      precio,

      onSubmit() {
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Muy bien, continuemos',
        });
      },

      onReset() {
        razonSocial.value = null;
        cantPlazas.value = null;
        timeOpen.value = null;
        timeClose.value = null;
        dias.value = [];
        precio.value = null;
      },
    };
  },
};
</script>
