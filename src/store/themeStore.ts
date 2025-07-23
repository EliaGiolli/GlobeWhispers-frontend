import { create } from 'zustand'
import { themeState } from '@/types/themeTypes'

export const useThemeStore = create<themeState>((set) => ({
  theme: "light", // default
  toggleTheme: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
  setTheme: (theme) => set({ theme }),
}))