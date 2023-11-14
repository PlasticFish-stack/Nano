import { defineStore } from "pinia";

export const useStore = defineStore('labs', {
  state: () => ({
    counter: 0
  })
})