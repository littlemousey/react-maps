import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CityStore {
  savedCities: string[]
  actions: {
    addCity: (cityName: string) => void
    removeCity: (cityName: string) => void
    toggleCity: (cityName: string) => void
  }
}

// Not exported - only custom hooks are exposed
const useCityStore = create<CityStore>()(
  persist(
    (set) => ({
      savedCities: [],
      actions: {
        addCity: (cityName) =>
          set((state) => ({
            savedCities: [...state.savedCities, cityName],
          })),
        removeCity: (cityName) =>
          set((state) => ({
            savedCities: state.savedCities.filter((city) => city !== cityName),
          })),
        toggleCity: (cityName) =>
          set((state) => ({
            savedCities: state.savedCities.includes(cityName)
              ? state.savedCities.filter((city) => city !== cityName)
              : [...state.savedCities, cityName],
          })),
      },
    }),
    {
      name: 'city-storage',
      partialize: (state) => ({ savedCities: state.savedCities }),
    }
  )
)

// Export only custom hooks
export const useSavedCities = () => useCityStore((state) => state.savedCities)
export const useCityActions = () => useCityStore((state) => state.actions)
