import { create } from 'zustand'

interface TabState {
  tabId: string;
  setTabId: (id: string) => void;
}

const useTabStore = create<TabState>((set) => ({
  tabId: 'basic',
  setTabId: (id: string) => set({ tabId: id }),
}))

export default useTabStore