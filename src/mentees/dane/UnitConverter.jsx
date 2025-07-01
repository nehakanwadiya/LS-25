import { useState } from 'react';
import './UnitConverter.css';

export default function UnitConverter() {
  const [cm, setCm] = useState('');
  const [inches, setInches] = useState('');

  const handleCmChange = (e) => {
    const value = e.target.value;
    setCm(value);
    const cmVal = parseFloat(value);
    if (!isNaN(cmVal)) {
      setInches((cmVal / 2.54).toFixed(2));
    } else {
      setInches('');
    }
  };

  const handleInchesChange = (e) => {
    const value = e.target.value;
    setInches(value);
    const inVal = parseFloat(value);
    if (!isNaN(inVal)) {
      setCm((inVal * 2.54).toFixed(2));
    } else {
      setCm('');
    }
  };

  return (
    <div className="dual-converter">
      <label>CM ↔ Inches Converter</label>
      <div className="converter-inputs">
        <div className="input-block">
          <label>Centimeters</label>
          <input
            type="number"
            value={cm}
            onChange={handleCmChange}
            placeholder="cm"
          />
        </div>
        <div className="input-block">
          <label>Inches</label>
          <input
            type="number"
            value={inches}
            onChange={handleInchesChange}
            placeholder="in"
          />
        </div>
      </div>
    </div>
  );
}
