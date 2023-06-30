import { atom } from 'jotai';

export const original = atom(0);
export const derived = atom(
    (get) => get(original) * 2,
    (get, set) => set(original, get(original) + 1)
);