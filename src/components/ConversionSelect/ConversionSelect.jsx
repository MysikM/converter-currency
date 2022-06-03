import React, {useEffect, useRef, useState} from 'react';
import './conversion-select.scss';
import {currencyList} from "../../data/data";

const ConversionSelect = () => {
    const ref = useRef();

    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dropdownHandler = () => setIsDropdownOpen(!isDropdownOpen);
    const pickCurrency = (item) => {
        setIsDropdownOpen(false);
        setBaseCurrency(item);
    };

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isDropdownOpen && ref.current && !ref.current?.contains(e.target)) {
                setIsDropdownOpen(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isDropdownOpen]);

    return (
        <div ref={ref} className='conversion-select'>
            <h4 className='conversion-select--title' onClick={dropdownHandler}>
                {baseCurrency}
            </h4>
            <ul className={`conversion-select--dropdown ${isDropdownOpen && 'conversion-select--dropdown__open'}`}>
                {
                    currencyList.map((el) => <li className='conversion-select--item' key={el.id} onClick={() => pickCurrency(el.currency)}>{el.currency}</li>)
                }
            </ul>
        </div>
    );
};

export default ConversionSelect;