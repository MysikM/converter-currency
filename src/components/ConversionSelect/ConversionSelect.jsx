import React, {useState} from 'react';
import './conversion-select.scss';
import {currencyList} from "../../data/data";

const ConversionSelect = () => {

    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dropdownHandler = () => setIsDropdownOpen(!isDropdownOpen);
    const pickCurrency = (item) => {
        setIsDropdownOpen(false);
        setBaseCurrency(item);
    }
    return (
        <div className='conversion-select'>
            <h6 className='conversion-select--title' onClick={dropdownHandler}>
                {baseCurrency}
            </h6>
            <ul className={`conversion-select--dropdown ${isDropdownOpen && 'conversion-select--dropdown__open'}`}>
                {
                    currencyList.map((el) => <li className='conversion-select--item' key={el.id} onClick={() => pickCurrency(el.currency)}>{el.currency}</li>)
                }
            </ul>
        </div>
    );
};

export default ConversionSelect;