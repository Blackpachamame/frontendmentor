<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<template>
  <q-page padding class="row justify-center">
    <q-card flat class="col-12 q-pa-md" style="max-width: 800px">

      <q-card-section>
        <p class="text-h4 text-center">Nuevo Empleado</p>
      </q-card-section>

      <!-- Formulario -->
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <!-- DNI -->
        <q-input filled v-model="document" type="number" label="DNI" hint="Ingresa tu DNI" lazy-rules
          :rules="dniRules" />
        <!-- Nombre -->
        <q-input filled v-model="nombre" type="text" label="Nombre" hint="Ingresa tu nombre" lazy-rules
          :rules="nombreRules" />
        <!-- Apellido -->
        <q-input filled v-model="apellido" type="text" label="Apellido" hint="Ingresa tu apellido" lazy-rules
          :rules="apellidoRules" />
        <!-- Email -->
        <q-input filled v-model="mail" type="email" label="Email" hint="Ingrese su email" lazy-rules
          :rules="[val => val && val.length > 0 || 'Por favor, ingrese un mail', isValidEmail]" />
        <!-- Botones -->
        <div class="row justify-end">
          <q-btn label="Limpiar" type="reset" color="primary" flat class="q-mr-sm" />
          <q-btn label="Continuar" type="submit" color="primary" />
        </div>
      </q-form>

    </q-card>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const document = ref(null);
    const nombre = ref(null);
    const apellido = ref(null);
    const mail = ref(null);

    function alert() {
      $q.dialog({
        title: 'Nuevo empleado añadido!',
        message: 'Se ha añadido un nuevo empleado, lo podra ver en la seccion "lista de Empleados"',
        persistent: true,
      }).onDismiss(() => {
        router.push('/listaEmpleado');
      });
    }

    return {
      document,
      nombre,
      apellido,
      mail,
      nombreRules: [
        (val) => (val && val.length > 0) || 'Por favor, ingrese un nombre',
      ],
      apellidoRules: [
        (val) => (val && val.length > 0) || 'Por favor, ingrese un apellido',
      ],
      dniRules: [
        (val) => (val !== null && val !== '') || 'Por favor, ingrese un DNI',
        (val) => (val && val.length >= 7 && val.length <= 8) || 'Solo se permiten de 7 a 8 dígitos',
      ],
      isValidEmail(val) {
        const emailRegex = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailRegex.test(val) || 'Ingrese un email válido';
      },
      onSubmit() {
        /*
          const body = {
            username: username.value,
            email: mail.value,
            password: 'b7159b31a2fdf4ef8394df2234acca8fdbbc438f',
            // TODO: cambiar el rol al de empleado
            role: 'owner',
          };
          const route = 'http://localhost:3000/usuario';
          setTimeout(() => {
            $q.notify({
              progress: true,
              message: 'Registrando nuevo empleado...',
              color: 'secondary',
              textColor: 'white',
            });
            setTimeout(() => {
              axios.post(route, body)
                .then(() => {
                  $q.notify({
                    color: 'green-4',
                    textColor: 'white',
                    icon: 'cloud_done',
                    message: '¡Registro exitoso!',
                  });
                  alert();
                })
                .catch(() => {
                  $q.notify({
                    message: 'Error en el registro de empleado, contactar con soporte.',
                    icon: 'warning',
                    color: 'red-5',
                    textColor: 'white',
                  });
                });
            }, 3000);
          }, 2000);
          */
      },

      onReset() {
        document.value = null;
        nombre.value = null;
        apellido.value = null;
        mail.value = null;
      },
    };
  },
};
</script>
