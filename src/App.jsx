import React, { useEffect } from 'react'
import { useState } from 'react';

import { RouterProvider } from 'react-router-dom';

import router from './helpers/router';
import { DATA_URL } from './helpers/constants';
import { CartDetailsContext, DataContext } from './helpers/context';

const App = () => {
    const [data, setData] = useState([]);
    const [cartDetails, setCartDetails] = useState(new Map()); // hashmap of <itemId, itemQuantity>

    const fetchData = async () => {
        const result = await fetch(DATA_URL);
        const jsonResponse = await result.json();
        setData(jsonResponse);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <DataContext.Provider value={data}>
            <CartDetailsContext.Provider value={{ cartDetails, setCartDetails }}>
                <RouterProvider router={router} />
            </CartDetailsContext.Provider>
        </DataContext.Provider>
    )
}

export default App
