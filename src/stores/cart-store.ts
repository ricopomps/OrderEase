import * as cartInMemory from "@/stores/helpers/cart-in-memory";
import { ProductProps } from "@/utils/data/products";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type ProductCartProps = ProductProps & {
  quantity: number;
};

type StateProps = {
  products: ProductCartProps[];
  add: (product: ProductProps) => void;
  remove: (productToRemoveId: string) => void;
  clear: () => void;
};

export const useCartStore = create(
  persist<StateProps>(
    (set) => ({
      products: [],
      add: (product: ProductProps) =>
        set((state) => ({
          products: cartInMemory.add(state.products, product),
        })),
      remove: (productToRemoveId: string) =>
        set((state) => ({
          products: cartInMemory.remove(state.products, productToRemoveId),
        })),
      clear: () => set({ products: [] }),
    }),
    { name: "OrderEase:cart", storage: createJSONStorage(() => AsyncStorage) }
  )
);
