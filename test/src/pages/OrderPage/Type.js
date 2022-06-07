import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Products from "./Products";

const Type = ({ orderType }) => {
    const [items, setItems] = useState([]);

    const loadItems = async (orderType) => {
        try {
            const response = await axios.get(`http://localhost:5000/${orderType}`);
            setItems(response.data);
        } catch (e) {
            console.error(e);
        }
    };

    const ItemComponent = orderType === 'products' ? Products : null;
    const optionItems = items.map((item) => (
        <ItemComponent
            key={item.key}
            name={item.name}
            imagePath={item.imagePath}
        />
    ));

    useEffect(() => {
        loadItems(orderType);
    }, [orderType]);

    return <div>{optionItems}</div>
};

export default Type;
