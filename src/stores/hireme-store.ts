import { create } from "zustand"

type HireMeStore = {
  open: boolean
  setOpen: (open: boolean) => void
}

export const useHireMeStore = create<HireMeStore>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}))
