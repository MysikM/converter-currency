import './App.scss';
import Header from "./components/Header/Header";
import CurrencyExchangeTitle from "./components/CurrencyExchangeTitle/CurrencyExchangeTitle";
import ConversionFormWrapper from "./components/ConversionFormWrapper/ConversionFormWrapper";

function App() {
  return (
    <div className='container'>
        <Header />
        <CurrencyExchangeTitle />
        <ConversionFormWrapper />
    </div>
  );
}

export default App;
