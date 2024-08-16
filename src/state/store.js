import { create } from 'zustand';

const useStore = create((set) => ({
    currency: 'usd',
    setCurrency: (newCurrency) => set((state) => ({currency: state.currency = newCurrency})),
    coins:[],
    setCoin: (data) => set((state) => ({
        coins: [...state.coins, ...data]
    })),
    resetCoin: () => set(() => ({
        coins: []
    })),
    page:1,
    setPage : () => set((state) => ({page :state.page = 1})),
    pageInc: () => set((state) => ({ page: state.page +  1 })),
}));

export default useStore;