<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <q-icon name="fa-regular fa-clock" color="primary" size="6rem" />
      <div class="q-mt-md q-gutter-y-md text-center">
        <p class="text-h4 text-weight-bold text-primary">Cronómetro</p>
        <div class="text-h3 q-mb-md">{{ timeShow }}</div>
        <q-btn-group push>
          <q-btn size="18px" color="positive" push icon="play_arrow" @click="iniciar()" />
          <q-btn size="18px" color="negative" push icon="stop" @click="pausar()" />
          <q-btn size="18px" color="secondary" push icon="replay" @click="reiniciar()" />
        </q-btn-group>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {

  setup() {
    const timeShow = ref('00:00:00');
    const time = ref(Date.now());
    const cronometro = ref(false);
    const acumulado = ref(0);

    function formatearMS(tiempoMS) {
      const minisconds = tiempoMS % 1000;
      const seconds = Math.floor(((tiempoMS - minisconds) / 1000) % 60);
      const minutos = Math.floor(((tiempoMS - minisconds) / (1000 * 60)) % 60);
      const horas = Math.floor(((tiempoMS - minisconds) / (1000 * 60 * 60)) % 60);
      const data = `${horas.toString().padStart(2, 0)}:${minutos.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}`;
      return data;
    }

    setInterval(() => {
      if (cronometro.value) {
        acumulado.value += Date.now() - time.value;
      }
      time.value = Date.now();
      timeShow.value = formatearMS(acumulado.value);
    }, 1000 / 60);

    return {
      timeShow,
      time,
      cronometro,
      acumulado,

      iniciar() {
        cronometro.value = true;
      },
      pausar() {
        cronometro.value = false;
      },
      reiniciar() {
        acumulado.value = 0;
      },

    };
  },
};
</script>