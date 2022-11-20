<template>
  <q-page padding class="row justify-center">
    <div class="q-pa-md col-12 col-md-6">
      <p class="q-pa-md text-h4 text-center">Lista de Empleados</p>
      <q-table :rows="rows" :columns="columns" row-key="name" flat>

        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.label }}
            </q-th>
            <q-th auto-width />
          </q-tr>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.value }}
            </q-td>
            <q-td auto-width>
              <q-btn size="12px" round dense flat unelevated icon="delete" color="negative" />
            </q-td>
          </q-tr>
        </template>

      </q-table>
      <!-- Añadir Empleado -->
      <div class="q-mt-sm row justify-center">
        <span><a href="nuevoEmpleado">Añadir Empleado</a></span>
      </div>
    </div>
  </q-page>
</template>

<script>
const columns = [
  {
    name: 'nombre',
    required: true,
    label: 'Nombre',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
]

const rows = [
  {
    name: 'Pepe Argento',
  },
  {
    name: 'Hannah Montana',
  },
  {
    name: 'Firulais',
  },
]

export default {
  setup() {
    return {
      columns,
      rows
    }
  }
}
</script>