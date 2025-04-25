
import { produce } from "immer";
import { create } from "zustand";


/**
 * Take task status management as an example
 */


export type CurrentTaskSlice = {
    currentTaskStatus: "idle" | "running" | "done" | "error";
    actions: {
        setCurrentTaskStatus: (payload: string) => void;
    };
};

export const createCurrentTaskSlice = create<CurrentTaskSlice>((set, get) => ({
    currentTaskStatus: "idle",
    actions: {
        setCurrentTaskStatus: (payload: string) => {
            set(
                produce((state) => {
                    state.currentTaskStatus = payload;
                })
            )
        },
    }
}))