import { storage } from "@/infrastructure/storage";
import { StateStorage } from "zustand/middleware";

export const stateStorage: StateStorage = {
  getItem: (key) => storage.getString(key),
  setItem: (key, newValue) => storage.set(key, newValue),
  removeItem: (key) => storage.delete(key),
};
