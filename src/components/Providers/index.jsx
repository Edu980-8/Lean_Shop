"use client";
import React, { useEffect, useState,createContext } from "react";

export const ApiContext = createContext(null);

export function Provider({children}){
    const [status, setStatus] = React.useState('initial');
    const [data, setData] = React. useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("/api/products",
                {
                    method:'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const getData = await response.json();
            setStatus("done");
            setData(getData);
            console.log(getData)
        } catch (err) {
            setStatus("error");
            console.error('Failed to fetch data:', err);
        }
    }
    return (
        <ApiContext.Provider
            value={{ status, data }}>
            {children}
        </ApiContext.Provider>
    );
}
