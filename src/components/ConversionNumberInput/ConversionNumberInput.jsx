import React, {useEffect, useState} from 'react';
import './conversion-number-input.scss';
import {useDispatch, useSelector} from "react-redux";
import {changeLeftOperand, changeRightOperand} from "../../store/slices/converterSlice";

const ConversionNumberInput = ({operand, isLeftOperand}) => {
    const onlyNumberRegex = /^[0-9]*$/;
    const [number, setNumber] = useState(operand);

    const dispatch = useDispatch();

    const numberHandler = (e) => {
        if(onlyNumberRegex.test(e.target.value)){
            setNumber(e.target.value);
            dispatch(isLeftOperand ? changeLeftOperand(+e.target.value) : changeRightOperand(+e.target.value))
        }
    };

    useEffect(()=>{
        setNumber(operand)
    }, [operand])


    return (
        <input
            className='conversion-number'
            value={number}
            onChange={numberHandler}
        />
    );
};

export default ConversionNumberInput;