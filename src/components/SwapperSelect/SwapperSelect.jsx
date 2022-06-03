import React from 'react';
import './swaper-select.scss';
import swapIcon from "../../assets/icon/swap.png";
import {useDispatch} from "react-redux";
import {swapSelect} from "../../store/slices/converterSlice";

const SwapperSelect = () => {
    const dispatch = useDispatch();
    const swapCourse = () => {
        dispatch(swapSelect());
    }
    return (
        <div className='swapper'>
            <img src={swapIcon} alt="swap" onClick={swapCourse} />
        </div>
    );
};

export default SwapperSelect;