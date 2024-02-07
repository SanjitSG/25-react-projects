import { useState } from "react"




export default function RandomColor() {
  const [colorType, setColorType] = useState('hex');
  const [color, setColor] = useState('#000000');

  function randomColorUtility(length) {
    //helper function
    return Math.floor(Math.random() * length)
  }

  function handleCreateRandomHexColor() {

    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]
    }
    // console.log(hexColor)
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);

  }
  return <div style={{
    width: '100vw',
    height: '100vh',
    background: color
  }}>
    <button onClick={() => setColorType('hex')}>Create HEX color</button>
    <button onClick={() => setColorType('rgb')}>Create RGB color</button>
    <button onClick={colorType === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random color</button>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'fff',
      fontSize: '60px',
      marginTop: '50px',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <h3>{colorType === 'hex' ? 'Hex Color' : 'Rgb color'}</h3>
      <h1>{color}</h1>
    </div>
  </div>

}