import React from 'react';
import './conversion-form-wrapper.scss';
import ConversionNumberInput from "../ConversionNumberInput/ConversionNumberInput";
import ConversionSelect from "../ConversionSelect/ConversionSelect";
import {useSelector} from "react-redux";

const ConversionFormWrapper = () => {
    const {leftSelect, rightSelect} = useSelector(state => state.converter);
    return (
        <section className='conversion-form'>
            <div className='conversion-form--left'>
                <ConversionNumberInput />
                <ConversionSelect currency={leftSelect} leftOperand={true} />
            </div>
            <div className='conversion-form--btn-swap'>
                w
            </div>
            <div className='conversion-form--right'>
                <ConversionNumberInput />
                <ConversionSelect currency={rightSelect} leftOperand={false}/>
            </div>
        </section>
    );
};

export default ConversionFormWrapper;