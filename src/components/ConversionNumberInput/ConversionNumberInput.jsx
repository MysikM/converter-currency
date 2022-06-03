import React, {useState} from 'react';
import './conversion-number-input.scss';

const ConversionNumberInput = () => {
    const onlyNumberRegex = /^[0-9]*$/;
    const [number, setNumber] = useState('');

    const numberHandler = (e) => {
        if(onlyNumberRegex.test(e.target.value)){
            setNumber(e.target.value);
        }
    };

    return (
        <input
            className='conversion-number'
            value={number}
            onChange={numberHandler}
        />
    );
};

export default ConversionNumberInput;