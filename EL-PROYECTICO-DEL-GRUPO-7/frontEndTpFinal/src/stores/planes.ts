/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

interface Props {
  precio: any;
  nombre: any;
  plan: { nombre: string, precio: number };
}
export const usePlanesStore = defineStore('planes', {
  state: () => ({
    planes: useStorage(
      'planes',
      [],
      undefined,
      {
        serializer: {
          read: (v: any) => (v ? JSON.parse(v) : null),
          write: (v: any) => JSON.stringify(v),
        },
      },
    ),
  }),
  getters: {
    mostrar: (state) => state.planes,
  },
  actions: {
    agregarPlan(plan: Props): void {
      const newArray = [plan.nombre, plan.precio];
      // this.planes.push(newArray);
    },
  },
});
