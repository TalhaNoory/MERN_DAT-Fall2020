import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { LineChart, Line, XAxis, YAxis } from 'recharts';

function Bars() {

    const [orderLineList, setOrderLineList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/read/orderlinelist').then((response) => {
            setOrderLineList(response.data)
        });
    }, []);

    return (
        <div>
            <LineChart width={400} height={300} >
                <Line dataKey="quantity" data={orderLineList} />
                <XAxis dataKey="title" />
                <YAxis />
            </LineChart>
        </div>
    )
}

export default Bars;