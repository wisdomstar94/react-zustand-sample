import { create } from "zustand";

export interface SignUpInfoState {
  name?: string;
  age?: number;
  habit?: string;
  addr?: string;

  setName: (name: string) => void;
  setAge: (age: number) => void;
  setHabit: (habit: string) => void;
  setAddr: (addr: string) => void;
  clear: () => void;
}

export const useSignUpInfoStore = create<SignUpInfoState>((set) => ({
  // values
  name: undefined,
  age: undefined,
  habit: undefined,
  addr: undefined,

  // reducers
  setName: (name: string) => set((state) => ({ name })),
  setAge: (age: number) => set((state) => ({ age })),
  setHabit: (habit: string) => set((state) => ({ habit })),
  setAddr: (addr: string) => set((state) => ({ addr })),
  clear: () => set({}),
}));
