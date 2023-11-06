// https://www.npmjs.com/package/react-qr-code
import './App.scss'
import QRCode from "react-qr-code";
import {useState} from "react";
import Anima from "./assets/Animation/index.jsx";
import Field from "./assets/Field/index.jsx";

function App() {
  const [state, setState] = useState('');

  function showQRCode() {

    const qrcode = document.querySelector('.qr-code');
    qrcode.classList.remove('showQRCode');
    qrcode.classList.add('showQRCode');
  }

  return (
    <>
      <div className='container'>
        <div className="creator">
          <Anima/>
          <h1 className="title">Создание QR-кода</h1>
          <Field setState={setState}/>
          <button className='btn' onClick={showQRCode}>Показать</button>
          <QRCode className='qr-code' value={state}></QRCode>
        </div>
      </div>
    </>
  )
}

export default App
