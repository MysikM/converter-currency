import React from 'react';
import './currency-exchange-title.scss';
import {useSelector} from "react-redux";

const CurrencyExchangeTitle = () => {
    const {leftSelect, course, rightSelect} = useSelector(state => state.converter);
    return (
        <section className='live-exchange'>
            <h2 className='live-exchange--title'>1 {leftSelect} = {course} {rightSelect}.</h2>
        </section>
    );
};

export default CurrencyExchangeTitle;