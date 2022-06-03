import './App.scss';
import Header from "./components/Header/Header";
import CurrencyExchangeTitle from "./components/CurrencyExchangeTitle/CurrencyExchangeTitle";
import ConversionFormWrapper from "./components/ConversionFormWrapper/ConversionFormWrapper";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadCurrentCourse} from "./store/slices/converterSlice";

function App() {
    const dispatch = useDispatch();
    const {leftSelect, rightSelect} = useSelector(state => state.converter);
    const currencyTypes = {leftSelect,rightSelect};

    useEffect(()=>{
        dispatch(loadCurrentCourse(currencyTypes));
    }, []);

  return (
    <div className='container'>
        <Header />
        <CurrencyExchangeTitle />
        <ConversionFormWrapper />
    </div>
  );
}

export default App;
