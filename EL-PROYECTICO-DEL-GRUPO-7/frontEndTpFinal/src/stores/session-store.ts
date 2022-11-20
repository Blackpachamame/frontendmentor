import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useSessionStatus = defineStore('sessionStatus', {
  state: () => ({
    status: useStorage('state', false),
  }),
  getters: {
    login: (state) => {
      if (state.status) return 'login';
      return 'logout';
    },
  },
  actions: {
    changeStatus() {
      this.status = !this.status;
    },
  },
});
