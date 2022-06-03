import React from 'react';
import './conversion-form-wrapper.scss';
import ConversionNumberInput from "../ConversionNumberInput/ConversionNumberInput";
import ConversionSelect from "../ConversionSelect/ConversionSelect";

const ConversionFormWrapper = () => {
    return (
        <section className='conversion-form'>
            <ConversionNumberInput />
            <ConversionSelect />
        </section>
    );
};

export default ConversionFormWrapper;