import { useState, useEffect, useCallback } from "react";



const useChromeStorage = (key: string) => {
    const [value, setValue] = useState<any>();

    useEffect(() => {
        chrome.storage.local.get(key, result => {
            setValue(result[key]);
        });
    }, [key]);

    const setStorage = useCallback((newValue: any) => {
        chrome.storage.local.set({ [key]: newValue });
    }, [key]);

    return [value, setStorage];
};


export {
    useChromeStorage
}