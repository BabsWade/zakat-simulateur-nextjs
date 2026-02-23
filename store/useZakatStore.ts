import { create } from "zustand"

export const useZakatStore = create((set) => ({
  form: {
    cash: 0,
    bank: 0,
    gold: 0,
    investments: 0,
    debts: 0,
  },

  zakat: 0,
  total: 0,

  setField: (field, value) =>
    set((state) => ({
      form: { ...state.form, [field]: value },
    })),

  setResult: (total, zakat) =>
    set({
      total,
      zakat,
    }),
}))