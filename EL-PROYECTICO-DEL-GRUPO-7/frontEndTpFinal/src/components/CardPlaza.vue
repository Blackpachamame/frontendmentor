<!-- eslint-disable max-len -->
<template>
  <q-card dark :class="[iniciado ? 'iniciar-theme' : pausado ? 'pausar-theme' : 'reiniciar-theme']"
    class="q-ma-sm column justify-between" style="height: 250px; width: 200px">
    <q-card-section>
      <div class="text-h6">
        Plaza #{{ numPlaza }}
      </div>
    </q-card-section>
    <q-card-section class="column items-center">
      <div class="text-h4 q-mb-md">{{ timeShow }}</div>
      <q-btn-group push>
        <q-btn color="positive" push icon="play_arrow" @click="iniciar()" />
        <q-btn color="negative" push icon="stop" @click="pausar()" />
        <q-btn color="secondary" push icon="replay" @click="reiniciar()" />
      </q-btn-group>
    </q-card-section>
  </q-card>
</template>

<script>
import { ref } from 'vue';

export default {
  props: ['index'],
  data() {
    return {
      numPlaza: this.index,
    };
  },
  setup() {
    const timeShow = ref('00:00:00');
    const time = ref(Date.now());
    const cronometro = ref(false);
    const acumulado = ref(0);
    const iniciado = ref(false);
    const pausado = ref(false);

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
      iniciado,
      pausado,

      iniciar() {
        cronometro.value = true;
        iniciado.value = true;
        pausado.value = false;
      },
      pausar() {
        cronometro.value = false;
        iniciado.value = false;
        pausado.value = true;
      },
      reiniciar() {
        acumulado.value = 0;
        cronometro.value = false;
        iniciado.value = false;
        pausado.value = false;
      },

    };
  },
};
</script>

<style lang="sass" scoped>
.q-card
  border-style: solid
  border-width: 3px
  box-shadow: 0 0 10px $primary
.iniciar-theme
  border-color: $positive
  box-shadow: 0 0 10px $positive
.pausar-theme
  border-color: $negative
  box-shadow: 0 0 10px $negative
.reiniciar-theme
  border-color: $primary
  box-shadow: 0 0 10px $primary
</style>
