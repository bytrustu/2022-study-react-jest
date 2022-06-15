import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import Products from "./Products";
import ErrorBanner from "../../components/ErrorBanner";
import Options from "./Options";

const Type = ({ orderType }) => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false)

    const loadItems = async (orderType) => {
        try {
            const response = await axios.get(`http://localhost:5001/${orderType}`);
            setItems(response.data);
        } catch (e) {
            setError(true)
        }
    };

    const ItemComponent = orderType === 'products' ? Products : Options;
    const optionItems = items.map((item) => (
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
        />
    ));

    useEffect(() => {
        loadItems(orderType);
    }, [orderType]);

    if (error) {
        return <ErrorBanner message='에러가 발생했습니다.' />
    }

    return (
        <>
            <h2>주문 종류</h2>
            <p>하나의 가격:</p>
            <p>총 가격:</p>
            <div
                style={{ display: 'flex', flexDirection: orderType === 'options' && 'column' }}
            >
                {optionItems}
            </div>
        </>
    )
};

export default Type;
