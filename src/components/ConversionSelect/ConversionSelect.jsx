import React, {useEffect, useRef, useState} from 'react';
import './conversion-select.scss';
import {currencyList} from "../../data/data";
import {useDispatch} from "react-redux";
import {
    changeLeftOperand,
    changeLeftSelect, changeRightOperand,
    changeRightSelect, swapSelect,
} from "../../store/slices/converterSlice";

const ConversionSelect = ({currency, isLeftOperand, operand}) => {
    const ref = useRef();
    const dispatch = useDispatch();

    const [baseCurrency, setBaseCurrency] = useState(currency);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dropdownHandler = () => setIsDropdownOpen(!isDropdownOpen);

    const pickCurrency = (item) => {
        setIsDropdownOpen(false);
        setBaseCurrency(item);
        dispatch(isLeftOperand ? changeLeftSelect(item) : changeRightSelect(item));
        setTimeout(()=>{
            dispatch(isLeftOperand ? changeLeftOperand(operand) : changeRightOperand(operand));
        }, 200);
    };

    useEffect(()=>{
        setBaseCurrency(currency);
    }, [currency]);

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