<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<template>
  <q-page padding class="row items-center justify-evenly q-mb-lg">
    <q-card flat class="col-12 col-md-6 q-pa-md rounded-borders" style="max-width: 500px">

      <q-card-section class="text-center">
        <p class="text-h4">Solicitar Servicio</p>
        <span class="text-subtitle2">Los datos marcados con (*) son obligatorios</span>
      </q-card-section>

      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <!-- Nombre -->
        <q-input filled v-model="username" type="text" label="Nombre de usuario " hint="Ingrese su nombre de usuario"
          lazy-rules :rules="[val => val && val.length > 0 || 'Por favor, ingrese un nombre de usuario']" />
        <!-- Email -->
        <q-input filled v-model="mail" type="Email" label="Email *" hint="Ingrese su email" lazy-rules
          :rules="[val => val && val.length > 0 || 'Por favor, ingrese un mail', isValidEmail]" />
        <!-- Comentarios -->
        <q-input v-model="comentario" filled type="textarea" label="Déjanos un mensaje (máximo 200 caracteres)"
          lazy-rules maxlength="200" />
        <!-- Términos y Condiciones -->
        <div class="row items-center">
          <q-toggle v-model="accept" checked-icon="check" color="green" unchecked-icon="clear" lazy-rules
            @click="accept = false" :rules="[val => val && val === false || 'Debe ver los términos y condiciones']" />
          <span class="text-primary cursor-pointer" @click="basic = true">Ver términos y condiciones *</span>
        </div>
        <!-- Botones -->
        <div class="row justify-end">
          <q-btn label="Limpiar" type="reset" color="primary" flat class="q-mr-sm" />
          <q-btn label="Registrarse" type="submit" color="primary" />
        </div>
      </q-form>

    </q-card>

    <!-- Modal / Dialog de Términos y Condiciones -->
    <q-dialog v-model="basic">
      <q-card>

        <TerminosDeUso></TerminosDeUso>

        <q-card-actions align="right">
          <q-btn flat label="Aceptar" color="primary" v-close-popup @click="accept = true" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<!-- eslint-disable linebreak-style -->
<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useSessionStatus } from '../stores/session-store';
import TerminosDeUso from '../components/TerminosDeUso.vue';

export default {

  components: {
    TerminosDeUso,
  },

  setup() {
    const $q = useQuasar();
    const store = useSessionStatus();
    const router = useRouter();
    const username = ref(null);
    const mail = ref(null);
    const comentario = ref(null);
    const accept = ref(false);

    function alert() {
      $q.dialog({
        title: 'Importante!',
        message: 'En breve recibirá un email donde se indicarán los pasos a seguir, este atento a su bandeja de entrada.',
        persistent: true,
      }).onDismiss(() => {
        router.push('/login');
      });
    }

    return {
      store,
      username,
      mail,
      comentario,
      accept,
      basic: ref(false),
      isValidEmail(val) {
        const emailRegex = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailRegex.test(val) || 'Ingrese un email válido';
      },
      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Tienes que aceptar los términos y condiciones',
          });
        } else {
          const body = {
            username: username.value,
            email: mail.value,
            password: 'b7159b31a2fdf4ef8394df2234acca8fdbbc438f',
            role: 'owner',
          };
          const route = 'http://localhost:3000/usuario';
          setTimeout(() => {
            $q.notify({
              progress: true,
              message: 'Registrando usuario...',
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
                    message: 'Error en el registro de usuario, contactar con soporte.',
                    icon: 'warning',
                    color: 'red-5',
                    textColor: 'white',
                  });
                });
            }, 3000);
          }, 2000);
        }
      },
      onReset() {
        username.value = null;
        mail.value = null;
        comentario.value = null;
        accept.value = false;
      },
    };
  },
};
</script>
