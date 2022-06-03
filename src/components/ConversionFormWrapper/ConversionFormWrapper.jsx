import React from 'react';
import './conversion-form-wrapper.scss';
import ConversionNumberInput from "../ConversionNumberInput/ConversionNumberInput";
import ConversionSelect from "../ConversionSelect/ConversionSelect";

const ConversionFormWrapper = () => {
    return (
        <section className='conversion-form'>
            <div className='conversion-form--left'>
                <ConversionNumberInput />
                <ConversionSelect />
            </div>
            <div className='conversion-form--btn-swap'>
                w
            </div>
            <div className='conversion-form--right'>
                <ConversionNumberInput />
                <ConversionSelect />
            </div>
        </section>
    );
};

export default ConversionFormWrapper;