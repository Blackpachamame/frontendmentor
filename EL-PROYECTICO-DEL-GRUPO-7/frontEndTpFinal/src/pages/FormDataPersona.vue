<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<template>
  <q-page padding class="row justify-center">
    <q-card flat class="col-12 q-pa-md" style="max-width: 800px">

      <q-card-section>
        <p class="col-12 text-h4 text-center">Completar información (Persona)</p>
        <p class="text-body text-center">Estos datos son requeridos por única vez para completar tu perfil </p>
      </q-card-section>

      <!-- Formulario -->
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <!-- DNI -->
        <q-input filled v-model="document" type="number" label="DNI" hint="Ingresa tu DNI" lazy-rules
          :rules="[val => val && val > 0 && val <= 8 && val > 6 || 'Debes ingresar tu DNI, solo se permiten 8 dígitos']" />
        <!-- Nombre -->
        <q-input filled v-model="nombre" type="text" label="Nombre/s" hint="Ingresa tu/s nombre/s" lazy-rules
          :rules="[val => val && val.length > 0 || 'Debes ingresar tu/s nombre/s']" />
          <!-- Apellido -->
        <q-input filled v-model="apellido" type="text" label="Apellido/s" hint="Ingresa tu/s apellido/s" lazy-rules
          :rules="[val => val && val.length > 0 || 'Debes ingresar tu/s apellido/s']" />
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

    const document = ref(null);
    const nombre = ref(null);
    const apellido = ref(null);

    return {
      document,
      nombre,
      apellido,

      onSubmit() {
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Muy bien, continuemos',
        });
      },

      onReset() {
        document.value = null;
        nombre.value = null;
        apellido.value = null;
      },
    };
  },
};
</script>
