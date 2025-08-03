import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IClient } from "../models/Client";
import { stateStorage } from "./StateStorage";

interface ClientStore {
  clients: IClient[];
  setClients: (client: IClient[]) => void;
}

export const useClientStore = create<ClientStore>()(
  persist(
    (set, get) => ({
      clients: get()?.clients ?? [],
      setClients: (clients: IClient[]) => set({ ...get(), clients }),
    }),
    {
      name: "clients-storage",
      storage: createJSONStorage(() => stateStorage),
    }
  )
);
