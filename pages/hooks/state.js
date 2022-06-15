import create from "zustand"
import { persist } from "zustand/middleware"

// const useStore = create((set) => ({
//   items: [],
//   setItems: (item) => set((state) => ({ items: [...state.items, item ] })),
//   removeItem: (id) => set((state) => ({ items: state.items.filter(item => item.id !== id) })),
// }))

export const useStore = create(persist(set => ({
  items: [],
  setItems: (item) => set((state) => ({ items: [...state.items, item ] })),
  removeItem: (id) => set((state) => ({ items: state.items.filter(item => item.id !== id) })),
})))

export default  useStore