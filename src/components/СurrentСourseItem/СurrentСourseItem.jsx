import React, {useEffect, useState} from 'react';
import './current-course-item.scss';
import {API_URL, KEY} from "../../data/data";

const СurrentСourseItem = ({title, param}) => {

    const [count, setCount] = useState(0)

    useEffect(()=>{
        const loadCurrencyAmount = async () => {
            try {
                const response = await fetch(`${API_URL}?apiKey=${KEY}&q=${param}&compact=ultra`)
                const data = await response.json();
                setCount((data[param]).toFixed(2));
            } catch (e) {
                alert('problem with api');
            }
        }
        loadCurrencyAmount();
    }, []);

    return (
        <div className='current-course--item'>
            <h3 className='current-course--title'>{title}</h3>
            <span className='current-course--course'>{count}</span>
        </div>
    );
};

export default СurrentСourseItem;