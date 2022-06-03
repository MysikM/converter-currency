import React from 'react';
import './conversion-form-wrapper.scss';
import ConversionNumberInput from "../ConversionNumberInput/ConversionNumberInput";
import ConversionSelect from "../ConversionSelect/ConversionSelect";
import {useSelector} from "react-redux";

const ConversionFormWrapper = () => {
    const {leftSelect, rightSelect, leftOperand, rightOperand} = useSelector(state => state.converter);
    return (
        <section className='conversion-form'>
            <div className='conversion-form--left'>
                <ConversionNumberInput operand={leftOperand} isLeftOperand={true} />
                <ConversionSelect currency={leftSelect} isLeftOperand={true} operand={leftOperand} />
            </div>
            <div className='conversion-form--btn-swap'>
                w
            </div>
            <div className='conversion-form--right'>
                <ConversionNumberInput operand={rightOperand} isLeftOperand={false} />
                <ConversionSelect currency={rightSelect} isLeftOperand={false} operand={rightOperand}/>
            </div>
        </section>
    );
};

export default ConversionFormWrapper;