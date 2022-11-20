<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<template>
  <q-page class="row items-center justify-evenly">
    <q-card flat class="col-12 q-pa-md" style="max-width: 400px">

      <q-card-section class="text-center">
        <p class="text-h4">Ingresar al panel</p>
      </q-card-section>

      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <!-- Nombre de Usuario -->
        <q-input filled v-model="username" type="text" hint="Ingrese su nombre de usuario" lazy-rules
          :rules="[val => val && val.length > 0 || 'Por favor, ingrese su nombre de usuario']" />
        <!-- Password -->
        <q-input filled v-model="password" :type="isPwd ? 'password' : 'text'" hint="Ingrese su contraseña" :rules="[
        val => val !== null && val !== '' || 'Por favor, ingrese su contraseña']">
          <template v-slot:append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
          </template>
        </q-input>
        <!-- Registrate -->
        <div class="row items-center">
          <span>¿No tenes cuenta?, <a href="register">Registrate</a></span>
        </div>
        <!-- Botones -->
        <div class="row justify-end">
          <q-btn label="Limpiar" type="reset" color="primary" flat class="q-mr-sm" />
          <q-btn label="Ingresar" type="submit" color="primary" />
        </div>
      </q-form>

    </q-card>
  </q-page>
</template>
<!-- eslint-disable linebreak-style -->
<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useSessionStatus } from '../stores/session-store';

export default {
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const store = useSessionStatus();
    const username = ref(null);
    const password = ref(null);
    const data = ref(null);

    return {
      store,
      username,
      password,
      isPwd: ref(true),
      onSubmit() {
        setTimeout(() => {
          $q.notify({
            progress: true,
            message: 'Iniciando sesion...',
            color: 'secondary',
            textColor: 'white',
          });
          setTimeout(() => {
            axios.get(`http://localhost:3000/usuario/username/${username.value}`)
              .then((response) => {
                console.log(response);
                // TODO: seguir aca.
                $q.notify({
                  color: 'green-4',
                  textColor: 'white',
                  icon: 'cloud_done',
                  message: '¡Bienvenido!',
                });
                // agregar los datos a la variable data.
                if ('') {
                  router.push('/datos-persona');
                } else {
                  router.push('/dashboard/plazas');
                }
              })
              .catch(() => {
                $q.notify({
                  message: 'Error en el registro de usuario, contactar con soporte.',
                  icon: 'warning',
                  color: 'red-5',
                  textColor: 'white',
                });
              });
          }, 3000);
        }, 2000);
      },

      onReset() {
        username.value = null;
        password.value = null;
      },
    };
  },
};
</script>
