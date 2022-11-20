<!-- eslint-disable max-len -->
<template>
  <q-page padding class="row q-col-gutter-sm justify-center">
    <!-- Formulario -->
    <div class="col-12 col-md-6">
      <q-card flat class="q-pa-md">

        <q-card-section class="q-pt-none">
          <p class="text-h4 text-center">Modificar Precios</p>
        </q-card-section>

        <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
          <!-- Seleccionar Hora -->
          <q-input filled v-model="hora" type="number" label="Hora" hint="Seleccionar Hora" lazy-rules
            :rules="horaRules">
            <template v-slot:prepend>
              <q-icon name="schedule" />
            </template>
          </q-input>
          <!-- Nuevo Precio -->
          <q-input filled v-model="precioNew" type="number" label="Nuevo Precio" hint="En pesos" lazy-rules
            :rules="precioRules">
            <template v-slot:prepend>
              <q-icon name="attach_money" />
            </template>
          </q-input>
          <!-- Botones -->
          <div class="row justify-end">
            <q-btn label="Limpiar" type="reset" color="primary" flat class="q-mr-sm" />
            <q-btn label="Actualizar" type="submit" color="primary" />
          </div>
        </q-form>

      </q-card>
    </div>
    <!-- Precios -->
    <div class="col-12 col-md-6">
      <q-table flat title="Precios por Hora" :rows="rows" :columns="columns" row-key="name" selection="single"
        v-model:selected="selected" :filter="filter" v-model:pagination="pagination"
        :rows-per-page-options="rowsPerPageOptions">
        <!-- Filtro -->
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Buscar">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref, computed, watch } from 'vue';

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Hora',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'precio', align: 'left', label: 'Precio', field: 'precio', sortable: true,
  },
];

const rows = [
  {
    name: 1,
    precio: 100,
  },
  {
    name: 2,
    precio: 200,
  },
  {
    name: 3,
    precio: 300,
  },
  {
    name: 4,
    precio: 400,
  },
  {
    name: 5,
    precio: 500,

  },
  {
    name: 6,
    precio: 600,
  },
  {
    name: 7,
    precio: 700,
  },
  {
    name: 8,
    precio: 800,
  },
  {
    name: 9,
    precio: 900,
  },
  {
    name: 10,
    precio: 1000,
  },
];

export default {
  setup() {
    const $q = useQuasar();
    const hora = ref(null);
    const precioNew = ref(null);

    const onSubmit = () => {
      rows.value = [...rows.value, {
        hoar: hora.value,
        precio: precioNew.value,
      }];
    };

    const onReset = () => {
      hora.value = null;
      precioNew.value = null;
    };

    function getItemsPerPage() {
      return 5;
    }

    const filter = ref('');
    const pagination = ref({
      page: 1,
      rowsPerPage: getItemsPerPage(),
    });

    watch(() => $q.screen.name, () => {
      pagination.value.rowsPerPage = getItemsPerPage();
    });

    return {
      hora,
      precioNew,
      onSubmit,
      onReset,
      columns,
      rows,
      filter,
      pagination,
      rowsPerPageOptions: computed(() => ($q.screen.gt.xs
        ? [5, 10]
        : [5])),
      horaRules: [
        (val) => (val && val.length > 0) || 'Por favor, seleccione una hora',
        (val) => (val > 0) || 'Por favor, ingrese un valor válido',
      ],
      precioRules: [
        (val) => (val && val.length > 0) || 'Por favor, ingrese un precio',
        (val) => (val > 0) || 'Por favor, ingrese un valor válido',
      ],
      selected: ref([]),
    };
  },
};
</script>

<style lang="sass" scoped>
.q-table
  &__container
    padding-top: 4px
</style>
